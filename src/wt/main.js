import { cpus } from 'node:os';
import { Worker } from 'node:worker_threads';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const performCalculations = async () => {
  const folder = resolve(__dirname, '');
  const file = resolve(folder, 'worker.js');

  const cores = cpus();
  const promises = cores.map((_, i) => {
    return new Promise((res, rej) => {
      const worker = new Worker(file, {
        workerData: i + 10,
      });

      worker.on('message', (message) => {
        res(message);
      });
      worker.on('error', (error) => rej(error))
      worker.on('exit', (code) => {
        if (code === 0) return;
        rej(`Error: exit code ${code}`);
      });
    })
  });

  const workers = await Promise.all(promises);
  console.log(workers);
};

await performCalculations();
