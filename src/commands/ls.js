import { readdir } from 'fs/promises';
import { getPath } from '../helpers/getPath.js';

const ls = async () => {
  const path = getPath();

  const files = await readdir(path, { withFileTypes: true });
  const table = files.map((file) => {
    const type = file.isFile() ? 'file' : 'directory';
    const row = { Name: file.name, Type: type };
    return row;
  });
  table.sort(({ Name: nameA }, { Name: nameB }) => (
    nameA.localeCompare(nameB)
  ));
  table.sort(({ Type: typeA }, { Type: typeB }) => (
    typeA.localeCompare(typeB)
  ));

  console.table(table);
};

export { ls };
