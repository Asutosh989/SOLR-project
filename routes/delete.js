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
  res.render('delete');
});

router.get('/remove', function (req, res) {
  var field = req.query.field;
  var attr = req.query.attr;
  client.delete(field, attr, function(err,obj){
    if(err){
   	  console.log(err);
    }
    else{
   	  console.log(obj);
    }
  });
  res.render("success");
});

client.commit(); // save changes

module.exports = router;
