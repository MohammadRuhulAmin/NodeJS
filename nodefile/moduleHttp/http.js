const http = require('http');

const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.write('Hello Programmers!')
        res.write('How are you?!')
        res.end()
    }else if(req.url === '/about'){
        res.write('This is Ruhul Amin')
        res.write('BOF...!')
        res.end()
    }else{
        res.write('Sorry No Page Found!')
        res.end()
    }
    
});
/**
 * 
 * This server itself an event emitter ... !!!
 */

const port = 3000;

server.on('connection',()=>{
    console.log('New Connection has been established .... ');
})
server.listen(port);
console.log(`Listening on Port ${port}`);
