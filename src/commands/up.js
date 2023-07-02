import { chdir } from 'process';

const up = () => {
  chdir('../');
};

export { up };
