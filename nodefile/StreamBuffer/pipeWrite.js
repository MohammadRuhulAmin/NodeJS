const fs = require('fs')

const readStream = fs.createReadStream(`${__dirname}/bigData.txt`);
const writeStream = fs.createWriteStream(`${__dirname}/output_2.txt`);

readStream.pipe(writeStream);