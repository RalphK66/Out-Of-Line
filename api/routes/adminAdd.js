const mysql = require('mysql');
const db = require('../db');
const express = require('express');
const router = express.Router();

// Add new row to database table.
router.post('/', (req, res, next) => {
  let values = [req.body.email, req.body.phoneNumber, req.body.name];
  console.log(values);

  db.query("INSERT INTO temp_users(email, phone_number, name) VALUES (?)", [values], (err, result) => {
    if(err) throw err;
  });
});

module.exports = router;