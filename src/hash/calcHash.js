import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import { readFile } from 'node:fs/promises';
import { createHash } from 'node:crypto';

const calculateHash = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);

  const folder = resolve(__dirname, 'files');
  const file = resolve(folder, 'fileToCalculateHashFor.txt');

  const content = await readFile(file, { encoding: 'utf8' });

  const res = createHash('sha256').update(content).digest('hex');
  console.log(res);
};

await calculateHash();
