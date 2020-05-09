const mysql = require('mysql');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const express = require('express');
const router = express.Router();

// string to add onto jwt token.
const jwtSecret = "addingOntoSecret";

/* GET home page. */
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

  const saltAndHashPassword = (password) => {
    let salt = crypto.randomBytes(16).toString('hex');
    let hash = crypto.pbkdf2Sync(password, salt, 1000, 64, `sha512`).toString(`hex`);

    return {salt: salt,
            hash: hash
      }
  }
  
  let saltAndHashed = saltAndHashPassword(req.body.password);

  let values = [];
  values.push(req.body.email, req.body.phoneNumber, req.body.username, saltAndHashed.salt, saltAndHashed.hash);
  
  if (req.body.isEmployee === "on") {
    values.push(true);
  } else {
    values.push(false);
  }
  
  console.log(values);

  connection.connect(err => {
    if (err) throw err;
    console.log("Success!")

    connection.query("INSERT INTO users(email, phone_number, username, password_salt, password_hash, isEmployee) VALUES (?)", [values], function(err, result) {
      if(err) {
        throw err;
      }
    });

    connection.query("SELECT username, isEmployee FROM users WHERE email = (?)", req.body.email, function(err, result) {
      console.log("I get in here. 200");
     
      const payload = {username: req.body.username, isEmployee: result[0].isEmployee};

      const token = jwt.sign(payload, jwtSecret, {expiresIn: '8h'});
      console.log(token);

      res.cookie("token", token, {httpOnly: false}).send(res.cookies);
    });
  });
  
});

// Connect to MySQL
function connectToDatabase() {
  const connection = mysql.createConnection(
    {
      host: "localhost",
      user: "root", //CHANGE
      password: "root", //CHANGE
      database: "out_of_line"
    }
  );

  return connection.connect(err => { // return new Promise()?
    if (err) throw err;
    return connection.query("SELECT * FROM users", (err, results, fields) => {
      if (err) throw err;
      return results;
    });
  });
}

module.exports = router;
