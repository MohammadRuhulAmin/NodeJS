const fs = require('fs')

fs.readFile('./docs/docs_2.txt',(error,chunk)=>{
    if(error)console.log(error)
    console.log(chunk.toString())
})

const string = "My String is good"
fs.writeFile('./docs/docs_1.txt',string,(error)=>{
    if(error)console.log('Error Found')
    else{
        console.log('Written file !')
    }
})


if(fs.existsSync('./assets')){
    fs.rmdir('./assets',()=>{
        console.log('Folder deleated successfully')
    })
}
else{
    fs.mkdir('./assets',()=>{
        console.log('Asset folder added successfully')
    })
}

const readStream = fs.createReadStream('./docs/docs_2.txt','utf-8')
const writeStream = fs.createWriteStream('./docs/docx.txt')

readStream.on('data',(chunk)=>{
    console.log('dd')
    console.log(chunk.toString())
    writeStream.write(chunk,(err)=>{
        console.log('done')
    })
})
