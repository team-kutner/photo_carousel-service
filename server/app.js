const newrelic = require('newrelic');
const express = require('express');
const bodyparser = require('body-parser');
const path = require('path');
const db = require('./database/dbHelpers.js');
const app = express();
const morgan = require('morgan');
var compression = require('compression');
app.use(compression());
app.use(morgan('dev'));

app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(bodyparser.urlencoded({extended: true}));
app.use(bodyparser.json());

app.get('/api/homes/:id/photos', (req, res) => {
  var listingId = req.params.id;
  db.getPhotos(listingId)
    .then(photos => {
      res.json(photos);
      res.end();
    })
    .catch(err => {
      console.log(err);
      res.status(404);
      res.end();
    });
});

//app.get('/loaderio-37768dc1001d74ad332634e52082d358/', (req, res) => {
  //res.sendFile(__dirname, '/loaderio-37768dc1001d74ad332634e52082d358.txt');
  //res.end();
//});:

//post
// server/database/seed.js


app.post('/api/homes/:id/listings', (req, res) => {
  let name = req.body.name;
  let location = req.body.name;
  return db.addListing(name, location)
    .then(() => {
      res.status(200);
      res.end();
    })
    .catch((err) => {
      res.send(400);
    });
});

app.post('/api/homes/:id/photos', (req, res) => {
  let url = req.body.url;
  let description = req.body.description;
  return db.addPhoto(url, description)
    .then(() => {
      res.status(200);
      res.end();
    })
    .catch((err) => {
      res.send(400);
    });
});


//update

app.put('/api/homes/:id/listings', (req, res) => {
  let id = req.body.id;
  let name = req.body.name;
  let location = req.body.location;
  return db.updateListing(id, name, location)
    .then(() => {
      res.status(200);
      res.end();
    })
    .catch((err) => {
      res.send(err);
      res.send(400);
    });
});

app.put('/api/homes/:id/photos', (req, res) => {
  let id = req.body.id;
  let url = req.body.url;
  let description = req.body.description;
  return db.updatePhoto(id, url, description)
    .then(() => {
      res.status(200);
      res.end();
    })
    .catch((err) => {
      // res.send(400);
      res.send(err);
    });
});

//delete

app.delete('/api/homes/:id/listings', (req, res) => {
  let id = req.body.id;
  return db.deleteListing(id)
    .then(() => {
      res.status(200);
      res.end();
    })
    .catch((err) => {
      // res.send(400);
      res.send(err);
    });
});

app.delete('/api/homes/:id/photos', (req, res) => {
  let id = req.body.id;
  return db.deletePhoto(id)
    .then(() => {
      res.status(200);
      res.end();
    })
    .catch((err) => {
      // res.send(400);
      res.send(err);
    });
});


module.exports = app;