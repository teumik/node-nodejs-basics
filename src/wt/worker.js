import { parentPort, workerData } from 'node:worker_threads';

// n should be received from main thread
const nthFibonacci = (n) => n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

const sendResult = () => {
  // This function sends result of nthFibonacci computations to main thread
  const data = workerData;

  const error = {
    status: 'error',
    data: null,
  };

  const sendMessage = (result) => parentPort.postMessage(result);

  try {
    const success = {
      status: 'resolved',
      data: nthFibonacci(data),
      id: data,
    };

    if (Math.random() > 0.5) throw new Error();

    sendMessage(success);
  } catch {
    sendMessage(error);
  }
};

sendResult();
