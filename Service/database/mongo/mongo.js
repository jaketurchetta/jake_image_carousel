const mongoose = require('mongoose');
const faker = require('faker');

mongoose.connect('mongodb://localhost/fetcher');

// from Nate
mongoose.connect('mongodb://127.0.0.1:27017/booking', {useNewUrlParser: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("we're connected!")
});
// end

let propertiesSchema = mongoose.Schema({
  id: {type: Number, unique: true},
  images: [{
    id: {type: Number, unique: true},
    url: String,
    description: String
  }]
});

let Properties = mongoose.model('Properties', propertiesSchema);

let imageCount = 1;

let imagesHelper = () => {
  let propertyImages = [];
  let imageObj = {};
  let rand = faker.random.number({
    'min': 5,
    'max': 20
  });
  for (let j = 0; j < rand; j++) {
    if (imageCount === 1001) {
      imageCount = 1;
    }
    let description = faker.lorem.sentence();
    let url = `https://propertypictures.s3.us-east-2.amazonaws.com/property_image${imageCount}.jpg`;
    imageCount++;
  }
}

let save = (images) => {
  let container = [];
  for (let i = 0; i < 10000000; i++) {
    let repo = repos[i];
    let doc = new Properties({
      id: i,
      images: repo.description
    })
    container.push(doc);
    doc.save((err, request) => {
      if (err) {
        console.log('Error saving doc to database: ', err)
      } else {
        console.log('Successful db save!')
      }
    })
  }