const mysql = require('mysql');
const crypto = require('crypto');


const express = require('express');
const router = express.Router();

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

  let data = req.body;
  console.log(data);
  
  let saltAndHashed = saltAndHashPassword(data.password);

  let values = [];
  values.push(data.email, data.phoneNumber, data.username, saltAndHashed.salt, saltAndHashed.hash);
  
  if (data.isEmployee === "on") {
    values.push(true);
  } else {
    values.push(false);
  }
  
  console.log(values);

  // const checkIfValid = (password) => {
  //   let newHash = crypto.pbkdf2Sync(password, saltAndHashed.salt, 1000, 64, `sha512`).toString(`hex`);
  //   if (newHash === saltAndHashed.hash) {
  //     console.log("The same.");
  //   } else {
  //     console.log("Isn't the same.")
  //   }
  // }

  // checkIfValid(data.password);

  connection.connect(err => {
    if (err) throw err;
    console.log("Success!")

    connection.query("INSERT INTO users(email, phone_number, username, password_salt, password_hash, isEmployee) VALUES (?)", [values], function(err, res) {
      if(err) {
        throw err;
      }
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