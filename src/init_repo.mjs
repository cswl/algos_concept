import path from "path";
import fs from "fs";
import util from "util";
import os from "os";
import childProcess from "child_process";

const writeFile = util.promisify(fs.writeFile);
const execFile = util.promisify(childProcess.execFile);

const gitignore_contents = ["node_modules/", "freeCodeCamp"];

export default async function(cwd) {
  await execFile("git", ["init"]);
  await writeFile(
    path.resolve(cwd, ".gitignore"),
    arrayToFile(gitignore_contents, os.EOL)
  );
}

function arrayToFile(arr, eol) {
  // Convert array to new-line seperated data.
  return arr.reduce((a, l) => `${a}${eol}${l}`);
}
