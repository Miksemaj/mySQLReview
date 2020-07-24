const mysql = require('mysql');
// https://www.npmjs.com/package/mysql

// TODO: establish connection

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'fooddb',
  password: 'jameskim'
});

db.connect();

module.exports = db;