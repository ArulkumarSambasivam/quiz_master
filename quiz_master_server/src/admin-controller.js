const admin = require('express').Router();
const db = require("./db");
admin.post('/addOrganisation', function(req, res) {
    let name = req.param("name");
    let email = req.param("email");
    db.query('INSERT INTO organisation_master (name,email) VALUES (?,?)', 
      [name,email], 
      function (err, rows, fields) {
          if(err){
            console.log('Connection result error ' + err);     
          }else{
              res.send(rows);
          }
          
      ;
      }
    );
   
});

admin.post('/addClass', function(req, res) {

    res.send("add class"+req.param("name"));
   });

admin.post('/addUser', function(req, res) {
    res.send("add User"+req.param("name"));
   });

admin.post('/addQuiz', function(req, res) {
    res.send("add quiz"+req.param("name"));
   });

admin.post('/addQuestion', function(req, res) {
    res.send("add question"+req.param("name"));
   });
module.exports = admin;