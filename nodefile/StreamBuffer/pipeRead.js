const fs = require('fs');
const http = require('http');
const server = http.createServer((req,res)=>{
    const readStream = fs.createReadStream(`${__dirname}/bigData.txt`,'utf-8')
    readStream.pipe(res)
});

server.listen(3000);
console.log('Listening Port On 3000')