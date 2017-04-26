// 导入koa，和koa 1.x不同，在koa2中，我们导入的是一个class，因此用大写的Koa表示:
const Koa = require('koa');
const path = require('path');
const staticFun = require('./app/static-server/index.js')//静态服务器中间件
const apiServer = require('./app/api-server/index.js')//Api服务器中间件
// 创建一个Koa对象表示web app本身:
const app = new Koa();

app.use(apiServer());
app.use(staticFun());

app.listen(3000);
console.log('app started at port 3030...');