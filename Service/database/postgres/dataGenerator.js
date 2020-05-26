const pool = require('../index');
const faker = require('faker');
const fs = require('graceful-fs');
const path = require('path');
const Promise = require('bluebird');

const asyncWriteFile = Promise.promisify(fs.writeFile);
const asyncAppendFile = Promise.promisify(fs.appendFile);

// START TIME
console.log(Date.now())

// SEED 1M PROPERTIES
let propertiesFile = '';
for (let i = 0; i < 10000000; i++) {
  propertiesFile +=  `${i}\n`;
}

// WRITE properties.txt FILE
const propertiesPath = path.join(__dirname, '/properties.txt');
asyncWriteFile(propertiesPath, propertiesFile, (err) => {
  if (err) {
    console.log('Error writing seed file :(', err);
  } else {
    console.log('Properties seed file created successfully!');
  }
}).then(console.log('Testing promise wait'));

// FOR EACH PROPERTY, SEED 5-20 IMAGES, POSITION, DESCRIPTIONS

let imageCount = 1;

// 1 of 20

let imageFile1 = '';

for (let i = 0; i < 500000; i++) {
  let rand = faker.random.number({
    'min': 5,
    'max': 20
  });
  for (let j = 0; j < rand; j++) {
    if (imageCount === 1001) {
      imageCount = 1;
    }
    let description = faker.lorem.sentence();
    let data = `${i},${j},'https://propertypictures.s3.us-east-2.amazonaws.com/property_image${imageCount}.jpg','${description}'`;
    imageFile1 += `${data}\n`;
    imageCount++;
  }
}

console.log('500,000 images written to file.');

// 2 of 20

let imageFile2 = '';

for (let i = 500000; i < 1000000; i++) {
  let rand = faker.random.number({
    'min': 5,
    'max': 20
  });
  for (let j = 0; j < rand; j++) {
    if (imageCount === 1001) {
      imageCount = 1;
    }
    let description = faker.lorem.sentence();
    let data = `${i},${j},'https://propertypictures.s3.us-east-2.amazonaws.com/property_image${imageCount}.jpg','${description}'`;
    imageFile2 += `${data}\n`;
    imageCount++;
  }
}

console.log('1,000,000 images written to file.');

// 3 of 20

let imageFile3 = '';

for (let i = 1000000; i < 1500000; i++) {
  let rand = faker.random.number({
    'min': 5,
    'max': 20
  });
  for (let j = 0; j < rand; j++) {
    if (imageCount === 1001) {
      imageCount = 1;
    }
    let description = faker.lorem.sentence();
    let data = `${i},${j},'https://propertypictures.s3.us-east-2.amazonaws.com/property_image${imageCount}.jpg','${description}'`;
    imageFile3 += `${data}\n`;
    imageCount++;
  }
}

console.log('1,500,000 images written to file.');

// 4 of 20

let imageFile4 = '';

for (let i = 1500000; i < 2000000; i++) {
  let rand = faker.random.number({
    'min': 5,
    'max': 20
  });
  for (let j = 0; j < rand; j++) {
    if (imageCount === 1001) {
      imageCount = 1;
    }
    let description = faker.lorem.sentence();
    let data = `${i},${j},'https://propertypictures.s3.us-east-2.amazonaws.com/property_image${imageCount}.jpg','${description}'`;
    imageFile4 += `${data}\n`;
    imageCount++;
  }
}

console.log('2,000,000 images written to file.');

// 5 of 20

let imageFile5 = '';

for (let i = 2000000; i < 2500000; i++) {
  let rand = faker.random.number({
    'min': 5,
    'max': 20
  });
  for (let j = 0; j < rand; j++) {
    if (imageCount === 1001) {
      imageCount = 1;
    }
    let description = faker.lorem.sentence();
    let data = `${i},${j},'https://propertypictures.s3.us-east-2.amazonaws.com/property_image${imageCount}.jpg','${description}'`;
    imageFile5 += `${data}\n`;
    imageCount++;
  }
}

console.log('2,500,000 images written to file.');

// 6 of 20

let imageFile6 = '';

for (let i = 2500000; i < 3000000; i++) {
  let rand = faker.random.number({
    'min': 5,
    'max': 20
  });
  for (let j = 0; j < rand; j++) {
    if (imageCount === 1001) {
      imageCount = 1;
    }
    let description = faker.lorem.sentence();
    let data = `${i},${j},'https://propertypictures.s3.us-east-2.amazonaws.com/property_image${imageCount}.jpg','${description}'`;
    imageFile6 += `${data}\n`;
    imageCount++;
  }
}

