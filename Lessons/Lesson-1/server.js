const http = require('http')
const fs = require('fs')
const server = http.createServer((req,res)=>{
    let path = '../../views/'
    switch(req.url){
        case '/':
            path += 'index.html'
            res.statusCode = 200
            break 
        case '/about':
            path += 'about.html'
            res.statusCode = 200
            break 
        case '/about-me':
            res.setHeader('Location','/about')
            res.statusCode = 301 
            break 
        default:
            path +='404.html'
            break 
    }

    fs.readFile(path,(err,data)=>{
        if(err){
            console.log(err)
            res.end()
        }else{
            res.write(data)
            res.end()
        }
    })


    // fs.readFile('../../views/index.html',(err,data)=>{
    //     if(err){
    //         console.log(err)
    //         res.end()
    //     }else{
    //         //res.write(data)
    //         res.end(data)
    //     }
    // })
})

const port = 3000
server.listen(port,'localhost',()=>{
    console.log(`Server is Listening at Port ${port}`)
})
