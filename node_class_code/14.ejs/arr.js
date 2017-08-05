const ejs = require('ejs');

ejs.renderFile('./views/arr.ejs',{data:[{name:'yuonly'},{name:'xiaoming'}]},(err,data)=>{
    console.log(data);
})