console.log('3,000,000 images written to file.');

// 7 of 20

let imageFile7 = '';

for (let i = 3000000; i < 3500000; i++) {
  let rand = faker.random.number({
    'min': 5,
    'max': 20
  });
  for (let j = 0; j < rand; j++) {
    if (imageCount === 1001) {
      imageCount = 1;
    }
    let description = faker.lorem.sentence();
    let data = `${i},${j},'https://propertypictures.s3.us-east-2.amazonaws.com/property_image${imageCount}.jpg','${description}'`;
    imageFile7 += `${data}\n`;
    imageCount++;
  }
}

console.log('3,500,000 images written to file.');

// 8 of 20

let imageFile8 = '';

for (let i = 3500000; i < 4000000; i++) {
  let rand = faker.random.number({
    'min': 5,
    'max': 20
  });
  for (let j = 0; j < rand; j++) {
    if (imageCount === 1001) {
      imageCount = 1;
    }
    let description = faker.lorem.sentence();
    let data = `${i},${j},'https://propertypictures.s3.us-east-2.amazonaws.com/property_image${imageCount}.jpg','${description}'`;
    imageFile8 += `${data}\n`;
    imageCount++;
  }
}

console.log('4,000,000 images written to file.');

// 9 of 20

let imageFile9 = '';

for (let i = 4000000; i < 4500000; i++) {
  let rand = faker.random.number({
    'min': 5,
    'max': 20
  });
  for (let j = 0; j < rand; j++) {
    if (imageCount === 1001) {
      imageCount = 1;
    }
    let description = faker.lorem.sentence();
    let data = `${i},${j},'https://propertypictures.s3.us-east-2.amazonaws.com/property_image${imageCount}.jpg','${description}'`;
    imageFile9 += `${data}\n`;
    imageCount++;
  }
}

console.log('4,500,000 images written to file.');

// 10 of 20

let imageFile10 = '';

for (let i = 4500000; i < 5000000; i++) {
  let rand = faker.random.number({
    'min': 5,
    'max': 20
  });
  for (let j = 0; j < rand; j++) {
    if (imageCount === 1001) {
      imageCount = 1;
    }
    let description = faker.lorem.sentence();
    let data = `${i},${j},'https://propertypictures.s3.us-east-2.amazonaws.com/property_image${imageCount}.jpg','${description}'`;
    imageFile10 += `${data}\n`;
    imageCount++;
  }
}

console.log('5,000,000 images written to file.');

// 11 of 20

let imageFile11 = '';

for (let i = 5000000; i < 5500000; i++) {
  let rand = faker.random.number({
    'min': 5,
    'max': 20
  });
  for (let j = 0; j < rand; j++) {
    if (imageCount === 1001) {
      imageCount = 1;
    }
    let description = faker.lorem.sentence();
    let data = `${i},${j},'https://propertypictures.s3.us-east-2.amazonaws.com/property_image${imageCount}.jpg','${description}'`;
    imageFile11 += `${data}\n`;
    imageCount++;
  }
}

console.log('5,500,000 images written to file.');

// 12 of 20

let imageFile12 = '';

for (let i = 5500000; i < 6000000; i++) {
  let rand = faker.random.number({
    'min': 5,
    'max': 20
  });
  for (let j = 0; j < rand; j++) {
    if (imageCount === 1001) {
      imageCount = 1;
    }
    let description = faker.lorem.sentence();
    let data = `${i},${j},'https://propertypictures.s3.us-east-2.amazonaws.com/property_image${imageCount}.jpg','${description}'`;
    imageFile12 += `${data}\n`;
    imageCount++;
  }
}

console.log('6,000,000 images written to file.');

// 13 of 20

let imageFile13 = '';

for (let i = 6000000; i < 6500000; i++) {
  let rand = faker.random.number({
    'min': 5,
    'max': 20
  });
  for (let j = 0; j < rand; j++) {
    if (imageCount === 1001) {
      imageCount = 1;
    }
    let description = faker.lorem.sentence();
    let data = `${i},${j},'https://propertypictures.s3.us-east-2.amazonaws.com/property_image${imageCount}.jpg','${description}'`;
    imageFile13 += `${data}\n`;
    imageCount++;
  }
}

console.log('6,500,000 images written to file.');

// 14 of 20

