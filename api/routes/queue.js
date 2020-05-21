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

router.post('/get-people-enqueued', (req, res, next) => {
  db.query("SELECT count FROM stores WHERE store_id=(?)", req.body.store_id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      console.log(result);
      res.json({ count: result[0].count });
    }
  });
});

router.post('/get-queue-number', (req, res, next) => {
  db.query("CALL get_current_queue(?)", [req.body.user_id], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      result[0].forEach(row => {
        if (row.user_id === parseInt(req.body.user_id)) {
          res.json({ queue_number: row.queue_number });
        }
      });
    }
  });
});

// Sets ids to -1.  Should be removed when used.
router.post('/update-queue', (req, res, next) => {
  db.query("UPDATE queue SET id = (id - 1) where id > 0")
});

module.exports = router;