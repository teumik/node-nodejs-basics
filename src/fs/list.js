import { readdir } from 'node:fs/promises';
import { dirname, parse, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const list = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);

  const message = 'FS operation failed';

  try {
    const folder = resolve(__dirname, 'files');
    const files = await readdir(folder);

    files.forEach((file) => console.log(parse(file).name));
  } catch {
    console.error(message);
  }
};

await list();
