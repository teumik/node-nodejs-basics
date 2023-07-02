import { EOL, arch, cpus, userInfo } from 'os';
import { print } from '../helpers/print.js';
import { insertEOL } from '../helpers/insertEOL.js';

const os = ([arg]) => {
  switch (arg) {
    case '--EOL': {
      insertEOL();
      print(`EOL: ${JSON.stringify(EOL)}`);
      break;
    };

    case '--cpus': {
      insertEOL();
      const cpu = cpus();
      const count = cpu.length;
      const models = cpu.map(({ model }) => model);
      const model = [...new Set([...models])].join('');
      const speeds = cpu.map(({ speed }) => (speed / 1000).toFixed(2));
      const speed = [...new Set([...speeds])].sort().join(' - ').concat(' GHz');

      const table = {
        Count: count,
        Model: model,
        Speed: speed,
      };

      console.table(table);
      insertEOL();
      break;
    };

    case '--homedir': {
      insertEOL();
      const { homedir } = userInfo();
      print(`Homedir: ${homedir}`);
      insertEOL();
      break;
    };

    case '--username': {
      insertEOL();
      const { username } = userInfo();
      print(`Username: ${username}`);
      break;
    };

    case '--architecture': {
      insertEOL();
      print(`Architecture: ${arch()}`);
      break;
    };

    default: {
      print('Invalid input');
      break;
    };
  }
};

export { os };
