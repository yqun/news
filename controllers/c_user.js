//导入  邮箱验证 m_user.js
const m_user = require('../models/m_user');
//渲染登录页
const showSignin = (req, res) => {
    // res.send('c_user.js success');
    res.render('signin.html');
}
//监听登录的表单请求
const handleSignin = (req, res) => {
    //获取表单数据
    const body = req.body;

    m_user.checkEmail(body.email,(err, data) => {
        if (err) {
            return res.send({
                code: 500,
                message: '服务器错误'
            });
        }
        //判断邮箱不存在
        if (!data[0]) {
            return res.send({
                code: 1,
                message: '邮箱不存在'
            });
        }
        //判断密码错误
        if (data[0].password != body.password) {
            return res.send({
                code: 2,
                message: '密码错误'
            });
        }
        //保存 用户数据到 req.session 中
        req.session.user = data[0];
        //账号密码正确  进行跳转
        res.send({
            code: 200,
            message: '可以跳转了'
        })
        // res.redirect('/');
    });

    //查询数据库中的数据
    // const sql = 'SELECT * FROM users WHERE email=?';
    // connection.query(sql, body.email, (err, data) => {
    //     if (err) {
    //         return res.send(err);
    //     }
    //     //判断邮箱不存在
    //     if (!data[0]) {
    //         return res.send('邮箱不存在');
    //     }
    //     //判断密码错误
    //     if (data[0].password != body.password) {
    //         return res.send('密码错误');
    //     }
    //     //账号密码正确  进行跳转
    //     res.redirect('/');
    // })

}
//退出
const handleSignout = (req, res) => {
    //清除session中保存的用户信息
    delete req.session.user;
    res.redirect('/signin');
}

//导出
module.exports = {
    showSignin,
    handleSignin,
    handleSignout
}