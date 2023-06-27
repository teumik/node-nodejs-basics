import { capitalize } from './capitalize.js';
import { argv } from 'process';

const parseUsername = () => {
  const [arg] = argv.slice(2);
  const [, username] = arg.split('=');
  const parsedUsername = username.split('_').reduce((acc, word, i, arr) => {
    acc += capitalize(word);
    if (i !== arr.length - 1) acc += ' ';
    return acc;
  }, '');

  return parsedUsername;
};

export { parseUsername };
