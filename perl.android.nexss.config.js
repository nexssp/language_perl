let languageConfig = Object.assign({}, require("./perl.win32.nexss.config"));
// const sudo = process.sudo;

languageConfig.compilers = {
  perl5: {
    install: `pkg install -y perl`,
    command: "perl",
    args: "<file>",
    help: ``,
  },
};

const distName = process.distro;
languageConfig.dist = distName;

module.exports = languageConfig;
