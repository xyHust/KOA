/*
*Koa2重构pure-node-note author:Sheldon-Yee  
*apiServer
*/

const apiServer = ()=>{
    return async (ctx,next) =>{
        let {url ,method} = ctx; 
        let urlMap = {
            '/shop.action': ['Macbook', 'Iphone8', 'nokia', 'book'],
            '/Users.action': ['SheldonYee', '21', 'senior']
        }
        method = method.toLocaleLowerCase()
        if(url.match('.action')){
            if(method === 'get'){
                ctx.type = "application/json";
                ctx.body = JSON.stringify(urlMap[url]);
            }else{
                next()
            }
        }else{
            next()
        }
    }
}

module.exports = apiServer