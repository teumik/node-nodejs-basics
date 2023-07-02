import { rm as rmp } from 'fs/promises';

const rm = async (path) => {
  await rmp(path);
};

export { rm };
