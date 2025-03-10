{
  description = "Generate PureScript data types from Haskell data types";
  nixConfig.bash-prompt = "\\[\\e[0m\\][\\[\\e[0;2m\\]nix-develop \\[\\e[0;1m\\]purescript-bridge \\[\\e[0;93m\\]\\w\\[\\e[0m\\]]\\[\\e[0m\\]$ \\[\\e[0m\\]";
  inputs = {
    haskell-nix.url = "github:mlabs-haskell/haskell.nix/2b4c58932d6c19a0c6b4bcde0a8c0581574c0d25";
    flake-utils.url = "github:numtide/flake-utils";
    easy-ps = {
      url = "github:justinwoo/easy-purescript-nix";
      flake = false;
    };

    # Needed for crypto overlay
    iohk-nix = {
      url = "github:input-output-hk/iohk-nix";
      flake = false;
    };

    # We're reusing inputs from bot-plutus-interface as it's currently the source of nix truth.
    bot-plutus-interface.url = "github:mlabs-haskell/bot-plutus-interface";

    # Our servant-purescript fork
    servant-purescript = {
      url = "github:mlabs-haskell/servant-purescript";
      flake = false;
    };

  };

  outputs = inputs@{ self, flake-utils, haskell-nix, ... }:
    flake-utils.lib.eachSystem [ "x86_64-linux" "x86_64-darwin" ] (system:
      let
        # TODO: Perhaps cleanSource
        src = ./.;

        # Nixpkgs from bot-plutus-interface
        inherit (inputs.bot-plutus-interface.inputs) nixpkgs;

        # Reliably cached
        pkgs = import nixpkgs { inherit system; };

        # # Poor caching due to overlay
        pkgs' = import nixpkgs {
          overlays =
            [ haskell-nix.overlay (import "${inputs.iohk-nix}/overlays/crypto") ];
          inherit system;
          inherit (haskell-nix) config;
        };

        easy-ps = import inputs.easy-ps { inherit pkgs; };

        # Haskell.nix project and flake
        # Filter out purescript-bridge
        extraSources' = builtins.filter (e: e.src.rev != "47a1f11825a0f9445e0f98792f79172efef66c00") inputs.bot-plutus-interface.extraSources;
        # Use our servant-purescript fork
        extraSources'' = builtins.map
          (e:
            if e.src.rev == "44e7cacf109f84984cd99cd3faf185d161826963"
            then { src = inputs.servant-purescript; subdirs = e.subdirs; }
            else e)
          extraSources';
        haskellProject = import ./nix/haskell.nix {
          inherit src system pkgs pkgs' easy-ps;
          inputs = inputs.bot-plutus-interface.inputs;
          extraSources = extraSources'';
        };
        haskellFlake = haskellProject.flake { };

        # Code quality
        cq = import ./nix/code-quality.nix { inherit pkgs easy-ps; };
        fileCheckers = cq.checkers pkgs;
        fileFixers = cq.fixers pkgs;

        pursVersion = "purs-0_14_5";
        # plutus-ledger-api Purescript typelib
        sampleLedgerTypelib = import ./nix/purescript-bridge-typelib.nix {
          inherit pkgs;
          purs = easy-ps.${pursVersion};
          pursDir = ./plutus-ledger-api-typelib;
        };
        ledgerTypelib = import ./nix/purescript-bridge-typelib.nix {
          inherit pkgs;
          purs = easy-ps.${pursVersion};
          pursDir = (pkgs.runCommand "generate-plutus-ledger-api-typelib"
            {
              cli = haskellProject.getComponent "purescript-bridge:exe:cli";
            }
            ''
              mkdir $out
              $cli/bin/cli generate-plutus-ledger-api-types --purs-dir $out
            '');
        };

        # Purescript - Haskell round trip test purs flake
        roundTripTestPursFlake =
          let
            inherit pkgs easy-ps;
            src = ./test/RoundTrip/app;
            pursSubDirs = [ "/src" "/generated" ];
            nodejs = pkgs.nodejs-14_x;
            spagoPkgs = import (src + "/spago-packages.nix") { inherit pkgs; };
            spagoLocalPkgs = [ ];
            nodePkgs =
              import (src + "/node2nix.nix") { inherit pkgs system nodejs; };
            purs = easy-ps.${pursVersion};
          in
          import ./nix/purescript-flake.nix {
            name = "purescript-bridge-roundtrip-test";
            inherit src pursSubDirs pkgs system easy-ps spagoPkgs spagoLocalPkgs
              nodejs nodePkgs purs;
          };
        combineDevShells = hsShell: pursShell:
          hsShell.overrideAttrs
            (
              old: {
                buildInputs = old.buildInputs ++ pursShell.buildInputs;
                shellHook = ''
                  ${old.shellHook}
                  ${pursShell.shellHook}
                '';
              }
            ) // {
            inherit (pursShell) spagoPkgs;
          };
      in
      {
        # Useful attributes
        inherit pkgs easy-ps haskellProject haskellFlake;

        # Flake standard attributes
        packages = haskellFlake.packages // {
          sample-plutus-ledger-api-typelib = sampleLedgerTypelib;
          plutus-ledger-api-typelib = ledgerTypelib;
        };
        checks = haskellFlake.checks;
        devShells = {
          default = haskellFlake.devShell;
          roundTripTest = combineDevShells haskellFlake.devShell roundTripTestPursFlake.devShell;
        };

        # Used by CI
        build-all = pkgs.runCommand "build-all"
          (self.packages.${system} // self.devShells.${system})
          "touch $out";

        # Check files
        check-files = pkgs.runCommand "check-files"
          ({
            checks = [
              (fileCheckers.checkNixFiles src)
              (fileCheckers.checkHaskellFiles src)
              (fileCheckers.checkCabalFiles src)
              (fileCheckers.checkShellFiles src)
              (fileCheckers.checkDhallFiles src)
              (fileCheckers.checkPurescriptFiles ./plutus-ledger-api-typelib)
              (fileCheckers.checkPurescriptFiles ./test/RoundTrip/app)
            ];
          })
          "touch $out";

        # Fix files
        fix-files = cq.makeBundle {
          myScriptName = "fix-files";
          myScript = ''
            ${fileFixers.fixNixFiles}/bin/fix-nix-files-bundle $@
            ${fileFixers.fixHaskellFiles}/bin/fix-haskell-files-bundle $@
            ${fileFixers.fixCabalFiles}/bin/fix-cabal-files-bundle $@
            ${fileFixers.fixShellFiles}/bin/fix-shell-files-bundle $@
            ${fileFixers.fixDhallFiles}/bin/fix-dhall-files-bundle $@
            ${fileFixers.fixPurescriptFiles}/bin/fix-purescript-files-bundle $@/plutus-ledger-api-typelib
            ${fileFixers.fixPurescriptFiles}/bin/fix-purescript-files-bundle $@/test/RoundTrip/app
          '';
        };

        # Purescript and bridge Nix libs
        lib = {
          bridgeTypelib = import ./nix/purescript-bridge-typelib.nix;
          pursFlake = import ./nix/purescript-flake.nix;
          pursLib = import ./nix/purescript-lib.nix;
        };
      }
    );
}
