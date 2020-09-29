let languageConfig = Object.assign({}, require("./perl.win32.nexss.config"));
const os = require("@nexssp/os");
const sudo = os.sudo();

languageConfig.compilers = {
  perl5: {
    install: `${sudo}PERL_MM_USE_DEFAULT=1 apt install perl make`,
    command: "perl",
    args: "<file>",
    help: ``,
  },
};

const distName = os.name();
languageConfig.dist = distName;

// TODO: Later to cleanup this config file !!
switch (distName) {
  case "Oracle Linux Server":
    languageConfig.compilers.perl5.install =
      `${sudo}apt-get install -y gcc gcc-c++ kernel-devel make
` + languageConfig.compilers.perl5.install;
    languageConfig.compilers.perl5.install = os.replacePMByDistro(
      languageConfig.compilers.perl5.install
    );
    break;
  case "Alpine Linux": // 3.12
    languageConfig.compilers.perl5.install = `${sudo}apk add ca-certificates wget
apk add perl make perl-app-cpanminus
PERL_MM_USE_DEFAULT=1 cpanm
cpanm JSON::PP`; // TODO: move json:pp to /templates/
    break;
  case "openSUSE Leap":
  case "openSUSE Tumbleweed":
    languageConfig.compilers.perl5.install = `${sudo}zypper -n perl make perl-App-cpanminus  && PERL_MM_USE_DEFAULT=1 cpan && cpan JSON::PP`;
  default:
    languageConfig.compilers.perl5.install = os.replacePMByDistro(
      languageConfig.compilers.perl5.install
    );
    break;
}

module.exports = languageConfig;
