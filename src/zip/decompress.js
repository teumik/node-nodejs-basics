import { createReadStream, createWriteStream, existsSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { exit } from 'node:process';
import { fileURLToPath } from 'node:url';
import { createGzip, createUnzip, unzip } from 'node:zlib';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const decompress = async () => {
  const folder = resolve(__dirname, 'files');
  const archive = resolve(folder, 'archive.gz');
  const file = resolve(folder, 'fileToCompress.txt');
  const message = 'File does not exist';

  if (!existsSync(archive)) {
    console.error(notExistMessage);
    exit();
  };

  const gzip = createUnzip();

  const reader = createReadStream(archive);
  const writer = createWriteStream(file);

  reader.pipe(gzip).pipe(writer);
};

await decompress();
