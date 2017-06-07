const express = require('express');
const log = require('winston');

const client = require('../lib/solrclient');

const router = express.Router();

router.get('/', (req, res) => {
  res.render('delete');
});

router.get('/remove', (req, res, next) => {
  const field = req.query.field;
  const attr = req.query.attr;
  client.delete(field, attr, { commit: true }, (err, obj) => {
    if (err) {
      next(err);
    } else {
      log.debug(obj);
    }
  });
  res.render('success');
});

module.exports = router;
