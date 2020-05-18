const crypto = require('crypto');
const db = require('../db');
const jwt = require('jsonwebtoken');
const express = require('express');
const router = express.Router();

router.post('/', (req, res, next) => {
  const saltAndHashed = saltAndHashPassword(req.body.password);
  const values = [req.body.email, req.body.phoneNumber, req.body.username, saltAndHashed.salt, saltAndHashed.hash];
  values.push( req.body.isEmployee );
  console.log(values);

  db.query("INSERT INTO users(email, phone_number, username, password_salt, password_hash, isEmployee) VALUES (?)", [values], (err, result) => {
    if (err !== null && err.code === 'ER_DUP_ENTRY') {
      if (!!err.sqlMessage.match(/email/)) {
        res.status(409).send({ errno: 1 });
      } else if (!!err.sqlMessage.match(/username/)) {
        res.status(409).send({ errno: 2 });
      }
    } else {
      console.log("Result =");
      console.log(result);

      const payload = {username: req.body.username, isEmployee: req.body.isEmployee};
      const token = jwt.sign(payload, process.env.SECRET_JWT_STRING, {expiresIn: '8h'});
      res.cookie("token", token, {httpOnly: false});
      res.send();
    }
  });
});

// Salts and hashes the password.
function saltAndHashPassword(password) {
  let salt = crypto.randomBytes(16).toString('hex');
  let hash = crypto.pbkdf2Sync(password, salt, 1000, 64, `sha512`).toString(`hex`);

  return { salt: salt, hash: hash };
};

module.exports = router;