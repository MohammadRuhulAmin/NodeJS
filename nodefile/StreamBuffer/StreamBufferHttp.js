const http = require('http');

const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.write('<html><head><title></title></head>')
        res.write('<body><form method="post" action="/process"><input name="message"></form></body>')
        res.end();
    }else if(req.url === '/process' && req.method === "POST"){
        // console.log(req.data); it is not possible !
        const data = [];
        req.on('data',(chunk)=>{
            //console.log(chunk.toString())
            data.push(chunk)
        })
        req.on('end',()=>{
            console.log('Streamming Finished!')
            const parsedData = Buffer.concat(data).toString();
            console.log(parsedData);
        })
        res.write('Thank You!');
        res.end();
    }
});

server.listen(3000);
console.log('Server is listening at port'+ 3000); 