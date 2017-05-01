/*
*Koa2重构pure-node-note author:Sheldon-Yee  
*/
const Koa = require('koa');
const path = require('path');
const cookieParser = require('./app/cookie-parser')
const staticFun = require('./app/static-server')//静态服务器中间件
const apiServer = require('./app/api-server')//API服务器中间件
const urlParser = require('./app/url-parser')//处理POST请求
const viewServer = require('./app/view-server')//处理ejs，html渲染
const app = new Koa();

//urlParser ==> apiServer ==> viewServer ==> staticFun
//中间件
app.use(cookieParser());
app.use(urlParser());
app.use(apiServer());
app.use(viewServer());
app.use(staticFun());
//


app.listen(3000);
console.log('app started at port 3000...');