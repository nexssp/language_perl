// More about error handling in Nexss Programmer can be found:
// https://github.com/nexssp/cli/wiki/Errors-Solutions

module.exports = {
  "Undefined subroutine &main::(?<function>.*?) called at myfile.pl line (?<line>.*?),":
    "Function not found '<function>' at line <line>. You may need to look at: https://perldoc.perl.org/index-functions.html",
  "Can't locate CPAN.pm": process.replacePMByDistro(
    "apt-get install perl-CPAN"
  ),
  "Can't locate JSON/PP.pm":
    process.replacePMByDistro("apt-get install -y perl-CPAN") +
    " && PERL_MM_USE_DEFAULT=1 cpan -i CPAN && perl -MCPAN -e 'install JSON::PP'",
};
