// const faker = require('faker');
// const axios = require('axios');
// const path = require('path');
// const fs = require('fs');

// const images = [];
// for (let i = 0; i < 1000; i++) {
//   images.push(faker.image.nature());
// }

// for (let i = 0; i < images.length; i++) {
//   const imagePath = path.join(__dirname, '../images', `${i}.jpg`);
//   axios({
//     method: 'get',
//     url: images[i],
//     responseType: 'stream',
//   })
//     .then((response) => {
//       response.data.pipe(fs.createWriteStream(imagePath));
//     });
// }