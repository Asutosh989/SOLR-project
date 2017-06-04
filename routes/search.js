var express = require('express');
const solr = require('solr-client');

var router = express.Router();
const client = solr.createClient({
    host: 'localhost',
    port: 9000,
    core: 'search_add',
    solrVersion: 6.5
});

router.get('/', function (req, res, next) {
   // Prepare output in JSON format
   const q = req.query.q;
   let query = client.createQuery().q(q);
   client.search(query, (err, result) => {
       if (err) {
           next(err);
       } else {
           res.render('results', {docs:result.response.docs});
         }
       });
   });


module.exports = router;
