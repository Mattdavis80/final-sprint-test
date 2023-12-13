const { MongoClient } = require("mongodb");

const atlasUrl = process.env.MONGOURL;

// const pool = new MongoClient(uri);
const pool = new MongoClient(atlasUrl);

module.exports = pool;
