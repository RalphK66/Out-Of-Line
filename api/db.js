const mysql = require('mysql');
const connection = mysql.createConnection({
  host: "localhost",
  user: process.env.DB_ADMIN_USERNAME,
  password: process.env.DB_ADMIN_PASSWORD,
  database: process.env.DB_NAME
});

connection.connect(function(err) {
  if (err) throw err;
});

module.exports = connection;