let imageFile14 = '';

for (let i = 6500000; i < 7000000; i++) {
  let rand = faker.random.number({
    'min': 5,
    'max': 20
  });
  for (let j = 0; j < rand; j++) {
    if (imageCount === 1001) {
      imageCount = 1;
    }
    let description = faker.lorem.sentence();
    let data = `${i},${j},'https://propertypictures.s3.us-east-2.amazonaws.com/property_image${imageCount}.jpg','${description}'`;
    imageFile14 += `${data}\n`;
    imageCount++;
  }
}

console.log('7,000,000 images written to file.');

// 15 of 20

let imageFile15 = '';

for (let i = 7000000; i < 7500000; i++) {
  let rand = faker.random.number({
    'min': 5,
    'max': 20
  });
  for (let j = 0; j < rand; j++) {
    if (imageCount === 1001) {
      imageCount = 1;
    }
    let description = faker.lorem.sentence();
    let data = `${i},${j},'https://propertypictures.s3.us-east-2.amazonaws.com/property_image${imageCount}.jpg','${description}'`;
    imageFile15 += `${data}\n`;
    imageCount++;
  }
}

console.log('7,500,000 images written to file.');

// 16 of 20

let imageFile16 = '';

for (let i = 7500000; i < 8000000; i++) {
  let rand = faker.random.number({
    'min': 5,
    'max': 20
  });
  for (let j = 0; j < rand; j++) {
    if (imageCount === 1001) {
      imageCount = 1;
    }
    let description = faker.lorem.sentence();
    let data = `${i},${j},'https://propertypictures.s3.us-east-2.amazonaws.com/property_image${imageCount}.jpg','${description}'`;
    imageFile16 += `${data}\n`;
    imageCount++;
  }
}

console.log('8,000,000 images written to file.');

// 17 of 20

let imageFile17 = '';

for (let i = 8000000; i < 8500000; i++) {
  let rand = faker.random.number({
    'min': 5,
    'max': 20
  });
  for (let j = 0; j < rand; j++) {
    if (imageCount === 1001) {
      imageCount = 1;
    }
    let description = faker.lorem.sentence();
    let data = `${i},${j},'https://propertypictures.s3.us-east-2.amazonaws.com/property_image${imageCount}.jpg','${description}'`;
    imageFile17 += `${data}\n`;
    imageCount++;
  }
}

console.log('8,500,000 images written to file.');

// 18 of 20

let imageFile18 = '';

for (let i = 8500000; i < 9000000; i++) {
  let rand = faker.random.number({
    'min': 5,
    'max': 20
  });
  for (let j = 0; j < rand; j++) {
    if (imageCount === 1001) {
      imageCount = 1;
    }
    let description = faker.lorem.sentence();
    let data = `${i},${j},'https://propertypictures.s3.us-east-2.amazonaws.com/property_image${imageCount}.jpg','${description}'`;
    imageFile18 += `${data}\n`;
    imageCount++;
  }
}

console.log('9,000,000 images written to file.');

// 19 of 20

let imageFile19 = '';

for (let i = 9000000; i < 9500000; i++) {
  let rand = faker.random.number({
    'min': 5,
    'max': 20
  });
  for (let j = 0; j < rand; j++) {
    if (imageCount === 1001) {
      imageCount = 1;
    }
    let description = faker.lorem.sentence();
    let data = `${i},${j},'https://propertypictures.s3.us-east-2.amazonaws.com/property_image${imageCount}.jpg','${description}'`;
    imageFile19 += `${data}\n`;
    imageCount++;
  }
}

console.log('9,500,000 images written to file.');

// 20 of 20

let imageFile20 = '';

for (let i = 9500000; i < 10000000; i++) {
  let rand = faker.random.number({
    'min': 5,
    'max': 20
  });
  for (let j = 0; j < rand; j++) {
    if (imageCount === 1001) {
      imageCount = 1;
    }
    let description = faker.lorem.sentence();
    let data = `${i},${j},'https://propertypictures.s3.us-east-2.amazonaws.com/property_image${imageCount}.jpg','${description}'`;
    imageFile20 += `${data}\n`;
    imageCount++;
  }
}

console.log('10,000,000 images written to file.');

// // ADD TABLE CONSTRAINTS
// imageFile += 'ALTER TABLE images ADD FOREIGN KEY (property_id) REFERENCES properties(id);'

// ASYNC WRITE / APPEND

const imagePath = path.join(__dirname, '/images.txt');

