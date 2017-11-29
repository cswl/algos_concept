import path from "path";
import { bootStrapfiles } from "./bootstrap.mjs";
import extractChallenges from "./extractor.mjs";
import initRepo from "./init_repo.mjs";

const cwd = process.cwd();
const fccDir = path.resolve(cwd, "freeCodeCamp");

async function main([op]) {
  if (op === "init") {
    initRepo(cwd);
  } else if (op === "bootstrap") {
    bootStrapfiles(cwd, fccDir);
  } else if (op === "extract") {
    extractChallenges(cwd, fccDir);
  } else {
    console.log("Use init or bootstrap or extract");
  }
}

main(process.argv.slice(2));
