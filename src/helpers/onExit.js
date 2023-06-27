import { insertEOL } from './insertEOL.js';
import { print } from './print.js';
import { exit } from 'process';

const onExit = (message) => {
  process.on('SIGINT', () => {
    insertEOL(2);
    print(message);
    exit();
  });
};

export { onExit };
