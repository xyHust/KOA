/**
 * koa2.0重构项目
 * @author:ShleonYee
 * 创建Schema
 */

const {Schema} = require('mongoose');

//创建blog的数据存蓄
exports.blogSchema = new Schema({
    title:String,
    content:String,//html
    rawContent:String,//markdown
    date:{
        type:String,
        default:()=>{return new Date().toLocaleString();}
    }
})

//创建博客分类
exports.categorySchema = new Schema({
    category : String,
    _id : String
})

