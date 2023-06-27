import { EOL } from 'os';
import { stdout } from 'process';

const insertEOL = (n = 1) => {
  for (let i = 0; i < n; i++) {
    stdout.write(EOL);
  }
};

export { insertEOL };
