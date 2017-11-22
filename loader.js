#!/usr/bin/env node

// entry point for @std/esm
require = require("@std/esm")(module);
module.exports = require("./src/main.mjs").default;
