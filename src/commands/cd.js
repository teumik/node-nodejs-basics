import { chdir } from 'process';

const cd = (path) => {
  chdir(`${path.join(' ')}`);
};

export { cd };
