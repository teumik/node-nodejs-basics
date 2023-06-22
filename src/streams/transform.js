import { EOL } from 'node:os';
import { stdin, stdout } from 'node:process';
import { Transform } from 'node:stream';

const transform = async () => {
  const reverse = new Transform({
    transform(chunk, _, callback) {
      const data = chunk.toString()
        .trim()
        .split('')
        .reverse()
        .join('')
        .concat('', EOL);

      this.push(data);
      callback();
    }
  });

  stdout.write(`Press enter to transform text:${EOL}`);
  stdin.pipe(reverse).pipe(stdout);
};

await transform();
