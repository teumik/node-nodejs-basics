import os from 'os';

const capitalize = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

const parseUsername = () => {
  const [arg] = process.argv.slice(2);
  const [, username] = arg.split('=');
  const parsedUsername = username.split('_').reduce((acc, word, i, arr) => {
    acc += capitalize(word);
    if (i !== arr.length - 1) acc += ' ';
    return acc;
  }, '');

  return parsedUsername;
}

const start = () => {
  const parsedUsername = parseUsername();
  const welcomeMessage = `Welcome to the File Manager, ${parsedUsername}!`;
  const goodbyeMessage = `Thank you for using File Manager, ${parsedUsername}, goodbye!`;
  const getDirectoryPath = (path) => `You are currently in ${path}`;
  const homeDir = os.homedir();

  console.log(homeDir);
};

start();
