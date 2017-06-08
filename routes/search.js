const express = require('express');
const client = require('../lib/solrclient');

const router = express.Router();

router.get('/', (req, res, next) => {
    // Prepare output in JSON format
  const q = req.query.q;
  const query = client.createQuery().q(q);
  client.search(query, (err, result) => {
    if (err) {
      next(err);
    } else {
      res.render('results', {
        docs: result.response.docs,
      });
    }
  });
});

module.exports = router;
