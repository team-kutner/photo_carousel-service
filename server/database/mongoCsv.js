const fs = require('fs');
const mongodb = require('mongodb').MongoClient;
const fastcsv = require('fast-csv');

let url = 'mongodb://localhost:27017/';
let stream = fs.createReadStream('server/database/test.csv');
let csvData = [];
let csvStream = fastcsv;

JSON.parse()
  .on('data', function(data) {
    csvData.push({
      name: data[0],
      location: data[1],
    });

  })
  .on('end', function() {
    csvData.shift();
  });

mongodb.connect(
  url,
  {useNewUrlParser: true, useUnifiedTopology: true},
  (err, client) => {
    if (err) {
      throw err;
    }

    client
      .db('homes')
      .collection('Listings')
      .insertMany(csvData, (err, res) => {
        if (err) {
          throw err;
        }

        console.log(`inserted ${res.insertedCount} rows`);
        client.close();
      });
  });


stream.pipe(csvStream);





