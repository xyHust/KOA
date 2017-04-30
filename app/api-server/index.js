/*
*Koa2重构pure-node-note author:Sheldon-Yee  
*apiServer
*/

const apiServer = ()=>{
    return async (ctx,next) =>{
        let {path ,method} = ctx; 
        let urlMap = {
            '/shop.action': ['Macbook', 'Iphone8', 'nokia', 'book'],
            '/Users.action': ['SheldonYee', '21', 'senior']
        }
        method = method.toLocaleLowerCase()
        if(path.match('.action')){
            if(method === 'get'){
                ctx.type = "application/json";
                ctx.body = JSON.stringify(urlMap[path]);
            }else{
               await next()
            }
        }else{
            await next()
        }
    }
}

module.exports = apiServer