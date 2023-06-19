import { readFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const read = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);

  const message = 'FS operation failed';

  try {
    const folder = resolve(__dirname, 'files');
    const file = resolve(folder, 'fileToRead.txt');

    const content = await readFile(file, { encoding: 'utf8' });
    console.log(content);
  } catch {
    console.error(message);
  }
};

await read();
