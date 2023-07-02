import { rename } from 'fs/promises';
import { resolve } from 'path';

const rn = async (paths) => {
  const [originName, newName] = paths;
  await rename(resolve(originName), resolve(newName));
};

export { rn };
