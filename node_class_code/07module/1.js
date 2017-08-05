
let M  = require('mod1.js');

let mysql = require('mysql');

// require()
// ### 1 如果你不填路径，他会去node_modules找，有就加载，没有就报错
// ### 2 如果有路径，他认为这是文件模块，去指定的路径去加载模块，没有的话报错

console.log(mysql);
