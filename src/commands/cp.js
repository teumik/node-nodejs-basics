import { createReadStream, createWriteStream } from 'fs';
import { basename, resolve } from 'path';
import { isExist } from '../helpers/isExist.js';
import { mkdir } from 'fs/promises';

const cp = async (paths) => {
  const [originPath, destPath] = paths;

  const filename = basename(originPath);
  const isDirExist = await isExist(destPath);

  if (!isDirExist) {
    await mkdir(destPath, { recursive: true });
  }

  const readable = createReadStream(originPath);
  const writable = createWriteStream(resolve(destPath, filename));

  return readable.pipe(writable);
};

export { cp };
