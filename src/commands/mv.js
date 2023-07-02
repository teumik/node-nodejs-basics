import { cp } from './cp.js';
import { rm } from './rm.js';

const mv = async (paths) => {
  const [originPath] = paths;

  const pipe = await cp(paths);
  pipe.on('finish', () => {
    rm(originPath);
  })
};

export { mv };
