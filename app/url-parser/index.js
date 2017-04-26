/*
*Koa2重构pure-node-note author:Sheldon-Yee  
*url-parser
*/
    const getData = (req,ctx) =>{
        return new Promise ((resolve,reject)=>{
                let data = [];
                req.on('data',(chunk)=>{
                    data.push(chunk);
                }).on('end',()=>{
                    let endData = Buffer.concat(data).toString();
                    ctx.body = JSON.parse(endData);
                    resolve(endData);
            })
        })
    }

    const urlParser = () =>{
        return async (ctx,next)=>{
            let {url,method,req} = ctx;
            method = method.toLowerCase();
            if( method === 'post'){
               ctx.type = 'application/json';
               let data = await getData(req,ctx);
               ctx.body = data;
            }else{
                next();
            }
        }
    }

    module.exports = urlParser;