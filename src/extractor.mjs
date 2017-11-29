import util from "util";
import fs from "fs";
import url from "url";
import querystring from "querystring";
import path from "path";
import jsdom from "jsdom";

import { normalizeChFilename, filesArr } from "helper.mjs";
import { getAlgoFromJSON } from "helper.mjs";
import { getChllgPaths } from "bootstrap.mjs";

const { JSDOM } = jsdom;
const writeFile = util.promisify(fs.writeFile);
const readFile = util.promisify(fs.readFile);

export default async function main(cwd, fccDir) {
  const fData = await readFile(path.resolve(cwd, "dump_table.html"), "utf-8");
  const dom = new JSDOM(fData);
  const { document } = dom.window;
  const aStore = Array.from(document.querySelectorAll("a")).map(element => {
    return element.href;
  });
  const uniqs = aStore.filter((item, pos, self) => {
    return self.indexOf(item) == pos;
  });
  const solutions = uniqs.map(e => {
    const [name, soln] = e.split("?solution=");
    const chlg = normalizeChFilename(name.replace("/challenges/", ""));
    const solution = querystring.unescape(soln);
    return [chlg, solution];
  });
  const chllgs = await getAlgoFromJSON(fccDir);
  const chllg_paths = getChllgPaths(cwd);
  const files = [
    ...filesArr(
      chllg_paths.basic,
      chllgs.basic.filter(({ id }) => id !== "bd7158d2c442eddfbeb5bd1f")
    ),
    ...filesArr(chllg_paths.inter, chllgs.inter),
    ...filesArr(chllg_paths.advnc, chllgs.advnc)
  ];
  const filesMap = new Map(files);
  const solnMap = new Map(solutions);

  console.log("Files not in solutions");
  for (const k of filesMap.keys()) {
    if (!solnMap.has(k)) {
      console.log(`'${k}'`);
    }
  }
  console.log("Solutions not in files");
  for (const k of solnMap.keys()) {
    if (!filesMap.has(k)) {
      console.log(`'${k}'`);
    }
  }
  for (const k of solnMap.keys()) {
    if (filesMap.has(k)) {
      const data = solnMap.get(k);
      const { path: p, filename: fname } = filesMap.get(k);
      const fpath = path.resolve(p, fname);
      console.log(fpath);
      await writeFile(fpath, data);
    }
  }
}
