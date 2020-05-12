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