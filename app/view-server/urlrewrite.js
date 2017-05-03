/*
*Koa2.0重构 pure-node-notebook
*author：ShleonYee
*网站路由
*/


// ### 内容排布


// //header: 头像 + 导航：首页 + 关于 + 博客列表 + 写博客(权限控制) + 搜索
// footer: 友情链接 + github + 知乎 + 掘金 + copyright + 回到顶部
// 内容区 :见如下内容排布


// 实现如下路由排布
// |-- /: 首页 博客列表 + 个人展示
// |
// |-- /list: 博客列表 博客分类 + 博客列表
// |
// |-- /manage: 管理博客 分两屏 markdown编辑器 + 预览区
// |
// |-- /about/ 关于 自由发挥
// |
// |-- url非法: 重定向到首页

const urlrewriteMap = {
    '/':'index',
    '/list':'list',
    '/manage':'manage',
    '/about':'about'
}

module.exports = urlrewriteMap;