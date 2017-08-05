const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const fs = require('fs');
//文件上传
const multer = require('multer');


let server = express();
//
var obj = multer({dest:'upload'});
//2 设定上传方法
server.use(obj.any());

server.use(bodyParser.urlencoded({extended:false}));

server.post('/',(req,res)=>{
    // console.log(req.body,'post');
    // { avatar: 'static.png' } 'post'
    // console.log(req.files);

    // [ { fieldname: 'avatar',
    // originalname: 'static.png',
    // encoding: '7bit',
    // mimetype: 'image/png',
    // destination: 'upload',
    // filename: '3792b6ec1667a327ea4065811f2e6eba',
    // path: 'upload/3792b6ec1667a327ea4065811f2e6eba',
    // size: 338040 } ]
    let ext = req.files[0].mimetype.split('/')[1];
    let newName = req.files[0].path + '.' + ext;
    fs.rename(req.files[0].path,newName,(err)=>{
        if(err){
            console.log('上传失败');
        }else{
            console.log('上传成功');
        }
    })
})

server.listen(8080);
