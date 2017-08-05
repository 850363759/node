const express = require('express');

let server = express();

server.listen(8080);

server.get('/',(req,res)=>{
    //get参数已经被封装到 req的query属性中了，并且是对象的形式
    console.log(req.query);
})
