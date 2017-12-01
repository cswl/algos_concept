#!/usr/bin/env node

// Must run BEFORE requiring other modules
const pkg = require('./package.json')
require('please-upgrade-node')(pkg)

// entry point for @std/esm
require = require("@std/esm")(module);
module.exports = require("./src/main.mjs").default;