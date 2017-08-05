const express = require('express');
//要想收到post数据，可以使用body-parser来处理
const bodyParser = require('body-parser');

let server = express();
//使用bodyparser中间件，就会在req中新增一个属性 body body中装着post过来的数据
server.use(bodyParser.urlencoded({
    extended:false,
    // limit:大小
}));

server.use('/',(req,res)=>{
    console.log(req.body);
})

server.listen(8080);

//接收get参数： 不需要下载任何模块，直接在 req.query
//接收post参数： 需要使用 body-parser use(bodyParser.urlencoded({extended:false}))
//就会在 req.body
