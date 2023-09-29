const fs = require('node:fs/promises');
//const fs = require('fs');

// const write = async () => {
//   console.time('check');
//   const fileHandle = await fs.open('test.txt', 'w');
//   for (let i = 0; i < 1000000; i++) {
//     await fileHandle.write(` ${i} `);
//   }
//   console.timeEnd('check');
// };

// write();

// callback version
// const write = async () => {
//   console.time('check');
//   fs.open('test.txt', 'w', (err, fd) => {
//     for (let i = 0; i < 1000000; i++) {
//       fs.writeSync(fd, ` ${i} `);
//     }
//   });
//   console.timeEnd('check');
// };

// write();

// naive stream
// not a good practise - more memory usage
// const write = async () => {
//   console.time('check');
//   const fileHandle = await fs.open('test.txt', 'w');
//   const stream = fileHandle.createWriteStream();

//   for (let i = 0; i < 1000000; i++) {
//     const buff = Buffer.from(` ${i} `, 'utf-8');
//     stream.write(buff);
//   }
//   console.timeEnd('check');
// };

// write();
