const crypto = require('crypto');
const db = require('../db');

const jwt = require('jsonwebtoken');
const express = require('express');
const cookieParser = require('cookie-parser');
const router = express.Router();

// String to add onto jwt token.
const jwtSecret = "addingOntoSecret";

// Sends a token to the backend through post.
router.post('/', (req, res, next) => {
  // Queries data from the database
  db.query("SELECT password_salt, password_hash, isEmployee FROM users WHERE username = (?)", req.body.username, function (err, result) {
    console.log(result);

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

    if (checkIfValid(req.body.password)) {
      console.log("I get in here. 200")

      const payload = {username: req.body.username, isEmployee: result[0].isEmployee};

      const token = jwt.sign(payload, jwtSecret, {expiresIn: '8h'});
      console.log(token);

      res.cookie("token", token, {httpOnly: false}).send(res.cookies);
    } else {
      console.log("I get in here. 401");
      res.sendStatus(401);
    }
  });
});

module.exports = router;