import { createReadStream } from 'node:fs';
import { EOL } from 'node:os';
import { dirname, resolve } from 'node:path';
import { stdout } from 'node:process';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const read = async () => {
  const folder = resolve(__dirname, 'files');
  const file = resolve(folder, 'fileToRead.txt');

  const reader = createReadStream(file);
  reader.pipe(stdout);
  reader.on('close', () => {
    stdout.write(EOL);
  });
};

await read();
