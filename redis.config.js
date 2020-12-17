const Promise = require('bluebird');
let redis = Promise.promisifyAll(require('redis'));
const client = redis.createClient({
  port: 6379,
  host: '34.217.149.1',
});

module.exports = client;








