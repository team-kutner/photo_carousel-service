const {Sequelize, DataTypes} = require('sequelize');
const dev = require('../../dev_config.js');

const sequelize = new Sequelize(dev.db_URI);

(async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})();

const Listing = sequelize.define('Listing', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
    timestamps: false
});

const Photo = sequelize.define('Photo', {
  url: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT,
    defaultValue: 'Photo of Listing'
  }
}, {
    timestamps: false
});

Listing.hasMany(Photo);
Photo.belongsTo(Listing);

module.exports = {
  Listing,
  Photo
}