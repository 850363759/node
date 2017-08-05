//cookie 是保存在浏览器端的一段信息，每次浏览器请求服务器时都会讲这段信息携带
// cookie 1 只能存储简单的数据类型，并且大小有限制 2 cookie不安全


//session  session他是保存在服务器端的。理论上存储空间是无限。但是session是依赖于cookie的。

const express = require('express');
const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');

let server = express();

server.use(cookieParser());
let arr = [];
for(let i=0;i<10000;i++){
    arr.push('key_'+Math.random());
}
server.use(cookieSession({
    keys:arr,
    name:'sessionid',
    maxAge:3600*1000*24*7
}))

server.use('/',(req,res)=>{
    // req.session['user'] = {
    //     username:'yuonly',
    //     age:18
    // }

    if(req.session['count']==null){
        req.session['count'] = 1;
    }else{
        req.session['count']++;
    }
    console.log(req.session['count']);


    res.end();
})

server.listen(8080);
