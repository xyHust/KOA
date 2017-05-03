/**
 * koa2.0重构项目
 * @author:ShleonYee
 * 创建model
 */
const mongoose = require('mongoose');
const { blogSchema } = require('./schema')

//第一个参数表明collection的名字
const BlogModel =  mongoose.model('Blog',blogSchema);

const $_saveBlog = blog =>{
    return BlogModel.findOneAndUpdate(condition,{}).then((_blog)=>{
        return {
            status : 1,
            data:_blog
        }
    })
}




module.exports = {
    $_saveBlog
}