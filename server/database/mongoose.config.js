const mongoose = require('mongoose');
const dev = require('../../dev_config.js');

// mongoose.connect('mongodb://localhost:3001/api/homes');

// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'error with connection!'));
// db.once('open', function() {
//   console.log('mongodb connected!');
// });


const Listing = new mongoose.Schema({ name: 'string', location: 'string' });

const Photo = new mongoose.Schema({ url: 'string', description: 'text' });


module.exports = {
  Listing,
  Photo
};