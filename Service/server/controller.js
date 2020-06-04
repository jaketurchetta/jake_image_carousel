const model = require('../database/mongo/model.js');

module.exports = {
  getImages: (req, res) => {
    model.getImages(req.params.propertyid, (err, results) => {
        if (err) {
          console.log(err);
          res.status(500).end();
        } else {
          // console.log(results)
          res.status(200).json(results);
        }
    })
  },
  addProperty: (req, res) => {
    model.addProperty(req, (err, results) => {
      if (err) {
        console.log(err);
        res.status(500).end();
      } else {
        // console.log(results)
        res.status(201).json(results);
      }
    })
  },
  addPropertyImages: (req, res) => {
    model.addPropertyImages(req.params.propertyid, (err, results) => {
      if (err) {
        console.log(err);
        res.status(500).end();
      } else {
        // console.log(results)
        res.status(201).json(results);
      }
    })
  },
  deleteProperty: (req, res) => {
    model.deleteProperty(req.params.propertyid, (err, results) => {
      if (err) {
        console.log(err);
        res.status(500).end();
      } else {
        // console.log(results)
        res.status(204).json('Property deleted!');
      }
    });
  },
  deletePropertyImage: (req, res) => {
    model.deletePropertyImage(req.params.imageid, (err, results) => {
      if (err) {
        console.log(err);
        res.status(500).end();
      } else {
        // console.log(results)
        res.status(204).json('Image deleted!');
      }
    });
  },
  updateImage: (req, res) => {
    model.updateImage(req.body, (err, results) => {
      if (err) {
        console.log(err);
        res.status(500).end();
      } else {
        // console.log(results)
        res.status(201).json(results);
      }
    })
  }
}
