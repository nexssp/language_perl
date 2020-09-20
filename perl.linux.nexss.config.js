let languageConfig = Object.assign({}, require("./perl.win32.nexss.config"));
let sudo = "sudo ";
if (process.getuid && process.getuid() === 0) {
  sudo = "";
}

languageConfig.compilers = {
  perl5: {
    install: `${sudo}PERL_MM_USE_DEFAULT=1 apt install perl make && apt install perl-CPAN && PERL_MM_USE_DEFAULT=1 cpan && cpan JSON::PP`,
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
  case "Alpine Linux": // 3.12
    languageConfig.compilers.perl5.install = `${sudo}apk add ca-certificates wget
apk add perl make perl-app-cpanminus
PERL_MM_USE_DEFAULT=1 cpanm
cpanm JSON::PP`;
    break;
  case "openSUSE Leap":
  case "openSUSE Tumbleweed":
    languageConfig.compilers.perl5.install = `${sudo}zypper -n perl make perl-App-cpanminus  && PERL_MM_USE_DEFAULT=1 cpan && cpan JSON::PP`;
  default:
    languageConfig.compilers.perl5.install = replaceCommandByDist(
      languageConfig.compilers.perl5.install
    );
    break;
}

module.exports = languageConfig;
