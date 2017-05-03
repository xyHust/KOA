/*
*Koa2重构pure-node-note author:Sheldon-Yee  
*static-server
*/
const path = require('path');
const fs = require('fs');
const mime = require('mime');

const getPath = (Path) => {
    return path.resolve(process.cwd(), 'public', `./${Path}`)
}

const StaticFun = () => {
    return async (ctx, next) => {
        let {path} = ctx;
        if (path.match('action')&& !path.match(/\./)) {
           await next();
        } else {
            debugger;
            let _path = getPath(path);
            let _type = mime.lookup(_path);
            ctx.set({
                "Content-Type":_type,
                'X-power-by':'Node.js'
            });
            ctx.body = fs.readFileSync(_path);
            await next()
        }
    }
}

module.exports = StaticFun


