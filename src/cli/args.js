const parseArgs = () => {
  const args = [...process.argv].slice(2);

  const res = args.reduce((acc, el) => {
    const lastElem = acc.at(-1);

    if (lastElem && lastElem.length === 1) {
      lastElem.push(el);
    } else {
      acc.push([el.slice(2)]);
    }

    return acc;
  }, [])
    .map((el) => el.join(' is '))
    .join(', ');

  console.log(res);
};

parseArgs();
