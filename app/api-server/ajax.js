/**
 * koa2.0重构博客项目
 * @author:ShledonYee
 * 专门处理AJAX
 */
// Router.get('/categoryList.action',ctx=>{
//     return {a:2}
// })//测试


let Router = require('./router');

let {$_saveBlog , 
    $_saveCategroy,
    $_getCategory,
    $_getBlogDetail,
    $_getBlogList,
    $_deleteBlog
} = require('./mongo');
//获取分类列表
Router.get('/categoryList.action',(ctx)=>{
   return $_getCategory()
});
//增加分类
Router.post('/category.action',(ctx)=>{
     let category = ctx.body;
    return $_saveCategroy(category);
});
//添加博客
Router.post('/blog.action',(ctx)=>{
    let blog = ctx.body;
    return $_saveBlog(blog);
});

//博客详情页
Router.get('/blogDetail.action',(ctx)=>{
    let {query} = ctx;
    return $_getBlogDetail(query);
})
//获取博客列表
Router.get('/blogList.action',(ctx)=>{
    let {query} = ctx;
    return $_getBlogList(query)
})
//删除博客
Router.post('/deleteBlog.action',(ctx)=>{
    let body = ctx.body;
    return $_deleteBlog(body);
})

module.exports = Router;