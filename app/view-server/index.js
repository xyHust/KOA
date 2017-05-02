/*
*Koa2重构pure-node-note author:Sheldon-Yee  
*view-server
*/

//映射表
//ejs动态渲染数据
const ejs = require('ejs');
const fs = require('fs');
const Path = require('path');
const urlrewriteMap = require('./urlrewrite');

module.exports = () =>{
    return async (ctx,next) =>{
        let {path,cookies} = ctx;
        let hasUser;
        if(cookies.get('authd')){
            hasUser = true;
        }else{
            hasUser = false;
        }
        if(!path.match('action') || !path.match(/\./)){
            let viewPath = Path.resolve(__dirname,'ejs');
            let ejsName = urlrewriteMap[path];//对照映射表
            if(ejsName){
                let layoutPath = Path.resolve(viewPath,'layout.ejs');//取得layout.ejs
                let layoutHtml = fs.readFileSync(layoutPath,'utf8');//谨记每次通过readFile输出的都为buffer，每次都忽略，谨记
                let render = ejs.compile(layoutHtml,{
                    compileDebug:true,
                    filename:layoutPath
                })
                ctx.set({
                    'Content-type':'text/html',
                    'X-Power-By':'Node.js'
                })
                ctx.body = render({
                    templateName:ejsName+'.ejs',
                    hasUser
                });               
            }else{
                ctx.status = 302;
                ctx.StatusMessage = 'redirect';
                ctx.redirect('/');
                ctx.body = 'Redirecting';
            }
        }else{
            await next();
        }
    }
}