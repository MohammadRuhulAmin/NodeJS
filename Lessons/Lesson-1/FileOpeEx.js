const fs = require('fs')

// read File 

fs.readFile('./docs/docs_2.txt',(error,data)=>{
    if(error)console.log(error)
    else console.log(data.toString())
})

// Write File 
const inputData = "This is one of the most important informations In the world"
fs.writeFile('./docs/docs_1.txt',inputData,(error)=>{
    if(error)console.log(error);
    else {
        fs.readFile('./docs/docs_1.txt',(error,data)=>{
            if(error)console.log(error)
            else console.log("Ans : "+data.toString())
        })
    }
})

// remove folder 

if(fs.existsSync('./assets')){
    fs.rmdir('./assets',()=>{
        console.log('Removed')
    });
}

// remove file

if(fs.existsSync('./docs/docs_1.txt')){
    fs.unlink('./docs/docs_1.txt',(error)=>{
        if(error)console.log(error)
        console.log(error)
    })
}


