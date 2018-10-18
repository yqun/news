const db = require('../tools/db_config');
//获取 评论信息 展示在页面
const findAllTopic = (callback) => {
    const sql = 'SELECT * FROM `topics` ORDER BY `createdAT` DESC';
    db.query(sql, (err, data) => {
        if (err) {
            return callback(err);
        }
        callback(null, data);
    });
}

//发起 添加数据 向数据库中添加新话题
const addTopic = (body,callback) => {
    const sql = 'INSERT INTO `topics` SET ?';
    db.query(sql, body, (err, data) => {
        if (err) {
            return callback(err);
        }
        callback(null, data);
    });
}

//根据信息id获取信息详情
const findTopicById = (topicID, callback) => {
    const sql = 'SELECT * FROM `topics` WHERE id = ?';
    db.query(sql, topicID, (err, data) => {
        if (err) {
            return callback(err);
        }
        callback(null, data);
    })
}
module.exports = {
    findAllTopic,
    addTopic,
    findTopicById
}