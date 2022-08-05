const fs = require('fs')
const data = fs.readFileSync('myFile.txt').toString();
console.log(data);
console.log('read File Sync');

fs.readFile('myFile.txt',(error,data)=>{
    console.log("From Async: "+data.toString())
});

console.log('Node js is an Event Driven Runtime');
