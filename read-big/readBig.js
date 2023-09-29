const fs = require('node:fs/promises');

const read = async () => {
  const fileHandleRead = await fs.open('test.txt', 'r');
  const stream = fileHandleRead.createReadStream();
  stream.on('data', (chunk) => {
    console.log('-----');
    console.log(chunk.length);
  });
};
read();
