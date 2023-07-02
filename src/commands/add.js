import { createWriteStream } from 'fs';
import { insertEOL } from '../helpers/insertEOL.js';

const add = (path) => {
  const file = createWriteStream(path);
  file.end();
  insertEOL();
};

export { add };
