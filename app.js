// 程序入口文件
// 1 导包
const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const router = require('./router');
var MySQLStore = require('express-mysql-session')(session);
var options = {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'root',
    database: 'newssql'
};
var sessionStore = new MySQLStore(options);
// 2 app对象
const app = express();
// 3 配置包
app.engine('html', require('express-art-template'));
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(session({
    key: 'session_cookie_name',
    secret: 'session_cookie_secret',
    store: sessionStore,
    resave: false,
    saveUninitialized: false
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