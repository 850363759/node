const ejs = require('ejs');

ejs.renderFile('./views/index.ejs',{name:'yuonly'},(err,data)=>{
    console.log(data,'null');
})
