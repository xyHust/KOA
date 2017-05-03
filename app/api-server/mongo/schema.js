/**
 * koa2.0重构项目
 * @author:ShleonYee
 * 创建Schema
 */

const {Schema} = require('mongoose')

 // schema + model
const categorySchema = new Schema({
    name: String,
    id:String
});

const blogSchema = new Schema({
    title: String,
    content:String,
    rawContent:String,
    //http://mongoosejs.com/docs/schematypes.html
    category:categorySchema,
    date: String
},{
    _id:false, //===>_id为false 告诉mongoose
    //http://mongoosejs.com/docs/guide.html#strict
    strict: false
});

module.exports = {
    blogSchema,
    categorySchema
}



