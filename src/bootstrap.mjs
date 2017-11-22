import util from "util";
import fs from "fs";
import path from "path";

import { getAlgoFromJSON } from "./helper.mjs";
import { setupAlgoFiles } from "./helper.mjs";
import { ERROR_CODES } from "./libs/error_codes.mjs";

const mkdir = util.promisify(fs.mkdir);

export async function bootStrapfiles(cwd, fccDir) {
  const chllg_paths = {
    root: path.resolve(cwd, "challenges")
  };
  chllg_paths.basic = path.resolve(chllg_paths.root, "basic");
  chllg_paths.inter = path.resolve(chllg_paths.root, "inter");
  chllg_paths.advnc = path.resolve(chllg_paths.root, "advnc");

  try {
    await mkdir(chllg_paths.root);
  } catch (err) {
    if (err.code === ERROR_CODES.EEXIST.code) {
      console.log("WARNING: Not Overriding contents");
      return;
    } else {
      console.log(err);
      return;
    }
  }
  await Promise.all([
    await mkdir(chllg_paths.basic),
    await mkdir(chllg_paths.inter),
    await mkdir(chllg_paths.advnc)
  ]);

  const chllgs = await getAlgoFromJSON(fccDir);

  // Skip Get ready for challenges
  await Promise.all([
    setupAlgoFiles(
      chllg_paths.basic,
      chllgs.basic.filter(({ id }) => id !== "bd7158d2c442eddfbeb5bd1f")
    ),
    ...setupAlgoFiles(chllg_paths.inter, chllgs.inter),
    ...setupAlgoFiles(chllg_paths.advnc, chllgs.advnc)
  ]);
}
