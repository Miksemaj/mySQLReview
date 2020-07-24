const dbHelpers = require('../database/dbHelpers.js');


module.exports = {
  get: (req, res) => {
    // console.log(req.body)
    // res.send('Hello World')
    dbHelpers.get((err, results) => {
      if (err) {
        res.status(400).send(err);
      } else {
        res.status(200).json(results);
      }
    });
  },

  post: (req, res) => {
    // res.send(`Hi, sending post request`)
    console.log(req.body);
    dbHelpers.post(req, (err, results) => {
      if (err) {
        res.status(400).send(err);
      } else {
        res.status(200).json(results);
      }
    });
  }
}