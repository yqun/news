//路由模块
// 1 导包
const express = require('express');
const c_user = require('./controllers/c_user');
const c_topic = require('./controllers/c_topic');
// 2 express.Router()
const router = express.Router();
// 3 router.get()
router
    .get('/signin', c_user.showSignin)// 渲染登录页面的请
    .post('/signin', c_user.handleSignin)//监听登录的表单请求
    .get('/', c_topic.showTopic)//登录成功页
    .get('/topic/create', c_topic.createTopic)//发起添加信息
    .post('/createTopic', c_topic.handleCreateTopic)//处理发布新话题的表单
    .get('/signout', c_user.handleSignout)//退出登录
    .get('/topic/:topicID', c_topic.showDetail)//

// 4 导出对象router
module.exports = router;
// 5 app.js 调用router.js文件  并使用router
