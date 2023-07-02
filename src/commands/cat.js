import { createReadStream } from 'fs';
import { stdout } from 'process';
import { insertEOL } from '../helpers/insertEOL.js';

const cat = (path) => {
  const readable = createReadStream(path);
  insertEOL();
  readable.pipe(stdout);
  insertEOL();
};

export { cat };
