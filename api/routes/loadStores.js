const mysql = require('mysql');
const db = require('../db');
const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => { // next = next route middleware
  db.query("SELECT * FROM stores", (err, results, fields) => {
    if (err) throw err;
    res.send(results);
  });
});

module.exports = router;