import { getPath } from '../helpers/getPath.js';
import { print } from '../helpers/print.js';

const sp = () => {
  print(`Current path: ${getPath()}`);
};

export { sp };
