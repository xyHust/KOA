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

const StaticFun = () => {
    return async(ctx, next) => {
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
            ctx.body = fs.readFileSync(_path);
        }
    }
}

module.exports = StaticFun