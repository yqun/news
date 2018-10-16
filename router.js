//路由模块
// 1 导包
const express = require('express');
const c_user = require('./controllers/c_user');
const c_topic = require('./controllers/c_topic');
// 2 express.Router()
const router = express.Router();
// 3 router.get()
// 渲染登录页面的请求
router.get('/signin', c_user.showSignin);
//监听登录的表单请求
router.post('/signin', c_user.handleSignin);
//登录成功页
router.get('/', c_topic.showTopic);


// 4 导出对象router
module.exports = router;
// 5 app.js 调用router.js文件  并使用router
