
const fs = require('fs');

// read files 
fs.readFile('./docs/docs_1.txt',(error,data)=>{
    if(error)console.log(error);
    console.log(data.toString())
})

/**
 * fs.readFile('./filePath',(error,data)=>{
 *      if(error)console.log('')console.log(error)
 * })
 * 
 * 
 */

// writing files 
fs.writeFile('./docs/docs_1.txt','Hello World',()=>{
    console.log('File Was Written')
});
stringInfo = "This is a string information";
fs.writeFile('./docs/docs_2.txt',stringInfo,()=>{
    console.log('File Was Written')
});


// directories 
if(!fs.existsSync('./assets')){
    fs.mkdir('./assets',(error)=>{
        if(error)console.log(error)
        console.log("Folder created !")
    })
}else {
    fs.rmdir('./assets',(error)=>{
        console.log(error);
    });
    console.log('Folder Deleated !');
}


if(fs.existsSync('./docs/docs_1.txt')){
    fs.unlink('./docs/docs_1.txt',()=>{
        console.log('Document is Deleted Successfully!')
    })
}
