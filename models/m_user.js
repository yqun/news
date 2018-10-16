//控制器 c_user.js中数据库操作部分
//导入数据库配置的模块
const db = require('../tools/db_config');
// 1 验证邮箱
const checkEmail = function (email, callback) {
    const sql = 'SELECT * FROM users WHERE email=?';
    db.query(sql, email, (err, data) => {
        if (err) {
            return callback(err);
        }
        callback(null,data);
    });
};

// 2
module.exports = {
    checkEmail
}