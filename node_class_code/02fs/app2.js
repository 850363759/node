//引入http
const http = require('http');//系统模块
//引入fs模块
const fs = require('fs');

//创建服务器
let server = http.createServer((req,res)=>{
    let filename = './www'+req.url;
    fs.readFile(filename,(err,data)=>{
        if(err){
            res.write('服务器错误');
            res.end();
        }else{
            res.write(data);
            res.end();
        }
    })
})

//设定该服务器监听的端口号
server.listen(8080);
