const IoC = require('electrolyte');
const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
  // Prepare output in JSON format
  const q = req.query.q;
  IoC.create('repository').then((repository) => {
    const query = repository.createQuery().q(q);
    return repository.search(query);
  }).then((result) => {
    res.render('results', {
      docs: result.response.docs,
    });
  }).catch(err => next(err));
});

module.exports = router;
