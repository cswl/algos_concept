// entry point for @std/esm

require = require("@std/esm")(module, {
  debug: true,
  sourceMap: true
});
module.exports = require("./src/main.mjs").default;
