const IoC = require('electrolyte');
const express = require('express');
const log = require('winston');

const repositoryRef = IoC.create('repository'); //asks the container to provide a repository instance
const client = require('../lib/solrclient');

const router = express.Router();

router.get('/', (req, res) => {
  res.render('delete');
});


router.get('/remove', (req, res, next) => {
  const field = req.query.field;
  const attr = req.query.attr;
  repositoryRef.then(repository => repository.delete(field, attr, {commit: true }))
  .then((obj) => {
      log.debug(obj);
      res.render('success');
    }).catch(err => next(err));

});

module.exports = router;
