// additional operations for templates like copy extra libraries.

function getInstaller() {
  const os = require("@nexssp/os"); // this is included in main nexss programmer cli: @nexssp/cli

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
          return os.replacePMByDistro(`export PERL_MM_USE_DEFAULT=1
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
  descriptions: ["JSON:PP has been installed."],
};

module.exports = config;
