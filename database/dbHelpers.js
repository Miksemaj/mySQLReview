const db = require('./index');

const dbHelpers = {
  get: (callback) => {
    let queryStr = `SELECT * FROM food`;
    db.query(queryStr, (err, results) => {
      if (err) {
        callback(err);
      } else {
        callback(null, results);
      }
    });
  },
  post: (req, callback) => {
    let {name, price, rating} = req.body;
    let queryStr = `INSERT INTO Food (name, price, rating) VALUES ("${name}", ${price}, ${rating})`;
    db.query(queryStr, (err, results) => {
      if (err) {
        callback(err);
      } else {
        callback(null, results);
      }
    });
  }
}

module.exports = dbHelpers;