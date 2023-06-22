import { rm } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const remove = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);

  const message = 'FS operation failed';

  const folder = resolve(__dirname, 'files');
  const file = resolve(folder, 'fileToRemove.txt');

  try {
    await rm(file);
  } catch {
    console.error(message);
  }
};

await remove();
