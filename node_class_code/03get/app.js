//引入http
const http = require('http');//系统模块
//引入fs模块
const fs = require('fs');
//创建服务器
let server = http.createServer((req,res)=>{
    console.log(req.url);///index.html?start=10&count=20
    

})

//设定该服务器监听的端口号
server.listen(8080);
