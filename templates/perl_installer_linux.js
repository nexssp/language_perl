function getInstaller() {
  const sudo = process.sudo;
  switch (process.platform) {
    case "win32":
      return "";
    case "linux":
      switch (process.distro) {
        // case os.distros.ARCH:
        //   return replacePMByDistro("pacman -S --noconfirm -y rapidjson");
        // case os.distros.ORACLE:
        //   return replacePMByDistro(
        //     "yum install -y perl-CPAN && PERL_MM_USE_DEFAULT=1 cpan -i CPAN && perl -MCPAN -e 'install JSON::PP'"
        //   );
        // case os.distros.FEDORA:
        //   return replacePMByDistro("dnf install -y rapidjson-devel");
        // case process.distros.AMAZON_AMI:
        // case process.distros.AMAZON:
        // case process.distros.RHEL:
        // case process.distros.FEDORA:

        default:
          return process.replacePMByDistro(`PERL_MM_USE_DEFAULT=1
${sudo}yum install -y perl-App-cpanminus
(echo y;echo o conf prerequisites_policy follow;echo o conf commit)|cpan
if !  perldoc -l JSON::PP; then ${sudo}apt install perl-CPAN; ${sudo}cpan Test JSON::PP; fi`);
      }

    case "darwin":
      return "brew install rapidjson-dev";
    default:
      console.error(`${process.platform} is not implemented.`);
      break;
  }
}

module.exports = { getInstaller };
