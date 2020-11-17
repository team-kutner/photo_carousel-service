const app = require('./app.js');
const request = require('supertest');

it('Get Method should get all photos of that listing', () => {
  return request(app)
    .get('/api/homes/44/photos')
    .then(response => {
      expect(response.status).toBe(200);
      expect(response.body.length).toBe(10);
      expect(response.body[0].ListingId).toBe(44);
      expect(response.body[0].Listing.id).toBe(44);
    })
});
