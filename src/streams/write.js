import { createWriteStream } from 'node:fs';
import { EOL } from 'node:os';
import { dirname, resolve } from 'node:path';
import { stdin, stdout } from 'node:process';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const write = async () => {
  const folder = resolve(__dirname, 'files');
  const file = resolve(folder, 'fileToWrite.txt');

  const writer = createWriteStream(file);

  stdout.write(`Press enter to save text:${EOL}`);

  stdin.pipe(writer);
  stdin.resume();
};

await write();
