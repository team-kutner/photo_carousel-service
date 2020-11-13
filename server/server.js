const app = require('./app.js');
const port = 8282;

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});