import { createReadStream, createWriteStream, existsSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { exit } from 'node:process';
import { fileURLToPath } from 'node:url';
import { createGzip } from 'node:zlib';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compress = async () => {
  const folder = resolve(__dirname, 'files');
  const file = resolve(folder, 'fileToCompress.txt');
  const archive = resolve(folder, 'archive.gz');
  const message = 'File does not exist';

  if (!existsSync(file)) {
    console.error(message);
    exit();
  };

  const gzip = createGzip();

  const reader = createReadStream(file);
  const writer = createWriteStream(archive);

  reader.pipe(gzip).pipe(writer);
};

await compress();
