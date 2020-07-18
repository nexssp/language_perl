// More about error handling in Nexss Programmer can be found:
// https://github.com/nexssp/cli/wiki/Errors-Solutions
module.exports = {
  "Undefined subroutine &main::(?<function>.*?) called at myfile.pl line (?<line>.*?),":
    "Function not found '<function>' at line <line>. You may need to look at: https://perldoc.perl.org/index-functions.html",
};
