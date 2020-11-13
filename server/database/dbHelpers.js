const Tables = require('./config.js');

const getPhotos = (id) => {
  return Tables.Photo.findAll({
    where: {
      ListingId: id
    }
  });
};

module.exports = {
  getPhotos
}