const Tables = require('./config.js');
const faker = require('faker');

function getRandListing() {
  var randIndex = Math.floor(Math.random() * listings.length);
  return listings[randIndex];
}

let listings = [];
for (var i = 0; i < 5; i++) {
  Tables.Listing.create({
    name: faker.commerce.productName()
  })
    .then(listing => {
      listings.push(listing);
    })
    .catch(err => {
      console.log(err);
    });
}

for (var i = 1; i <= 100; i++) {
  Tables.Photo.create({
    url: faker.image.imageUrl(),
    description: faker.commerce.productDescription(),
  })
    .then(photo => {
      return photo.setListing(getRandListing());
    })
    .catch(err => {
      console.log(err);
    });
}

