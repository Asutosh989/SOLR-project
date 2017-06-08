const IoC = require('electrolyte');
const express = require('express');
const log = require('winston');

const repositoryRef = IoC.create('repository');  // asks the container to provide a repository instance
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

  // Note the use of promises to simplify the code
  // this statement returns a promise which will be consumed in the next then
  repositoryRef.then(repository => repository.add(doc, { commit: true }))
  .then((obj) => {
    log.debug('Solr response:', obj);
    res.render('success');
  }).catch(err => next(err));
});


// client.commit(); // save changes

module.exports = router;
