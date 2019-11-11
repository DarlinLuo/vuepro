var express = require('express');
var router = express.Router();

/* GET home page. */
const {
  find
} = require('../db/db');
/* GET home page. */
router.get('/entries', async function (req, res, next) {
  res.append('Access-Control-Allow-Origin','*');
  let data = await find('booksAPP');
  res.json(data);
});

// router.get('/restaurants', async function (req, res, next) {
//   res.append('Access-Control-Allow-Origin','*');
//   let data = await find('restaurants');
//   res.json(data);
// });
// router.get('/login', async function (req, res, next) {
//   res.append('Access-Control-Allow-Origin', '*');
//   let key = req.query.token
//   const token = Buffer.from(key, 'base64').toString('utf8')
//   console.log(JSON.parse(token))
//   res.send(token);
// });
module.exports = router;
