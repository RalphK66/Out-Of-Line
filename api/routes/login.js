const mysql = require('mysql');
const crypto = require('crypto');

const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => { // next = next route middleware
    const connection = mysql.createConnection(
      {
        host: "localhost",
        user: "root", //CHANGE
        password: "root", //CHANGE
        database: "testoutofline"
      }
    );
  
    connection.connect(err => {
      if (err) throw err;
      console.log("Success!")
      connection.query("SELECT * FROM users", (err, results, fields) => {
        if (err) throw err;
        res.send(results);
      });
    });
  
    // connectToDatabase().then(data => res.send(data));
  });


router.post('/', (req, res, next) => {
    const connection = mysql.createConnection(
        {
          host: "localhost",
          user: "root", //CHANGE
          password: "root", //CHANGE
          database: "testoutofline"
        }
      );

    let data = req.body;
    console.log(data.username);

    // ATotallyNewPass!
    connection.query("SELECT password_salt, password_hash, isEmployee FROM users WHERE username = (?)", data.username, function(err, result) {
        console.log(result);
        
        const checkIfValid = (password) => {
            let newHash = crypto.pbkdf2Sync(password, result[0].password_salt, 1000, 64, `sha512`).toString(`hex`);
            if (newHash === result[0].password_hash) {
              console.log("The same.");
              return true;
            } else {
              console.log("Isn't the same.");
              return false;
            }
          }
        
          if (checkIfValid(data.password)) {
            console.log("I get in here. 200")
            res.sendStatus(200);

            let values = [];
            values.push(data.username, data.password, result[0].isEmployee);
            console.log(values);

            res.end(JSON.stringify(values));
          } else {
            console.log("I get in here. 401");
            res.sendStatus(401);
          }
    });
});

module.exports = router;