const crypto = require('crypto');
const db = require('../db');

const express = require('express');
const router = express.Router();

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
    if(err) throw err;
    res.send("Updated!");
  });
});

// Connect to MySQL
function connectToDatabase() {
  return db.query("SELECT * FROM users", (err, results, fields) => {
    if (err) throw err;
    return results;
  });
}

module.exports = router;