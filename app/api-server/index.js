/*
*Koa2重构pure-node-note author:Sheldon-Yee  
*apiServer
*/

let Router = require('./ajax');
// Router.get('/categoryList.action',ctx=>{
//     return {a:2}
// })//测试

const handlerData = (ctx) =>{
    return new Promise((resolve,reject)=>{
        return Router.routes(ctx).then(data=>{
            if(data){
                resolve(data);
            }else{
                resolve('没有相关数据')
            }
        })
    })
}//通过mongoose去操作MongoDB数据库返回数据给前端

const apiServer = ()=>{
    return async (ctx,next) =>{
        let {path ,method} = ctx; 
        if(path.match('.action')){
            ctx.set({
                'Content-Type':'application/json',
                'X-power-by':'Node.js'
            })
           let body =  await handlerData(ctx);
           ctx.body = JSON.stringify(body);
        }else{
            await next()
        }
    }
}

module.exports = apiServer