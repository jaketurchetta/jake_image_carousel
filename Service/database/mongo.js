const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

let propertiesSchema = mongoose.Schema({
  id: {type: Number, unique: true},
  images: [{
    id: {type: Number, unique: true},
    url: String,
    description: String
  }]
});

let Images = mongoose.model('Properties', propertiesSchema);