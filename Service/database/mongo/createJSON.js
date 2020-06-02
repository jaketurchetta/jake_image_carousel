const faker = require('faker');
const fs = require('fs');
const path = require('path');

const propertiesPath = path.join(__dirname, '/properties.json');
const file = fs.createWriteStream(propertiesPath);

// START TIME
console.log(Date.now());

// FOR EACH PROPERTY, SEED 5-20 IMAGES, POSITION, DESCRIPTIONS

const checkMemoryNative = () => {
  console.log("Memory Usage: ", process.memoryUsage())
}

let imageCount = 1;
let imageId = 0;

createImageArray = () => {
  let rand = faker.random.number({
    'min': 5,
    'max': 20
  });
  let imagesArray = [];
  for (let j = 0; j < rand; j++) {
    if (imageCount === 1001) {
      imageCount = 1;
    }
    let imageObj = {
      _id: imageId,
      url: `https://propertypictures.s3.us-east-2.amazonaws.com/property_image${imageCount}.jpg`,
      description: `${faker.lorem.sentence()}`
    };
    imagesArray.push(imageObj);
    imageCount++;
    imageId++;
  }
  return imagesArray;
}

writeTenMillionTimes = (writer, encoding, callback) => {
  let i = 10000000;
  let container = [];
  const writeFile = () => {
    let ok = true;
    do {
      i -= 1;
      let property = {
        _id: i,
        images: createImageArray()
      }
      let data = JSON.stringify(property);
      if (i === 0) {
        writer.write(data, encoding, callback);
      } else {
        ok = writer.write(data, encoding)
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
    console.log('Properties JSON file written!')
    // END TIME
    console.log(Date.now());
  }
})
