/*
*Koa2重构pure-node-note author:Sheldon-Yee  
*static-server
*/
const path = require('path');
const fs = require('fs');
const mime = require('mime');
const getPath = (url) => {
    return path.resolve(process.cwd(), 'public', `./${url}`)
}

const readFile  = (_path) =>{
    return new Promise((resolve,reject)=>{
        fs.readFile(_path,(error,data)=>{
            if(error) {
                reject(error);
            }else{  
                resolve(data);
            }
 
        })
    })
}

const StaticFun = () => {
    return async (ctx, next) => {
        let {url} = ctx;
        if (url.match('action')) {
            next()
        } else {
            if (url === '/') {
                url = '/index.html'
            }
            let _path = getPath(url);
            let _type = mime.lookup(_path);
            ctx.type = _type;
            // let body = fs.readFileSync(_path);
            // debugger;
            ctx.body = fs.readFileSync(_path);
            let body = await readFile(_path)
            return ctx.body = body ;
            // debugger;
        }
    }
}
module.exports = StaticFun


