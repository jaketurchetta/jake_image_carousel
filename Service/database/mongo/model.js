const Property = require('./index.js')
const Counter = require('./index.js')
const faker = require('faker')
const Promise = require('bluebird')
const Q = require('Q')

function getNextSequenceValue(sequenceName) {
  let deferred = Q.defer();
  let sequenceDocument = Counter.findOneAndUpdate(
      { _id: sequenceName },
      { $inc: { sequence_value: 1 } },
      { new: true,
        useFindAndModify: false },
      (err, doc) => {
        if (err) {
          deferred.reject(err.name + ': ' + err.message);
        }
        if (doc) {
          deferred.resolve(doc.sequence_value)
        }
      })
  return deferred.promise;
}

let imageCount = 0;

module.exports = {

  ///// GET /////

  // Retrieve images for a property listing
  getImages: (id, callback) => {
    Property.findOne({ _id: id }, (err, results) => {
      if (err) {
        console.log(err);
      } else {
        console.log(results);
        callback(null, results);
      }
    })
  },

  ///// POST /////

  // Add an entire property listing
  addProperty: (callback) => {
    getNextSequenceValue("propertyid")
      .then(response => {
        let emptyArray = [];
        Property.create({ _id: response, images: emptyArray }, (err, results) => {
          if (err) {
            console.log(err);
          } else {
            callback(null, results);
          }
        })
      })
  },

  // Add an image to a listing
  addPropertyImage: (propertyid, callback) => {
    getNextSequenceValue("imageid")
    .then(response => {
      let image = {
        _id: response,
        url: `https://propertypictures.s3.us-east-2.amazonaws.com/property_image${imageCount}.jpg`,
        description: `${faker.lorem.sentence()}`
      }
      Property.findOne({_id: propertyid}, (err, results) => {
        if (err) {
          console.log(err);
        } else {
          console.log(results.images);
          results.images.push(image);
          results.save()
          callback(null, results);
        }
      })
    })
  },

  // Add images to a property listing
  addPropertyImages: (propertyid, callback) => {
    Property.findOne({_id: propertyid}, (err, results) => {
      if (err) {
        console.log(err)
      } else {
        let len = results.images.length;
        let available = 20 - len;
        if (len > 0) {
          let rand = faker.random.number({
            'min': 0,
            'max': available
          });
        } else {
          return [];
        }
        let imagesArray = [];
        for (let j = 0; j < rand; j++) {
          if (imageCount === 1001) {
            imageCount = 1;
          }
          let imageObj = {
            _id: getNextSequenceValue("imageid"),
            url: `https://propertypictures.s3.us-east-2.amazonaws.com/property_image${imageCount}.jpg`,
            description: `${faker.lorem.sentence()}`
          }
          imagesArray.push(imageObj);
          imageCount++;
          imageId++;
        }
        results.images.concat(imagesArray);
        results.save()
      }
    })
  },

  ///// DELETE /////

  // Delete entire property
  deleteProperty: (id, callback) => {
    Property.deleteOne({ _id: id }, (err, results) => {
      if (err) {
        console.log(err);
      } else {
        console.log(results);
        callback(null, results);
      }
    });
  },

  // Delete one image from a listing
  deletePropertyImage: (imageId, callback) => {
    Property.findOne({ "images._id": imageId }, (err, results) => {
      if (err) {
        console.log(err);
      } else {
        for (let i = 0; i < results.images; i++) {
          if (results.images[i]._id === imageId) {
            results.images.splice(i, 1);
          }
        }
        results.save();
        callback(null, results);
      }
    });
  },

  // Delete all images for a listing
  deletePropertyImages: (id, callback) => {
    Property.findOne({ _id: id }, (err, results) => {
      if (err) {
        console.log(err);
      } else {
        results.images = [];
        results.save();
        callback(null, results);
      }
    });
  },

  ///// PATCH /////

  // Update image, image url, or image description
  updateImage: (image, imageId, callback) => {
    const { _id, url, description } = image;
    Property.findOne({ "image._id": imageId }, image, (err, results) => {
      if (err) {
        console.log(err);
      } else {
        for (let i = 0; i < results.images; i++) {
          if (results.images[i]._id === imageId) {
            results.images[i] = image;
          }
        }
        results.save();
        callback(null, results);
      }
    });
  },
};
