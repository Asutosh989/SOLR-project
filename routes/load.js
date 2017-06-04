var express = require('express');
const solr = require('solr-client');

var router = express.Router();

const client = solr.createClient({
    host: 'localhost',
    port: 9000,
    core: 'search_add',
    solrVersion: 6.5
});

router.get('/', function (req, res) {
  res.render('load');
});
// Add a new document
router.get('/add', function (req, res, next) {
  var first = req.query.first;
  var last = req.query.last;
  var email = req.query.email;
  client.add({ fname : first, lname : last, email : email},function(err,obj){
    if(err){
      next(err);
    }
    else{
      console.log('Solr response:', obj);
    }
  });
});


client.commit(); // save changes

module.exports = router;
