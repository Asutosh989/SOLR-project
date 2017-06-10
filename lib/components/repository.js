class Repository {

  /**
   * Construct a new repository dao
   *
   * @constructor
   * @param {Client} client  A solr-client instance (DI)
   */
  constructor(client) {
    this.client = client;     // DI through constructor
  }

  /**
   * Adds (indexes) a document
   *
   * @param {Object} doc The document to index
   * @return {Promise} The result of the operation
   */
  add(doc) {
    return new Promise((resolve, reject) => {
      this.client.add(doc, { commit: true }, (err, result) => {
        if (!err) {
          resolve(result);
        } else {
          reject(err);
        }
      });
    });
  }

  /**
   * Delete a document from search index, identified by a field and a value
   *
   * @param {String} field The field used for matching
   * @param {String} value The value to match with
   * @return {Promise} The result of the operation
   */
  delete(field, value) {
    return new Promise((resolve, reject) => {
      this.client.delete(field, value, { commit: true }, (err, result) => {
        if (!err) {
          resolve(result);
        } else {
          reject(err);
        }
      });
    });
  }

  /**
   * Search the query database with a Lucene Query
   *
   * @param {String} query A search query in Lucene Query Syntax
   * @return {Promise} The result of the operation
   */
  search(query) {
    return new Promise((resolve, reject) => {
      this.client.search(query, (err, result) => {
        if (!err) {
          resolve(result);
        } else {
          reject(err);
        }
      });
    });
  }

  /**
   * Creates a new query
   *
   * @return {Query} A new database query
   */
  createQuery() {
    return this.client.createQuery();
  }
  // TODO: Add other methods here

}

/*
 * Creates a new repository with the supplied DI parameters
 *
 * @param client solr-client instance to be supplied by the container
 */
function repositoryFactory(client) {
  return new Repository(client);
}

module.exports = repositoryFactory;

exports = module.exports;
exports['@singleton'] = true;       // the repository is a singleton
exports['@require'] = ['client'];   // the dependencies of this module
