const express = require('express');
const path = require('path');
const static = require('express-static');

let server = express();

//server.use(express.static(path.join(__dirname,'static')));

server.use(static(path.join(__dirname,'static'));

server.listen(8080);
