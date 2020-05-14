const crypto = require('crypto');
const db = require('../db');

const jwt = require('jsonwebtoken');
const express = require('express');
const router = express.Router();

// string to add onto jwt token.
const jwtSecret = "addingOntoSecret";

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

  db.query("INSERT INTO users(email, phone_number, username, password_salt, password_hash, isEmployee) VALUES (?)", [values], (err, result) => {
    if (err) throw err;
    console.log("Updated!");
  });

  db.query("SELECT username, isEmployee FROM users WHERE email = (?)", req.body.email, (err, result) => {
    console.log("I get in here. 200");

    const payload = {username: req.body.username, isEmployee: result[0].isEmployee};
    const token = jwt.sign(payload, jwtSecret, {expiresIn: '8h'});
    console.log(token);
    res.cookie("token", token, {httpOnly: false});
    res.send();
  });
});

module.exports = router;