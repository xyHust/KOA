/*
*Koa2重构pure-node-note author:Sheldon-Yee  
*apiServer
*/

let Router = require('./router');

Router.get('/categoryList.action',ctx=>{
    return {a:2}
})

const handlerData = (ctx) =>{
    return new Promise((resolve,reject)=>{
        return Router.routes(ctx).then(data=>{
            resolve(data);
        })
    })
}

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