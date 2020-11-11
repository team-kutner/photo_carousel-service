const express = require('express');
const bodyparser = require('body-parser');
const path = require('path');
const app = express();
const port = 8282;

app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(bodyparser.urlencoded({extended: true}));
app.use(bodyparser.json());



app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})