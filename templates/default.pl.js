const { getInstaller } = require("./perl_installer_linux");
const config = {
  files: [],
  commands: [getInstaller()],
  repos: ["https://github.com/Tencent/rapidjson.git"],
  descriptions: ["completed."],
};

module.exports = config;
