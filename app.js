// 程序入口文件
// 1 导包
const express = require('express');
const bodyParser = require('body-parser');
const router = require('./router');
// 2 app对象
const app = express();
// 3 配置包
app.engine('html', require('express-art-template'));
app.use(bodyParser.urlencoded({
    extended: false
}));
//处理静态资源
app.use('/public', express.static('./public'));
app.use('/node_modules', express.static('./node_modules'));
// 使用 router
app.use(router);
// 4 监听端口
app.listen('12346', () => {
    console.log('listen 12346 success');
});