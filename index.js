
const Koa = require('koa');
const path = require('path');
const staticFun = require('./app/static-server/index.js')//静态服务器中间件
const apiServer = require('./app/api-server/index.js')//Api服务器中间件

const app = new Koa();


//中间件
app.use(apiServer());
app.use(staticFun());



app.listen(3000);
console.log('app started at port 3030...');