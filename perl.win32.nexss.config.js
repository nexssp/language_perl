let languageConfig = Object.assign({}, require("../config.win32"));
languageConfig.title = "Perl";
languageConfig.description =
  "Perl 5 is a highly capable, feature-rich programming language with over 30 years of development.";
languageConfig.url = "https://www.perl.org/";
languageConfig.extensions = [".pl"];
languageConfig.builders = {}; // Check cpp or python to fill in example
languageConfig.compilers = {
  perl6: {
    install: "choco install StrawberryPerl",
    // Cpp does not have possibility to compile and run on the fly. We need to save it as a exe file first.
    command: "perl",
    args: "<file>",
    help: ``
  }
};
languageConfig.errors = require("./nexss.perl.errors");
languageConfig.languagePackageManagers = {
  npm: {
    //FIXME:
    installation: "installed.",
    messageAfterInstallation: "",
    installed: "cpan installed",
    search: "cpan search",
    install: "cpan install",
    uninstall: "cpan remove",
    help: "cpan",
    version: "cpan version",
    init: () => {},
    // if command not found in specification
    // run directly on package manager
    else: "cpan <default> <args>"
  }
};

module.exports = languageConfig;
