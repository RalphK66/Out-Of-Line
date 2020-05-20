const crypto = require('crypto');
const db = require('../db');
const jwt = require('jsonwebtoken');
const express = require('express');
const router = express.Router();
// Regex pattern sourced from: http://emailregex.com/
// RFC 5322 Official standard
const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

// POST request that inserts the new user in the database  
router.post('/', (req, res, next) => {
  if (req.body.username === undefined || req.body.password === undefined || req.body.email === undefined || regex.test(req.body.email) === false || req.body.phoneNumber === undefined) {
    res.sendStatus(409);
  } else {
    const saltAndHashed = saltAndHashPassword(req.body.password);
    const values = [req.body.email, req.body.phoneNumber, req.body.username, saltAndHashed.salt, saltAndHashed.hash];
    values.push( req.body.isEmployee );
    console.log(values);
  
    // Inserts values into database
    db.query("INSERT INTO users(email, phone_number, username, password_salt, password_hash, is_employee) VALUES (?)", [values], (err, result) => {
      // Will match with an existing error, and send the corresponding status back
      if (err !== null && err.code === 'ER_DUP_ENTRY') {
        if (!!err.sqlMessage.match(/email/)) {
          res.status(409).send({ errno: 1 });
        } else if (!!err.sqlMessage.match(/username/)) {
          res.status(409).send({ errno: 2 });
        } 
      } else {
        console.log("Result =");
        console.log(result.insertId);
  
        
        const payload = {username: req.body.username, password: req.body.password, isEmployee: req.body.isEmployee};
        const token = jwt.sign(payload, process.env.SECRET_JWT_STRING, {expiresIn: '8h'});
        res.cookie("token", token, {httpOnly: false})
        res.cookie("id", result.insertId);
        res.send();
      }
    });
  }
});

// Salts and hashes the password.
function saltAndHashPassword(password) {
  let salt = crypto.randomBytes(16).toString('hex');
  let hash = crypto.pbkdf2Sync(password, salt, 1000, 64, `sha512`).toString(`hex`);

  return { salt: salt, hash: hash };
};

module.exports = router;