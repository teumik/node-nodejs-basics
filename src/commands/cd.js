import { chdir } from 'process';

const cd = (path) => {
  chdir(`${path}`);
};

export { cd };
