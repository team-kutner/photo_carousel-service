const Promise = require('bluebird');
Promise.promisifyAll(require('redis'));
const client = redis.createClient({
  port: 6379,
  host: '34.213.186.178',
});

module.exports = client;








