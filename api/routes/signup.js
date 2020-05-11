const crypto = require('crypto');
const db = require('../db');

const jwt = require('jsonwebtoken');
const express = require('express');
const router = express.Router();

// string to add onto jwt token.

router.post('/', (req, res, next) => {
  const saltAndHashPassword = (password) => {
    let salt = crypto.randomBytes(16).toString('hex');
    let hash = crypto.pbkdf2Sync(password, salt, 1000, 64, `sha512`).toString(`hex`);

    return { salt: salt, hash: hash };
  };

  let saltAndHashed = saltAndHashPassword(req.body.password);

  const values = [req.body.email, req.body.phoneNumber, req.body.username, saltAndHashed.salt, saltAndHashed.hash];
  values.push( req.body.isEmployee );
  console.log(values);

  db.query("INSERT INTO users(email, phone_number, username, password_salt, password_hash, isEmployee) VALUES (?)", [values], function(err, result) {
    if (err) throw err;
  });

  db.query("SELECT username, isEmployee FROM users WHERE email = (?)", req.body.email, function(err, result) {
    console.log("I get in here. 200");

    const payload = {username: req.body.username, password: req.body.password, isEmployee: result[0].isEmployee};

    const token = jwt.sign(payload, process.env.SECRET_JWT_STRING, {expiresIn: '8h'});
    console.log(token);

    res.cookie("token", token, {httpOnly: true}).send();
  });
});

module.exports = router;