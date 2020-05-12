const crypto = require('crypto');
const db = require('../db');
const jwt = require('jsonwebtoken');
const express = require('express');
const router = express.Router();

// Sends a token to the backend through post.
router.post('/', (req, res, next) => {
  // Queries data from the database
  db.query("SELECT password_salt, password_hash, isEmployee FROM users WHERE username = (?)", req.body.username, function (err, result) {
    console.log(result);

    // Checks if the password from the client is correct.
    const checkIfValid = (password) => {
      let newHash = crypto.pbkdf2Sync(password, result[0].password_salt, 1000, 64, `sha512`).toString(`hex`);
      if (newHash === result[0].password_hash) {
        console.log("The same.");
        return true;
      } else {
        console.log("Isn't the same.");
        return false;
      }
    }

    // Sends back a JWT token if the password is correct
    if (checkIfValid(req.body.password)) {
      const payload = {username: req.body.username, password: req.body.password, isEmployee: result[0].isEmployee};

      const token = jwt.sign(payload, process.env.SECRET_JWT_STRING, {expiresIn: '8h'});
      console.log(token);

      res.cookie("token", token, {httpOnly: true}).send();
    } else {
      res.sendStatus(401);
    }
  });
});

module.exports = router;