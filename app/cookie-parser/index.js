/*
*Koa2重构pure-node-note author:Sheldon-Yee  
*cookie-parser
*/
const whiteName = ['/SheldonYee1994'];
const blackNmae = ['/logout'];
module.exports = ()=>{
    return async(ctx,next)=>{
        let {path , cookies} = ctx;
        let cookieStr = (time) =>`authd=Sheldon;Max-Age=${time};HttpOnly;`;
        if(whiteName.indexOf(path)>-1){
            ctx.set({
                'Set-Cookie':cookieStr(50)
            })
        }
        if(blackNmae.indexOf(path)>-1){
            ctx.set({
                'Set-Cookie':cookieStr(0)
            })
        }
        await next();   
    }   
}