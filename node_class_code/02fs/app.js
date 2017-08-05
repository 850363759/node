//引入http
const http = require('http');//系统模块
//引入fs模块
const fs = require('fs');

//创建服务器
let server = http.createServer((req,res)=>{


    fs.readFile('a.txt',function(err,data){
        //console.log(err,data);//null
        //<Buffer e6 88 91 e6 98 af 61 2e 74 78 74 0a 73 64 6a 6b 62 6a 61 73 64 6b 6c 64 66 6a 6b 6c 61 73 6a 0a 31 32 33 31 32 33 31 32 33 0a>  二进制数据

        console.log(data.toString()); //我是a.txtdjkbjasdkldfjklasj123123123

        res.write(data.toString());
        res.end();

    })

})

//设定该服务器监听的端口号
server.listen(8080);
