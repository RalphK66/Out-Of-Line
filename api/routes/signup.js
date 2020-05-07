const mysql = require('mysql');

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
  
  const values = [req.body.email, req.body.phoneNumber, req.body.username, req.body.password];
  console.log(values);
  connection.query("INSERT INTO users(email, phone_number, username, password) VALUES (?)", [values], function(err, res) {
    if(err) throw err;
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

  return connection.connect(err => { // return new Promise()?
    if (err) throw err;
    return connection.query("SELECT * FROM users", (err, results, fields) => {
      if (err) throw err;
      return results;
    });
  });
}

module.exports = router;
