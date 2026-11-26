// The World in One Day — entry for news-image-20261126.
// A one-line program: it copies the newspaper image bundled with this
// repository to the output directory. No network, no randomness, no
// clock reads — the same input bytes always produce the same output.

import { copyFileSync, mkdirSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const source = join(here, "entry.png");

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const target = join(outDir, "entry.png");

mkdirSync(outDir, { recursive: true });
copyFileSync(source, target);

// The copy must be exact: same size means the same bytes went out.
if (statSync(source).size !== statSync(target).size) {
  throw new Error("entry.png copy is not byte-identical");
}
