import { readFile, writeFile } from 'fs/promises';
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';

const create = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);

  const content = 'I am fresh and young';
  const message = 'FS operation failed';
  const file = 'fresh.txt';

  const path = resolve(__dirname, 'files', file);

  try {
    await readFile(path);
    console.error(message);
  } catch {
    try {
      await writeFile(path, content);
    } catch (error) {
      console.error(error);
    }
  }
};

await create();
