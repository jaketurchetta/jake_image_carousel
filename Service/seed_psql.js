const pool = require('./database/index');
const faker = require('faker');

let imageCount = 1;
for (let i = 0; i < 1000; i++) {
  // SEED 1M PROPERTIES
  pool.query(`INSERT INTO properties (id) VALUES (${i})`)
  // FOR EACH PROPERTY, SEED 5-20 IMAGES, POSITION, DESCRIPTIONS
  let rand = Math.floor(Math.random() * (20 - 5) + 5);
  for (let j = 0; j < rand; j++) {
    if (imageCount === 1001) {
      imageCount = 1;
    }
    pool.query(`INSERT INTO images (property_id, position, url, description) VALUES (${i}, ${j},'https://propertypictures.s3.us-east-2.amazonaws.com/property_image${imageCount}.jpg', '${faker.lorem.sentence()}')`)
    imageCount++;
  }
}
