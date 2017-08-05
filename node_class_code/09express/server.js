const express = require('express');//引入express模块

//创建服务器
let server = express();

server.use('/a.html',(req,res)=>{
    //说明http模块原来的属性方法，仍然可用。
    // res.write('123123');//字符串和buffer
    // res.end();

    res.send({a:1,b:2});
    res.end();
})
server.use('/b.html',(req,res)=>{
    res.send('bbbb');
    res.end();
})

//监听端口
server.listen(8080);
