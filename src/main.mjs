import path from "path";
import { bootStrapfiles } from "./bootstrap.mjs";
import initRepo from "./init_repo.mjs";

const cwd = process.cwd();
const fccDir = path.resolve(cwd, "freeCodeCamp");

async function main([op]) {
  if (op === "init") {
    initRepo(cwd);
  } else if (op === "bootstrap") {
    bootStrapfiles(cwd, fccDir);
  } else {
    console.log("Use init or bootstrap ");
  }
}

main(process.argv.slice(2));
