import { cp, mkdir, readdir } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const copy = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);

  const message = 'FS operation failed';

  const folder = resolve(__dirname, 'files');
  const folderCopy = resolve(__dirname, 'files_copy');

  try {
    const files = await readdir(folder);
    await mkdir(folderCopy);

    await new Promise((res) => res(files.map(async (file) => {
      const fileOrigin = resolve(folder, file);
      const fileCopy = resolve(folderCopy, file);

      return cp(fileOrigin, fileCopy);
    })));
  } catch {
    console.error(message);
  }
};

await copy();
