const crypto = require('crypto');
const db = require('../db');
const jwt = require('jsonwebtoken');
const express = require('express');
const router = express.Router();

router.post('/', (req, res, next) => {
    // Salts and hashes the password.
    const saltAndHashPassword = (password) => {
        let salt = crypto.randomBytes(16).toString('hex');
        let hash = crypto.pbkdf2Sync(password, salt, 1000, 64, `sha512`).toString(`hex`);

        return { salt: salt, hash: hash };
    };

    let saltAndHashed = saltAndHashPassword(req.body.newPass);

    // Updating the values in users with a new password
    db.query("UPDATE users SET password_salt = (?), password_hash = (?) WHERE username = (?)", [saltAndHashed.salt, saltAndHashed.hash, req.body.username], (err, result) => {
        if (err) {
            res.sendStatus(409);
        } else {
            db.query("SELECT id FROM users WHERE username = (?)", [req.body.username], (err, result) => {
                if (err) {
                    res.sendStatus(401);
                }else if (Array.isArray(result) && result.length === 0) {
                    res.sendStatus(409)
                } else {
                    console.log(result);

                    // Sends back a JWT token if the password is correct
                    const payload = {username: req.body.username, password: req.body.password, isEmployee: req.body.isEmployee};
    
                    const token = jwt.sign(payload, process.env.SECRET_JWT_STRING, {expiresIn: '8h'});
    
                    res.cookie("token", token, {httpOnly: false})
                    res.cookie("id", result[0].id);
                    res.send();
                }    
            })   
        }
    });
  });
  
  module.exports = router;