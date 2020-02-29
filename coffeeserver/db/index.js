const assert = require('assert');

const { MongoClient } = require('mongodb');

const url = 'mongodb://localhost:27017';

const dbName = 'coffee';

let db = null;

MongoClient.connect(
  url,
  (err, client) => {
    assert.equal(null, err);
    console.log('Connected successfully to database');

    db = client.db(dbName);
  },
);

module.exports = db;
