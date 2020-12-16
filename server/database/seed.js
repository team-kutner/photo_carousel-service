const Tables = require('./config.js');
const faker = require('faker');
const Promise = require('bluebird');
// const Collections = require('./mongoose.config.js');

let fs = require('fs');
// const writeListings = fs.createWriteStream('server/database/Listings.csv');
// writeListings.write('name,location\n', 'utf8');
const writePhotos = fs.createWriteStream('server/database/Photos.csv');
writePhotos.write('url,description,ListingId\n', 'utf8');


//command to insert csv into mongo
// mongoimport --type csv -d homes -c "Listings" --headerline --drop ListingsMongo.csv
//mongoimport --type csv -d homes -c "Photos" --headerline --drop Photos.csv

//command to insert csv into postgres
// \copy "Listings"(name, location)
// from '/Users/henryfradley/Desktop/Work/SDC_HF/Aquabnb-photos/server/database/Listings.csv'
// delimiter ','
// CSV header;
// \COPY <table name> FROM 'location + file_name' DELIMITER ',' CSV HEADER;
//==============
//instancecopy
// \COPY "Listings"(name, location) FROM '/Users/henryfradley/Desktop/Work/SDC_HF/Aquabnb-photos/server/database/Listings.csv' DELIMITER ','  CSV HEADER
// \COPY "Photos"(url, description, "ListingId") FROM '/Users/henryfradley/Desktop/Work/SDC_HF/Aquabnb-photos/server/database/Photos.csv' DELIMITER ','  CSV HEADER
//=============
// \COPY "Listings"(name, location) FROM '/Users/henryfradley/Desktop/Work/SDC_HF/Aquabnb-photos/server/database/Listings.csv' DELIMITER ','  CSV HEADER
// copy "Listings"(name, location)
// from '/Users/henryfradley/Desktop/Work/SDC_HF/Aquabnb-photos/server/database/Listings.csv'
// delimiter ','
// CSV header;
// \copy "Photos"(url, description, "ListingId")
// from '/Users/henryfradley/Desktop/Work/SDC_HF/Aquabnb-photos/server/database/Photos.csv'
// delimiter ','
// CSV header;


// let writeTenMillionListings = function(writer, encoding, callback) {
//   let i = 10000000;
//   let write = function() {
//     let ok = true;
//     do {
//       i -= 1;
//       const name = faker.commerce.productName();
//       const location = faker.address.city();
//       const data = `${name},${location}\n`;
//       if (i === 0) {
//         writer.write(data, encoding, callback);
//       } else {
//         ok = writer.write(data, encoding);
//       }
//     } while (i > 0 && ok);
//     if (i > 0) {
//       writer.once('drain', write);
//     }
//   };
//   write();
// };

// writeTenMillionListings(writeListings, 'utf8', () => {
//   writeListings.end();
//   console.log('completed!!');
// });

// let getRandItem = function (collection) {
//   var randIndex = Math.floor(Math.random() * collection.length);
//   return collection[randIndex];
// };
// let urls = [];
// let getUrls = function (folder, name) {
//   for (var i = 1; i <= 13; i++) {
//     urls.push(`https://aquabnbphotos.s3.us-east-2.amazonaws.com/${folder}/${name}${i}.jpg`)
//   }
//   return urls;
// };
// let exteriorUrls = getUrls('exteriorPhotos', 'exterior');


let writeTenMillionPhotos = function(writer, encoding, callback) {
  let i = 50000000;
  // let i = 100;
  let write = function() {
    let ok = true;
    do {
      i -= 1;
      let index = faker.random.number({min: 0, max: 999});
      const url = `https://d3w3z5xfwxkq5d.cloudfront.net/${index}.jpg`;
      const description = faker.commerce.productDescription();
      const ListingId = faker.random.number({min: 1, max: 10000000});
      const data = `${url},"${description}",${ListingId}\n`;
      if (i === 0) {
        writer.write(data, encoding, callback);
      } else {
        ok = writer.write(data, encoding);
      }
    } while (i > 0 && ok);
    if (i > 0) {
      writer.once('drain', write);
    }
  };
  write();
};

writeTenMillionPhotos(writePhotos, 'utf8', () => {
  writePhotos.end();
  console.log('finished!');
});



//-------------------------------good code underneath-------------------------


// async function createTables() {
//   await Tables.Listing.sync();
//   await Tables.Photo.sync();
// };

// let interiorUrls = getUrls('interiorPhotos', 'interior');
// let exteriorUrls = getUrls('exteriorPhotos', 'exterior');
// let urls = interiorUrls.concat(exteriorUrls);

// createTables()
//   .then(() => {
//     for (var i = 0; i < 100; i++) {
//       Tables.Listing.create({
//         name: faker.commerce.productName(),
//         location: faker.address.city() + ', ' + faker.address.country()
//       })
//         .then(listing => {
//           createRandPhotos()
//             .then(photos => {
//               listing.addPhotos(photos);
//             })
//         })
//         .catch(err => {
//           console.log(err);
//         });
//     }
//   })
//   .catch(err => {
//     console.log(err);
//   });

//--------------------------------------------------duplicate code underneath-----------------

// const Tables = require('./config.js');
// const faker = require('faker');
// const Promise = require('bluebird');

// function getRandItem(collection) {
//   var randIndex = Math.floor(Math.random() * collection.length);
//   return collection[randIndex];
// }

// function getUrls(folder, name) {
//   let urls = [];
//   for (var i = 1; i <= 13; i++) {
//     urls.push(`https://aquabnbphotos.s3.us-east-2.amazonaws.com/${folder}/${name}${i}.jpg`)
//   }
//   return urls;
// }

// function createRandPhotos() {
//   var randUrls = [];
//   for (var i = 1; i <= 10; i++) {
//     randUrls.push(getRandItem(urls));
//   }
//   return Promise.map(randUrls, url => {
//     return Tables.Photo.create({
//       url: url,
//       description: faker.commerce.productDescription(),
//     });
//   });
// };

// async function createTables() {
//   await Tables.Listing.sync();
//   await Tables.Photo.sync();
// };

// let interiorUrls = getUrls('interiorPhotos', 'interior');
// let exteriorUrls = getUrls('exteriorPhotos', 'exterior');
// let urls = interiorUrls.concat(exteriorUrls);

// createTables()
//   .then(() => {
//     for (var i = 0; i < 100; i++) {
//       Tables.Listing.create({
//         name: faker.commerce.productName(),
//         location: faker.address.city() + ', ' + faker.address.country()
//       })
//         .then(listing => {
//           createRandPhotos()
//             .then(photos => {
//               listing.addPhotos(photos);
//             })
//         })
//         .catch(err => {
//           console.log(err);
//         });
//     }
//   })
//   .catch(err => {
//     console.log(err);
//   });


