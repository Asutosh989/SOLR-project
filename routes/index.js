const express = require('express');

const search = require('./search');
const load = require('./load');
const del = require('./delete');

const router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  res.render('index');
});

// router.get('/search?q=:id', function(req, res) {
//   res.send('id: ' + req.query.id);
// });


router.use('/search', search);
router.use('/load', load);
router.use('/delete', del);
  //  response = {
  //     search_item:req.query.search
  //  };
  //  console.log(response);
  //  res.end(JSON.stringify(response));


module.exports = router;
