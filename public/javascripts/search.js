/* eslint-disable no-console */
const readline = require('readline');
const solr = require('solr-client');

const client = solr.createClient({
    host: 'localhost',
    port: 8983,
    core: 'lecturenotes_v1',
    solrVersion: 6.5
});
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
console.log('Enter search term:');

rl.on('line', (line) => {
    let query = client.createQuery().q(line);
    client.search(query, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            console.log(`Hits: ${result.response.numFound}`);
            result.response.docs.forEach((doc) => {
                console.log(doc);
            });
        }
    });
});
