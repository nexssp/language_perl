module.exports = {
  description: "Perl",
  type: "language",
  author: "Marcin Polak <mapoart@gmail.com>",
  version: "1.0",
  compiler: "perl",
  extension: ".pl",
  executeCommandLine: "",
  InteractiveShell: "",
  errors: {
    "'perl' is": {
      win32: "scoop install perl",
      darwin: "brew install perl",
      linux: "apt install perl"
    },
    "you may need to install": {
      win32: "cpan <module>",
      darwin: "brew install cpanm && sudo cpan <module>",
      linux: "'sudo cpan <module>' or 'apt-get install lib<module>-perl'"
    }
  },
  url: ""
};
