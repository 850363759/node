//引入http
const http = require('http');//系统模块
//引入fs模块
const fs = require('fs');
//引入url
const urlLib = require('url');
//创建服务器
let server = http.createServer((req,res)=>{
    //要获得请求的url路径及 query参数
    let obj = urlLib.parse(req.url,true);
    let url = obj.pathname;
    let query = obj.query;
    //http://localhost:8080/index.html?count=10&start=5&index=3
    console.log(url,query);///index.html { count: '10', start: '5', index: '3' }
})

//设定该服务器监听的端口号
server.listen(8080);
