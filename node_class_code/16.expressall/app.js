const express = require('express');
const consolidate = require('consolidate');


let server = express();

//输出什么
server.set('view engine','html');
//模板引擎目录
server.set('views','./views');
//使用哪种模板引擎解析
server.engine('html',consolidate.ejs);

server.use('/',(req,res)=>{
    let data = [
        {name:'xiaoliu'},
        {name:'laowang'},
        {name:'zhangsan'}
    ];
    res.render('index.ejs',{name:'yuonly',data:data});
})

server.listen(8080);
