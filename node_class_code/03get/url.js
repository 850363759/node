const urlLib = require('url');

let url = 'localhost:8080/index.html?start=10&count=20';

// let obj = urlLib.parse(url);
//
// console.log(obj);

// Url {
//   protocol: 'localhost:',
//   slashes: null,
//   auth: null,
//   host: '8080',
//   port: null,
//   hostname: '8080',
//   hash: null,
//   search: '?start=10&count=20',
//   query: 'start=10&count=20',
//   pathname: '/index.html',
//   path: '/index.html?start=10&count=20',
//   href: 'localhost:8080/index.html?start=10&count=20' }
//
let obj = urlLib.parse(url,true);

console.log(obj);

// Url {
//   protocol: 'localhost:',
//   slashes: null,
//   auth: null,
//   host: '8080',
//   port: null,
//   hostname: '8080',
//   hash: null,
//   search: '?start=10&count=20',
//   query: { start: '10', count: '20' },
//   pathname: '/index.html',
//   path: '/index.html?start=10&count=20',
//   href: 'localhost:8080/index.html?start=10&count=20' }
