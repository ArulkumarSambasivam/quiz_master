const admin = require('express').Router();
const db = require("./db");
admin.post('/addOrganisation', function (req, res) {
    let name = req.param("name");
    let email = req.param("email");
    db.query('INSERT INTO organisation_master (name,email) VALUES (?,?)',
        [name, email],
        function (err, rows, fields) {
            if (err) {
                console.log('Connection result error ' + err);
            } else {
                res.send(rows);
            }
        }
    );
});

admin.post('/addClass', function (req, res) {
    let name = req.param("name");
    let email = req.param("email");
    let org_id = req.param("org_id");
    db.query('INSERT INTO class_master (name,email,org_id) VALUES (?,?,?)',
        [name, email, org_id],
        function (err, rows, fields) {
            if (err) {
                console.log('Connection result error ' + err);
            } else {
                res.send(rows);
            }
        }
    );

});

admin.post('/addUser', function (req, res) {
    let name = req.param("name");
    let email = req.param("email");
    let password = req.param("password");
    let class_id = req.param("class_id");
    let org_id = req.param("org_id");
    db.query('INSERT INTO user_master (name,email,password,class_id,org_id) VALUES (?,?,?,?,?)',
        [name, email, password, class_id, org_id],
        function (err, rows, fields) {
            if (err) {
                console.log('Connection result error ' + err);
            } else {
                res.send(rows);
            }
        }
    );

});

admin.post('/addAdmin', function (req, res) {
    let name = req.param("name");
    let email = req.param("email");
    let password = req.param("password");
    let org_id = req.param("org_id");
    db.query('INSERT INTO admin_master (name,email,password,org_id) VALUES (?,?,?,?)',
        [name, email, password, org_id],
        function (err, rows, fields) {
            if (err) {
                console.log('Connection result error ' + err);
            } else {
                res.send(rows);
            }
        }
    );

});

admin.post('/addAdmin', function (req, res) {
    let name = req.param("name");
    let email = req.param("email");
    let password = req.param("password");
    let org_id = req.param("org_id");
    db.query('INSERT INTO admin_master (name,email,password,org_id) VALUES (?,?,?,?)',
        [name, email, password, org_id],
        function (err, rows, fields) {
            if (err) {
                console.log('Connection result error ' + err);
            } else {
                res.send(rows);
            }
        }
    );

});


admin.post('/addQuiz', function (req, res) {
    let name = req.param("name");
    let class_id = req.param("class_id");
    let admin_id = req.param("admin_id");
    db.query('INSERT INTO quiz_master (name,class_id,admin_id) VALUES (?,?,?)',
        [name, class_id, admin_id],
        function (err, rows, fields) {
            if (err) {
                console.log('Connection result error ' + err);
            } else {
                res.send(rows);
            }
        }
    );

});

admin.post('/addQuestion', function (req, res) {
    let quiz_id = req.param("quiz_id");
    let admin_id = req.param("admin_id");
    let questions = req.param("questions");
    let options = req.param("options");
    let answer = req.param("answer");
    db.query('INSERT INTO question_master (quiz_id,admin_id,questions,options,answer) VALUES (?,?,?,?,?)',
        [quiz_id, admin_id, questions, options, answer],
        function (err, rows, fields) {
            if (err) {
                console.log('Connection result error ' + err);
            } else {
                res.send(rows);
            }

            ;
        }
    );

});
module.exports = admin;