asyncWriteFile(imagePath, imageFile1, (err) => {
  if (err) {
    console.log('Error writing image seed file 1 :(', err);
  } else {
    console.log('Image seed file 1 written successfully!');
  }
}).then(asyncAppendFile(imagePath, imageFile2, (err) => {
  if (err) {
    console.log('Error writing image seed file 2 :(', err);
  } else {
    console.log('Image seed file 2 written successfully!');
  }
})).then(asyncAppendFile(imagePath, imageFile3, (err) => {
  if (err) {
    console.log('Error writing image seed file 3 :(', err);
  } else {
    console.log('Image seed file 3 written successfully!');
  }
})).then(asyncAppendFile(imagePath, imageFile4, (err) => {
  if (err) {
    console.log('Error writing image seed file 4 :(', err);
  } else {
    console.log('Image seed file 4 written successfully!');
  }
})).then(asyncAppendFile(imagePath, imageFile5, (err) => {
  if (err) {
    console.log('Error writing image seed file 5 :(', err);
  } else {
    console.log('Image seed file 5 written successfully!');
  }
})).then(asyncAppendFile(imagePath, imageFile6, (err) => {
  if (err) {
    console.log('Error writing image seed file 6 :(', err);
  } else {
    console.log('Image seed file 6 written successfully!');
  }
})).then(asyncAppendFile(imagePath, imageFile7, (err) => {
  if (err) {
    console.log('Error writing image seed file 7 :(', err);
  } else {
    console.log('Image seed file 7 written successfully!');
  }
})).then(asyncAppendFile(imagePath, imageFile8, (err) => {
  if (err) {
    console.log('Error writing image seed file 8 :(', err);
  } else {
    console.log('Image seed file 8 written successfully!');
  }
})).then(asyncAppendFile(imagePath, imageFile9, (err) => {
  if (err) {
    console.log('Error writing image seed file 9 :(', err);
  } else {
    console.log('Image seed file 9 written successfully!');
  }
})).then(asyncAppendFile(imagePath, imageFile10, (err) => {
  if (err) {
    console.log('Error writing image seed file 10 :(', err);
  } else {
    console.log('Image seed file 10 written successfully!');
  }
})).then(asyncAppendFile(imagePath, imageFile11, (err) => {
  if (err) {
    console.log('Error writing image seed file 11 :(', err);
  } else {
    console.log('Image seed file 11 written successfully!');
  }
})).then(asyncAppendFile(imagePath, imageFile12, (err) => {
  if (err) {
    console.log('Error writing image seed file 12 :(', err);
  } else {
    console.log('Image seed file 12 written successfully!');
  }
})).then(asyncAppendFile(imagePath, imageFile13, (err) => {
  if (err) {
    console.log('Error writing image seed file 13 :(', err);
  } else {
    console.log('Image seed file 13 written successfully!');
  }
})).then(asyncAppendFile(imagePath, imageFile14, (err) => {
  if (err) {
    console.log('Error writing image seed file 14 :(', err);
  } else {
    console.log('Image seed file 14 written successfully!');
  }
})).then(asyncAppendFile(imagePath, imageFile15, (err) => {
  if (err) {
    console.log('Error writing image seed file 15 :(', err);
  } else {
    console.log('Image seed file 15 written successfully!');
  }
})).then(asyncAppendFile(imagePath, imageFile16, (err) => {
  if (err) {
    console.log('Error writing image seed file 16 :(', err);
  } else {
    console.log('Image seed file 16 written successfully!');
  }
})).then(asyncAppendFile(imagePath, imageFile17, (err) => {
  if (err) {
    console.log('Error writing image seed file 17 :(', err);
  } else {
    console.log('Image seed file 17 written successfully!');
  }
})).then(asyncAppendFile(imagePath, imageFile18, (err) => {
  if (err) {
    console.log('Error writing image seed file 18 :(', err);
  } else {
    console.log('Image seed file 18 written successfully!');
  }
})).then(asyncAppendFile(imagePath, imageFile19, (err) => {
  if (err) {
    console.log('Error writing image seed file 19 :(', err);
  } else {
    console.log('Image seed file 19 written successfully!');
  }
})).then(asyncAppendFile(imagePath, imageFile20, (err) => {
  if (err) {
    console.log('Error writing image seed file 20 :(', err);
  } else {
    console.log('Image seed file 20 written successfully!');
  }
}))

// END TIME
console.log(Date.now())
