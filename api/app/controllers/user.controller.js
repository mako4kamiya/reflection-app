exports.allAccess = (req, res) => {
    res.status(200).send("Public Content.");
};

exports.userBoard = (req, res) => {
    // res.status(200).send("User Content.");
    findAllReflections(req, res);
};

exports.adminBoard = (req, res) => {
    res.status(200).send("Admin Content.");
};

exports.moderatorBoard = (req, res) => {
    res.status(200).send("Moderator Content.");
};

function findAllReflections(req, res) {
    const db = require("../models");
    const Reflection = db.reflection;
    const user_id = req.userId;
    Reflection.find({ user_id: user_id})
    .then(data => {
        res.send(data);
    })
    // 存在しないuser_idでリクエスト投げると、エラーじゃなくて空の配列が返ってきてしまう。。
    .catch(err => {
        res.status(500).send({
            message:
            err.message || "Some error occurred while retrieving reflections."
        });
    });
}