const parseEnv = () => {
  const prefix = 'RSS_';

  const values = Object.entries(process.env)
    .map(([key, value]) => {
      if (key.includes(prefix)) {
        return `${key}=${value}`;
      }
    })
    .filter((value) => value)

  console.log(values.join('; '));
};

parseEnv();
