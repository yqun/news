//配置mysql
//mysql 相关配置
var mysql = require('mysql');
var db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'newssql'
});

//导出
module.exports = db;