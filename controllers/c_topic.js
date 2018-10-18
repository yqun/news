//渲染话题页
const m_topic = require('../models/m_topic');
const moment = require('moment');

//展示列表
const showTopic = (req, res) => {
    // res.send('话题列表页');
    m_topic.findAllTopic((err, data) => {
        if (err) {
            return res.send({
                code: 500,
                message: '服务器错误'
            })
        }
        res.render('index.html', {
            list: data,
            user: req.session.user
        });
    });
}

//渲染添加信息页面
const createTopic = (req, res) => {
    res.render('topic/create.html');
}

//处理发布新话题的表单
const handleCreateTopic = (req, res) => {
    //获取 表单提价的要添加的数据
    const body = req.body;
    //给body设置createAT时间
    body.createdAT = moment().format();
    //获取用户id
    body.userid = req.session.user.id;
    m_topic.addTopic(body, (err, data) => {
        if (err) {
            return res.send({
                code: 500,
                message: '服务器错误'
            })
        }
        res.send({
            code: 200,
            message: '数据添加成功'
        });
    });
}

//点击进入信息详情列表
const showDetail = (req, res) => {
    const topicID = req.params.topicID;
    m_topic.findTopicById(topicID, (err, data) => {
        if (err) {
            return res.send({
                code: 500,
                message: '服务器错误'
            })
        }
        res.render('topic/show.html', {
            list: data[0],
            sessionUserId: topicID
        });
    });

}
//导出
module.exports = {
    showTopic,
    createTopic,
    handleCreateTopic,
    showDetail
}