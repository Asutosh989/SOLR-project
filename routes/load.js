const express = require('express');
const log = require('winston');
const client = require('../lib/solrclient');

const router = express.Router();

router.get('/', (req, res) => {
  res.render('load');
});
// Add a new document
router.get('/add', (req, res, next) => {
  const first = req.query.first;
  const last = req.query.last;
  const email = req.query.email;
  const doc = { // this is the doc we are inserting, it is a good practice to create a new object
    fname: first,
    lname: last,
    email,
  };
  // TODO; validate this thing
  client.add(doc, { commit: true }, (err, obj) => {
    if (err) {
      next(err);
    } else {
      log.debug('Solr response:', obj);
    }
  });
  res.render('success');
});


// client.commit(); // save changes

module.exports = router;
