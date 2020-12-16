
Promise.promisifyAll(require('redis'));

client = redis.createClient({
  port: 6379,
  host: '34.213.186.178',
});



