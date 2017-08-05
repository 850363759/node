const http = require('http');

const fs = require('fs');

const querystring = require('querystring');

const urlLib = require('url');
//创建服务器

let server = http.createServer((req,res)=>{

    //解析post数据
    //创建一个post数据接收容器
    var str = '';
    //使用on 监听data 事件，data事件是每当有一段post数据到达时会触发
    var i = 0;
    req.on('data',function(data){
        console.log(`第${i}次接收数据`);
        str += data;
        i++;
    })
    //当多有的post数据都传送完毕之后会会触发
    req.on('end',function(err){
        // console.log(str,'str----');//username=yuonly&pwd=123123 str----
    })

}).listen(8080);
