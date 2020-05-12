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
    console.log("Success!")
    connection.query("SELECT * FROM temp_users", (err, results, fields) => {
      if (err) throw err;
      res.send(results);
    });
  });

  // connectToDatabase().then(data => res.send(data));
});

// Delete rows from database by name field.
router.post('/', (req, res, next) => {
  const connection = mysql.createConnection(
    {
      host: "localhost",
      user: "root", //CHANGE
      password: "root", //CHANGE
      database: "out_of_line"
    }
  );

  let data = req.body;
  let value = data.id;
  console.log(value);

  connection.connect(err => {
    if (err) throw err;
    console.log("Success!")

    connection.query("DELETE FROM temp_users WHERE id = (?)", [value], function(err, res) {
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
    return connection.query("SELECT * FROM temp_users", (err, results, fields) => {
      if (err) throw err;
      return results;
    });
  });
}

module.exports = router;