const http = require('http');

const fs = require('fs');

const urlLib = require('url');

const querystring = require('querystring');

http.createServer((req,res)=>{
    //1. 获取get参数
    let obj = urlLib.parse(req.url,true);
    let url = obj.pathname;
    let GET = obj.query;
    //2. 获取post参数
    let str = '';
    let POST = null;
    req.on('data',(data)=>{
        str += data;
    })
    req.on('end',()=>{
        POST = querystring.parse(str);
    })
    //3. 请求资源文件  /www/a.html
    let filename = './www'+url;
    fs.readFile(filename,(err,data)=>{
        if(err){
            res.write('404');
        }else{
            res.write(data);
        }
        res.end();
    })
}).listen(8080);
