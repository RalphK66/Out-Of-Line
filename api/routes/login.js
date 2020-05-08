const crypto = require('crypto');
const db = require('../db');

const express = require('express');
const router = express.Router();

router.post('/', (req, res, next) => {
  db.query("SELECT password_salt, password_hash, isEmployee FROM users WHERE username = (?)", req.body.username, function (err, result) {
    console.log(result);

    const checkIfValid = (password) => {
      const newHash = crypto.pbkdf2Sync(password, result[0].password_salt, 1000, 64, `sha512`).toString(`hex`);
      if (newHash === result[0].password_hash) {
        console.log("The same.");
        return true;
      } else {
        console.log("Isn't the same.");
        return false;
      }
    }

    if (checkIfValid(req.body.password)) {
      console.log("I get in here. 200")
      res.sendStatus(200);

      const values = [];
      values.push(req.body.username, req.body.password, result[0].isEmployee);
      console.log(values);

      res.end(JSON.stringify(values));
    } else {
      console.log("I get in here. 401");
      res.sendStatus(401);
    }
  });
});

module.exports = router;