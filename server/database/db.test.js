const {Sequelize, DataTypes} = require('sequelize');
const dev = require('../../dev_config.js');
let sequelize, Listing, Photo;


/* beforeEach(async () => {
  sequelize = new Sequelize(dev.db_URITest);

  Listing = await sequelize.define('Listing', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
      timestamps: false
  });

  Photo =  await sequelize.define('Photo', {
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


  await Listing.sync();
  return Photo.sync();
});

afterEach(async (done) => {
  await sequelize.drop();
  return sequelize.close(done);
}); */

test('asdf', () => {
  return new Promise((resolve, reject) => {
    resolve('hi');
  })
    .then(result => {
      expect(result).toBe('hi');
    })
})

/* test('Adds Listing to the DB', (done) => {
  return Listing.create({
    name: 'Samuel Adams'
  })
    .then(listing => {
      done();
      expect(listing.dataValues.name).toBe('Samuel Adams');
    })
}) */

