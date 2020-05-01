var express = require('express');
var router = express.Router();

/* GET home page. */
router.post("/signup", (req, res) => {
  let newUser = req.body;
  console.log(newUser)

  let values = [];
  values.push(newUser.email, newUser.phoneNumber, newUser.username, newUser.password);

  connection.query("INSERT INTO users(email, phone_number, username, password) VALUES (?)", [values], function(err, res) {
    if(err) {
      throw err;
    }
  });
});

module.exports = router;
