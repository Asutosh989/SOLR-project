const solr = require('solr-client');

/*
 * Initializes and returns a new solr-client on demand
 *
 * @return a new solr client
 */
function clientFactory() {
  // we use promisify in order to encapsulate node-style callbacks
  // into more cleaner JS Promises

  return solr.createClient({
    host: process.env.SOLR_HOST,
    port: process.env.SOLR_PORT,
    core: process.env.SOLR_CORE,
    solrVersion: 6.5,
  });
}

module.exports = clientFactory;

/* electrolyte DI metadata */
exports = module.exports;
exports['@singleton'] = true; // singleton, as we have a single solr connection per application
