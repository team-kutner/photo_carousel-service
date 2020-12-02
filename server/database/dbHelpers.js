const Tables = require('./config.js');
const Promise = require('bluebird');

const getPhotos = (id) => {
  return Tables.Photo.findAll({
    where: {
      ListingId: id
    },
    include: Tables.Listing
  });
};

const addListing = (name, location) => {
  return Tables.Listing.create({
    name: name,
    location: location
  });
};

const addPhoto = (url, description) => {
  return Tables.Photo.create({
    url: url,
    description: description
  });
};


//need to make PUT/update

const updateListing = (id, name, location) => {
  return Tables.Listing.update({
    name: name,
    location: location
  },
  {where: {id: id}});
};



const updatePhoto = (id, url, description) => {
  return Tables.Photo.update({
    url: url,
    description: description
  },
  {where: {id: id}});
};



//need to make DELETE

const deleteListing = (id) => {
  return Tables.Listing.destroy({
    where: {id: id}
  });
};

const deletePhoto = (id) => {
  return Tables.Photo.destroy({
    where: {id: id}
  });
};


module.exports = {
  getPhotos,
  addPhoto,
  addListing,
  updateListing,
  updatePhoto,
  deleteListing,
  deletePhoto
};