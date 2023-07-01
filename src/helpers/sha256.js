import { createHash } from 'node:crypto'

function sha256(content) {
  return createHash('sha256').update(content).digest('hex');
};

export { sha256 };
