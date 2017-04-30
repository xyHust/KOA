/*
*Koa2重构pure-node-note author:Sheldon-Yee  
*view-server
*/

//映射表
//ejs动态渲染数据
const ejs = require('ejs');
const fs = require('fs');
const Path = require('path');
module.exports = () =>{
    return async (ctx,next) =>{
        let {path} = ctx;
        let pathMap = {
            '/':{
                viewName:'index.html'
            },
            '/about':{
                viewName:'about.html'
            }
        }
        let viewPath = Path.resolve(process.cwd(),'public')
        if(pathMap[path]){
            let { viewName } = pathMap[path];
            let htmlPath = Path.resolve(viewPath,viewName);
            let render = ejs.compile(fs.readFileSync(htmlPath,'utf8'),{//谨记每次通过readFile输出的都为buffer，每次都忽略，谨记
                compileDebug:true
            })
            ctx.set({
                'Content-type':'text/html',
                'X-Power-By':'Node.js'
            })
            ctx.body = render();      
        }else{
            await next();
        }
    }
}