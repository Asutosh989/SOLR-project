class Repository {

  /*
   * Construct a new repository dao
   *
   * @param client solr-client instance (DI)
   */
  constructor(client) {  // DI through constructor
    this.client = client;
  }

  /*
   * Adds (indexes) a document
   *
   * @param doc document to index
   * @return promise for the operation
   */
  add(doc) {
    return this.client.add(doc, { commit: true });
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
