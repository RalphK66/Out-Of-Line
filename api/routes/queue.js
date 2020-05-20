const mysql = require('mysql');
const db = require('../db');
const express = require('express');
const router = express.Router();

router.post('/add', (req, res, next) => {
  db.query("INSERT INTO queue(store_id, user_id) VALUES (?)", [[req.body.store_id, req.body.user_id]], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      console.log(result);
      db.query("SELECT name FROM stores WHERE id = (?)", [req.body.store_id], (err, result) => {
        console.log(result[0]);
        res.cookie('store_id', result[0].name, {httpOnly: false});
        res.send();
      });
    }
  });
});

router.post('/people-in-line', (req, res, next) => {
  db.query("SELECT COUNT(*) AS count FROM queue WHERE store_id=(?)", req.body.store_id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      console.log(result);
      res.json({ count: result[0].count });
    }
  });
});

module.exports = router;