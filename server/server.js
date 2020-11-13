const express = require('express');
const bodyparser = require('body-parser');
const path = require('path');
const db = require('./database/dbHelpers.js');
const app = express();
const port = 8282;

app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(bodyparser.urlencoded({extended: true}));
app.use(bodyparser.json());

app.get('/api/homes/:id/photos', (req, res) => {
  var listingId = req.body.id;
  db.getPhotos(listingId)
    .then(photos => {
      res.json(photos);
      res.end();
    })
    .catch(err => {
      console.log(err);
      res.statusCode(404).end();
    })
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})