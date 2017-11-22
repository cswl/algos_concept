import path from "path";
import fs from "fs";
import util from "util";

import { CH_ROOT_BASIC, CH_ROOT_ADVJS, CH_AL_JSONS } from "./constants.mjs";

const writeFile = util.promisify(fs.writeFile);

const getJSONChallenges = async (root, file) => {
  const { default: { challenges } } = await import(path.resolve(...root, file));
  return challenges;
};

export const getAlgoFromJSON = async fccDir => {
  return {
    basic: await getJSONChallenges([fccDir, CH_ROOT_BASIC], CH_AL_JSONS.basic),
    inter: await getJSONChallenges([fccDir, CH_ROOT_BASIC], CH_AL_JSONS.inter),
    advnc: await getJSONChallenges([fccDir, CH_ROOT_ADVJS], CH_AL_JSONS.advnc)
  };
};

export const normalizeChFilename = title => title.replace(/ /g, "_");

export const setupAlgoFiles = (cpath, titles) => {
  return titles.map((ch, idx) => {
    console.log(ch.title);
    return writeFile(
      path.resolve(cpath, normalizeChFilename(`${idx + 1}_${ch.title}`)),
      ""
    );
  });
};
