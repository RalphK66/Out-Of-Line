const mysql = require('mysql');

const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => { // next = next route middleware
  const connection = mysql.createConnection(
    {
      host: "localhost",
      user: "root", //CHANGE
      password: "root", //CHANGE
      database: "out_of_line"
    }
  );

  connection.connect(err => {
    if (err) throw err;
    connection.query("SELECT * FROM users", (err, results, fields) => {
      if (err) throw err;
      res.send(results);
    });
  });

  // connectToDatabase().then(data => res.send(data));
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
