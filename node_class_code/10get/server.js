const express = require('express');

let server = express();

server.listen(8080);

//get请求

// server.get('/gettest',(req,res)=>{
//     console.log('get');
// })

// server.post('/posttest',(req,res)=>{
//     console.log('post');
// })
server.use('/posttest',(req,res)=>{
    console.log('request');
})
