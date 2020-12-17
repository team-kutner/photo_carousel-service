const Promise = require('bluebird');
let redis = Promise.promisifyAll(require('redis'));
const client = redis.createClient({
  port: 6379,
  host: '34.219.200.99',
});

module.exports = client;








