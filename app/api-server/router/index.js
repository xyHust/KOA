/**
 * 创建路由映射表
 * Koa2.0重构 @author SheldonYee
 * 方式: 
 * router.get('xxxxxx.action',(ctx)=>{
 *   return Blog
 * })
 */

class Router {
    constructor(){
        this.roterMap = {
            get :{},
            post:{}
        }
    }
    get(path,handler){
        let getMap = this.roterMap.get;
        getMap[path] = handler;
    }
    post(path,handler){
        let postMap = this.roterMap.post;
        postMap[path] = handler;
    }
    routes(ctx){
        let {path , method} = ctx;
        method = method.toLowerCase();
        if(method === 'get' || method ==='post'){
             let handler = this.roterMap[method][path];
             if(handler){
                return Promise.resolve(handler(ctx));
             }else{
                return Promise.resolve();
             }
        }else{
             return  Promise.resolve();
        }
    }
}

module.exports = new Router();

