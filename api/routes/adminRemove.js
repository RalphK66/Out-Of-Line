const mysql = require('mysql');
const db = require('../db');
const express = require('express');
const router = express.Router();

// Delete rows from database by name field.
router.post('/', (req, res, next) => {
  let value = req.body.id;
  console.log(value);

  db.query("DELETE FROM temp_users WHERE id = (?)", [value], (err, result) => {
    if (err) throw err;
  });
});

module.exports = router;