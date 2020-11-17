const Tables = require('./config.js');

const getPhotos = (id) => {
  return Tables.Photo.findAll({
    where: {
      ListingId: id
    },
    include: Tables.Listing
  });
};

module.exports = {
  getPhotos
};