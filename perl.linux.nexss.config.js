let languageConfig = Object.assign({}, require("./perl.win32.nexss.config"));
languageConfig.compilers = {
  perl5: {
    install:
      "PERL_MM_USE_DEFAULT=1 apt install perl && apt install perl-CPAN && PERL_MM_USE_DEFAULT=1 cpan -i CPAN && cpan JSON",
    command: "perl",
    args: "<file>",
    help: ``,
  },
};

const {
  replaceCommandByDist,
  dist,
} = require(`${process.env.NEXSS_SRC_PATH}/lib/osys`);

const distName = dist();
languageConfig.dist = distName;

// TODO: Later to cleanup this config file !!
switch (distName) {
  // case "Arch Linux":
  //   languageConfig.compilers.perl5.install = `${sudo}pacman -Sy --noconfirm perl`;
  //   break;
  default:
    languageConfig.compilers.perl5.install = replaceCommandByDist(
      languageConfig.compilers.perl5.install
    );
    break;
}

module.exports = languageConfig;
