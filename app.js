const express = require('express')
const app = express()

// listen for request 

const port = 3000
app.listen(port,()=>{
    console.log("Listening port on 3000")
})

app.get('/',(req,res)=>{
    //res.send('<p>Home page</p>');
    res.sendFile('./views/index.html',{root:__dirname})
})
app.get('/about',(req,res)=>{
    //res.send('<p>About Page</p>')
    res.sendFile('./views/about.html',{root:__dirname})
})

app.get('/about-me',(req,res)=>{
    res.redirect('/about')
})

// 404 request 
app.use((req,res)=>{
    res.status(404).sendFile('./views/404.html',{root:__dirname})
})
