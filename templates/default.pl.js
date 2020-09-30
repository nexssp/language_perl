// additional operations for templates like copy extra libraries.

function getInstaller() {
  const os = require(`${process.env.NEXSS_SRC_PATH}/node_modules/@nexssp/os/`);

  switch (process.platform) {
    case "win32":
      return "";
    case "linux":
      switch (os.name()) {
        // case os.distros.ARCH:
        //   return replaceCommandByDist("pacman -S --noconfirm -y rapidjson");
        // case os.distros.ORACLE:
        //   return replaceCommandByDist(
        //     "yum install -y perl-CPAN && PERL_MM_USE_DEFAULT=1 cpan -i CPAN && perl -MCPAN -e 'install JSON::PP'"
        //   );
        // case os.distros.FEDORA:
        //   return replaceCommandByDist("dnf install -y rapidjson-devel");
        default:
          return os.replacePMByDistro(`PERL_MM_USE_DEFAULT=1
(echo y;echo o conf prerequisites_policy follow;echo o conf commit)|cpan
if !  perldoc -l JSON::PP; then apt install perl-CPAN; cpan Test JSON::PP; fi`);
      }

    case "darwin":
      return "brew install rapidjson-dev";
    default:
      console.error(`${process.platform} is not implemented.`);
      break;
  }
}

const config = {
  files: [],
  commands: [getInstaller()],
  repos: ["https://github.com/Tencent/rapidjson.git"],
  descriptions: ["completed."],
};

module.exports = config;
