import { readFile, rename as renameFs } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const rename = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);

  const message = 'FS operation failed';

  const folder = resolve(__dirname, 'files')
  const filenameWrong = resolve(folder, 'wrongFilename.txt');
  const filenameProper = resolve(folder, 'properFilename.md');

  try {
    await readFile(filenameProper);
    console.error(message);
  } catch {
    try {
      await renameFs(filenameWrong, filenameProper)
    } catch {
      console.error(message);
    }
  }
};

await rename();
