import { insertEOL } from './insertEOL.js';
import { stdout } from 'process';

const print = (message) => {
  stdout.write(message);
  insertEOL(2);
};

export { print };
