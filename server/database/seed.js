const Tables = require('./config.js');
const faker = require('faker');
const Promise = require('bluebird');

function getRandItem(collection) {
  var randIndex = Math.floor(Math.random() * collection.length);
  return collection[randIndex];
}

function getUrls(folder, name) {
  let urls = [];
  for (var i = 1; i <= 13; i++) {
    urls.push(`https://aquabnbphotos.s3.us-east-2.amazonaws.com/${folder}/${name}${i}.jpg`)
  }
  return urls;
}

function createRandPhotos() {
  var randUrls = [];
  for (var i = 1; i <= 10; i++) {
    randUrls.push(getRandItem(urls));
  }
  return Promise.map(randUrls, url => {
    return Tables.Photo.create({
      url: url,
      description: faker.commerce.productDescription(),
    });
  });
};

async function createTables() {
  await Tables.Listing.sync();
  await Tables.Photo.sync();
};

let interiorUrls = getUrls('interiorPhotos', 'interior');
let exteriorUrls = getUrls('exteriorPhotos', 'exterior');
let urls = interiorUrls.concat(exteriorUrls);

createTables()
  .then(() => {
    for (var i = 0; i < 100; i++) {
      Tables.Listing.create({
        name: faker.commerce.productName(),
        location: faker.address.city() + ', ' + faker.address.country()
      })
        .then(listing => {
          createRandPhotos()
            .then(photos => {
              listing.addPhotos(photos);
            })
        })
        .catch(err => {
          console.log(err);
        });
    }
  })
  .catch(err => {
    console.log(err);
  });

