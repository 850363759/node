const queryString = require('query-string');

let url = '?start=10&count=20';

let obj = queryString.parse(url);

console.log(obj);//{ count: '20', start: '10' }
