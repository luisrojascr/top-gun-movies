const path = require("path");
const ROOT_DIRECTORY = process.cwd();

module.exports = {
  mode: "development",
  entry: {
    main: path.resolve(ROOT_DIRECTORY, "src/index.js"),
  },
};
