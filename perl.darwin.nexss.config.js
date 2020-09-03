let languageConfig = Object.assign({}, require("./perl.win32.nexss.config"));
languageConfig.compilers = {
  perl5: {
    install: "brew install perl",
    command: "perl",
    args: "<file>",
    help: ``,
  },
};

module.exports = languageConfig;
