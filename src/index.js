import { stdin } from 'process';
import { parseUsername } from './helpers/parseUsername.js';
import { print } from './helpers/print.js';
import { up } from './commands/up.js';
import { onExit } from './helpers/onExit.js';
import { ls } from './commands/ls.js';
import { cd } from './commands/cd.js';
import { sp } from './commands/sp.js';
import { cat } from './commands/cat.js';
import { add } from './commands/add.js';
import { rn } from './commands/rn.js';
import { parsePaths } from './helpers/parsePaths.js';
import { cp } from './commands/cp.js';
import { mv } from './commands/mv.js';
import { rm } from './commands/rm.js';
import { os } from './commands/os.js';

const start = () => {
  const parsedUsername = parseUsername();
  const welcomeMessage = `Welcome to the File Manager, ${parsedUsername}!`;
  const goodbyeMessage = `Thank you for using File Manager, ${parsedUsername}, goodbye!`;
  const getDirectoryPath = (path) => `You are currently in ${path}`;

  print(welcomeMessage);
  onExit(goodbyeMessage);

  stdin.on('data', (data) => {
    const [command, ...args] = data.toString().trim().split(' ');

    switch (command) {
      case 'sp': {
        sp();
        break;
      };

      case 'up': {
        up();
        break;
      };

      case 'cd': {
        cd(args.join(' '));
        break;
      };

      case 'ls': {
        ls();
        break;
      };

      case 'cat': {
        cat(args.join(' '));
        break;
      };

      case 'add': {
        add(args.join(' '));
        break;
      };

      case 'rn': {
        rn(parsePaths(args.join(' ')));
        break;
      };

      case 'cp': {
        cp(parsePaths(args.join(' ')));
        break;
      };

      case 'mv': {
        mv(parsePaths(args.join(' ')));
        break;
      };

      case 'rm': {
        rm(args.join(' '));
        break;
      };

      case 'os': {
        os(args);
        break;
      };

      default: {
        print('Invalid input');
        break;
      };
    }
  });
};

start();
