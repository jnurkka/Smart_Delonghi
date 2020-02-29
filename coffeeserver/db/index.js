const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

const url = 'mongodb://localhost:27017';

const dbName = 'coffee';

const db = null;

MongoClient.connect(url, function(err, client) {
  assert.equal(null, err);
  console.log("Connected successfully to database");

  const db = client.db(dbName);
});

module.exports = db;