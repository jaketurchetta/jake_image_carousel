const Schema = require('./index.js')
const faker = require('faker')
const Promise = require('bluebird')
const Q = require('Q')

function getNextSequenceValue(sequenceName) {
  let deferred = Q.defer();
  let sequenceDocument = Schema.Counter.findOneAndUpdate(
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

const getRandomNumber = (available) => {
  let rand = faker.random.number({
    'min': 0,
    'max': available
  });
  return rand;
}

const getRandomNumberPromise = (available) => {
  return new Promise((resolve, reject) => {
    getRandomNumber(available, (err, rand) => {
      if (err) reject(err)
      else resolve(rand);
    })
  })
}

let imageCount = 1;

module.exports = {

  ///// GET /////

  // Retrieve images for a property listing
  getImages: (propertyid, callback) => {
    Schema.Property.findOne({ _id: propertyid }, (err, results) => {
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
        Schema.Property.create({ _id: response, images: emptyArray }, (err, results) => {
          if (err) {
            console.log(err);
          } else {
            callback(null, results);
          }
        })
      })
  },

  // Add images to a property listing
  addPropertyImages: (propertyid, callback) => {
    Schema.Property.findOne({ _id: propertyid }, (err, results) => {
      if (err) {
        console.log(err)
      } else {
        console.log(results)
      //   let len = results.images.length;
      //   let available = 20 - len;
      //   let imagesArray = [];
      //   if (available < 1) {
      //     return
      //   } else {
      //     console.log(available)
      //     getRandomNumberPromise(available)
      //       .then(response => {
      //         for (let j = 0; j < response; j++) {
      //           getNextSequenceValue("imageid")
      //             .then(response => {
      //               if (imageCount === 1001) {
      //                 imageCount = 1;
      //               }
      //               let imageObj = {
      //                 _id: response,
      //                 url: `https://propertypictures.s3.us-east-2.amazonaws.com/property_image${imageCount}.jpg`,
      //                 description: `${faker.lorem.sentence()}`
      //               }
      //               console.log(imageObj);
      //               imagesArray.push(imageObj);
      //               imageCount++;
      //             })
      //         }
      //       }).then(() => {
      //         results.images.concat(imagesArray);
      //         results.save()
      //       })
      //   }
      // }
      }
    })
  },

  ///// DELETE /////

  // Delete entire property
  deleteProperty: (id, callback) => {
    Schema.Property.deleteOne({ _id: id }, (err, results) => {
      if (err) {
        console.log(err);
      } else {
        console.log(results);
        callback(null, results);
      }
    });
  },

  // Delete one image from a listing
  deletePropertyImage: (imageid, callback) => {
    Schema.Property.findOne({ "images._id": imageid }, (err, results) => {
      if (err) {
        console.log(err);
      } else {
        for (let i = 0; i < results.images; i++) {
          if (results.images[i]._id === imageid) {
            results.images.splice(i, 1);
          }
        }
        results.save();
        callback(null, results);
      }
    });
  },

  ///// PATCH /////

  // Update image, image url, or image description
  updateImage: (image, imageId, callback) => {
    const { _id, url, description } = image;
    Schema.Property.findOne({ "image._id": imageId }, image, (err, results) => {
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
