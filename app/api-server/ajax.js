/**
 * koa2.0重构博客项目
 * @author:ShledonYee
 * 专门处理AJAX
 */
// Router.get('/categoryList.action',ctx=>{
//     return {a:2}
// })//测试


let Router = require('./router');
let { $_saveBlog } = require('./mongo');
//获取分类列表
Router.get('/categoryList.action',ctx=>{

})
//增加分类
Router.post('/category.action',ctx=>{

})
//增加博客
Router.post('/blog.action',ctx=>{
    let blog = ctx.body;
    return $_saveBlog(blog)
})

module.exports = Router