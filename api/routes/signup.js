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
  console.log(data);
  
  let values = [];
  values.push(data.email, data.phoneNumber, data.username, data.password);
  console.log(values);

  connection.connect(err => {
    if (err) throw err;
    console.log("Success!")

    connection.query("INSERT INTO users(email, phone_number, username, password) VALUES (?)", [values], function(err, res) {
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
