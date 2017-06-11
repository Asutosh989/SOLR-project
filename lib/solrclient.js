const solr = require('solr-client');

module.exports = solr.createClient({
    host: process.env.SOLR_HOST,
    port: process.env.SOLR_PORT,
    core: process.env.SOLR_CORE,
    solrVersion: 6.5
});
