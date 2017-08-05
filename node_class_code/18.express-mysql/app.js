const express = require('express');
const consolidate = require('consolidate');

let server = express();

server.set('view engine','html');

server.set('views','./views');

server.engine('html',consolidate.ejs);

//配置数据库链接
const mysql = require('mysql');
//1.链接数据库
// mysql.createConnection(哪台服务器,用户名，密码,库名);
var db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'jy1608_blog',
    port:8889
});

server.get('/',(req,res)=>{
    //2.查询
    db.query("SELECT * FROM `blog_user`;",function(err,data){
       if(err){
           console.log(err);
       }else{
        //    data[0]
        //    {
        //         uid: 7,
        //         username: 'yuonly',
        //         password: '4297f44b13955235245b2497399d7a93',
        //         avatar: ''
        //     }
           res.render('index.ejs',data[0]);
           res.end();
        //    res.render('index.ejs',data);
       }
    })

})

server.listen(8080);
