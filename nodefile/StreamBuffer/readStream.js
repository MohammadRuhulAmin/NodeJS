
const fs = require('fs');

const readStream = fs.createReadStream(`${__dirname}/bigData.txt`);

readStream.on('data',(chunk)=>{ //  listener !! 
    console.log(chunk.toString());
});

console.log('HI!');