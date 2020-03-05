var mysql = require('mysql');
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '12345',
    database : 'quiz',
    insecureAuth:true
});

connection.connect(function(err) {
    console.log("connect")
    if (err) throw err;
});

module.exports = connection;