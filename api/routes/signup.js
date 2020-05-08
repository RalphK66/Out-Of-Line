const mysql = require('mysql');
const crypto = require('crypto');


const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => { // next = next route middleware
  const connection = mysql.createConnection(
    {
      host: "localhost",
      user: process.env.DB_ADMIN_USERNAME,
      password: process.env.DB_ADMIN_PASSWORD,
      database: process.env.DB_NAME
    }
  );

  connection.query("SELECT * FROM users", (err, results, fields) => {
    if (err) throw err;
    res.send(results);
  });
  // connectToDatabase().then(data => res.send(data));
});

router.post('/', (req, res, next) => {
  const connection = mysql.createConnection(
    {
      host: "localhost",
      user: process.env.DB_ADMIN_USERNAME,
      password: process.env.DB_ADMIN_PASSWORD,
      database: process.env.DB_NAME
    }
  );

  const saltAndHashPassword = (password) => {
    let salt = crypto.randomBytes(16).toString('hex');
    let hash = crypto.pbkdf2Sync(password, salt, 1000, 64, `sha512`).toString(`hex`);

    return { salt: salt, hash: hash };
  };
  
  let saltAndHashed = saltAndHashPassword(req.body.password);

  const values = [req.body.email, req.body.phoneNumber, req.body.username, saltAndHashed.salt, saltAndHashed.hash];
  values.push( req.body.isEmployee );
  console.log(values);

  connection.query("INSERT INTO users(email, phone_number, username, password_salt, password_hash, isEmployee) VALUES (?)", [values], function(err, result) {
    if(err) throw err;
    res.send("Updated!");

  // const checkIfValid = (password) => {
  //   let newHash = crypto.pbkdf2Sync(password, saltAndHashed.salt, 1000, 64, `sha512`).toString(`hex`);
  //   if (newHash === saltAndHashed.hash) {
  //     console.log("The same.");
  //   } else {
  //     console.log("Isn't the same.")
  //   }
  // }

  // checkIfValid(data.password);

  });
});

// Connect to MySQL
function connectToDatabase() {
  const connection = mysql.createConnection(
    {
      host: "localhost",
      user: process.env.DB_ADMIN_USERNAME,
      password: process.env.DB_ADMIN_PASSWORD,
      database: process.env.DB_NAME
    }
  );

  return connection.query("SELECT * FROM users", (err, results, fields) => {
    if (err) throw err;
    return results;
  });
}

module.exports = router;