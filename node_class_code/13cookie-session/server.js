//cookie 是保存在浏览器端的一段信息，每次浏览器请求服务器时都会讲这段信息携带
// cookie 1 只能存储简单的数据类型，并且大小有限制 2 cookie不安全


//session  session他是保存在服务器端的。理论上存储空间是无限。但是session是依赖于cookie的。

const express = require('express');
const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');

let server = express();

server.use(cookieParser());

server.use('/',(req,res)=>{
    //读取cookie 装完cookie-parser后有这个属性
    console.log(req.cookies['user'],'read');
    //发送cookie
    res.cookie('user','yuonly',{maxAge:1000*60*60*24*7});
    res.send('ok');
})

server.listen(8080);
