import { stat } from 'fs/promises';

const isExist = async (path) => {
  try {
    await stat(path);
    return true;
  } catch (error) {
    return false;
  }
};

export { isExist };
