const solr = require('solr-client');
const promisify = require('promisify-node');

/*
 * Initializes and returns a new solr-client on demand
 *
 * @return a new solr client
 */
function clientFactory() {
  // we use promisify in order to encapsulate node-style callbacks
  // into more cleaner JS Promises

  return promisify(solr.createClient({
    host: process.env.SOLR_HOST,
    port: process.env.SOLR_PORT,
    core: 'search_add',
    solrVersion: 6.5,
  }));
}

module.exports = clientFactory;

/* electrolyte DI metadata */
exports = module.exports;
exports['@singleton'] = true; // singleton, as we have a single solr connection per application
