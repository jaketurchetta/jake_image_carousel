const faker = require('faker');
const fs = require('fs');
const path = require('path');

const imagesPath = path.join(__dirname, '/images.csv');
const file = fs.createWriteStream(imagesPath);

// START TIME
console.log(Date.now());

const imagesHeader = `id,property_id,position,url,description\n`;
file.write(imagesHeader);

// FOR EACH PROPERTY, SEED 5-20 IMAGES, POSITION, DESCRIPTIONS

const checkMemoryNative = () => {
  console.log("Memory Usage: ", process.memoryUsage())
}

let imageCount = 1;
let imageId = 0;

createPropertyImages = (propertyid) => {
  let rand = faker.random.number({
    'min': 5,
    'max': 15
  });
  let data = '';
  for (let j = 0; j < rand; j++) {
    if (imageCount === 1001) {
      imageCount = 1;
    }
    data += `${imageId},${propertyid},${j},'https://propertypictures.s3.us-east-2.amazonaws.com/property_image${imageCount}.jpg','${faker.lorem.sentence()}'\n`;
    imageCount++;
    imageId++;
  }
  return data;
}

writeTenMillionTimes = (writer, encoding, callback) => {
  let i = 10000000;
  const writeFile = () => {
    let ok = true;
    do {
      i -= 1;
      let data = createPropertyImages(i);
      if (i === 0) {
        writer.write(data, encoding, callback);
      } else {
        ok = writer.write(data, encoding)
        // if(!ok) {
        //   checkMemoryNative();
        // }
      }
    } while (i > 0 && ok);
    if (i > 0) {
      writer.once('drain', writeFile)
    }
  }
  writeFile();
}

writeTenMillionTimes(file, 'utf-8', (err, written, string) => {
  if (err) {
    console.log('Error writing: ', err)
  } else {
    file.end();
    console.log('Images CSV written!')
    // END TIME
    console.log(Date.now());
  }
})
