//引入http
const http = require('http');//系统模块

//创建服务器
let server = http.createServer((req,res)=>{
    res.write('hello world');
    res.end();
    //请求过来的路径信息
    console.log(req.url);
    console.log('有人来了');
})

//设定该服务器监听的端口号
server.listen(8080);
