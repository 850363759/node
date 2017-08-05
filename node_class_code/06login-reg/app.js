const http = require('http');

const fs = require('fs');

const urlLib = require('url');

const querystring = require('querystring');
let users = {};
// {
//     yuonly:'123123',
//     xiaoliu:'2222'
// }

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

        if(url=='/user'){
            switch(POST.act){
                case 'reg'://注册操作
                    users[POST.username] = POST.pwd
                    // users['yuonly'] = '123123';
                    res.write('{"status":true,"msg":"注册成功"}');
                    res.end();
                    break;
                case 'login'://登录操作
                    if(!users[POST.username]){
                        res.write('{"status":false,"msg":"用户名不存在"}');
                    }else{
                        if(users[POST.username]==POST.pwd){
                            res.write('{"status":true,"msg":"登录成功"}');
                        }else{
                            res.write('{"status":false,"msg":"密码错误"}');
                        }
                    }
                    res.end();
                    // users['yuonly']
                    break;
            }
        }else{
            //3. 请求资源文件  /www/a.html
            let filename = './www'+url;
            fs.readFile(filename,(err,data)=>{
                if(err){
                    res.write('404');
                }else{
                    res.write(data);
                }
                res.end();
            });
        }
    })



}).listen(8080);
