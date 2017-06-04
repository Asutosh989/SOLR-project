var express = require('express');
const fs = require('fs');
const search = require('./search');
const load = require('./load');

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index');
});

// router.get('/search?q=:id', function(req, res) {
//   res.send('id: ' + req.query.id);
// });


router.use('/search', search);
router.use('/load', load);

  //  response = {
  //     search_item:req.query.search
  //  };
  //  console.log(response);
  //  res.end(JSON.stringify(response));


module.exports = router;
