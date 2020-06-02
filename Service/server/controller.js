const model = require('../database/mongo/model.js');

module.exports = {
  getImages: (req, res) => {
    model.getImages(req.params.propertyid, (err, results) => {
        if (err) {
          console.log(err);
          res.status(500).end();
        } else {
          res.status(200).json(results);
        }
    })
  },
  addProperty: (req, res) => {
    model.addProperty((err, results) => {
      if (err) {
        console.log(err);
        res.status(500).end();
      } else {
        console.log(results)
        res.status(201).json(results);
      }
    })
  },
  addPropertyImage: (req, res) => {
    model.addPropertyImage(req.params.propertyid, (err, results) => {
      if (err) {
        console.log(err);
        res.status(500).end();
      } else {
        console.log(results)
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
        console.log(results)
        res.status(201).json(results);
      }
    })
  },
  deleteProperty: (req, res) => {
    model.deleteGrocery(req.params.id, (err, results) => {
      if (err) {
        console.log(err);
        res.status(500).end();
      } else {
        console.log(results)
        res.status(204).json('Property deleted!');
      }
    });
  },
  deletePropertyImage: (req, res) => {
    model.deleteGrocery(req.params.id, (err, results) => {
      if (err) {
        console.log(err);
        res.status(500).end();
      } else {
        console.log(results)
        res.status(204).json('Property deleted!');
      }
    });
  },
  deletePropertyImages: (req, res) => {
    model.deleteGrocery(req.params.id, (err, results) => {
      if (err) {
        console.log(err);
        res.status(500).end();
      } else {
        console.log(results)
        res.status(204).json('Property deleted!');
      }
    });
  },
  updateImage: (req, res) => {
    model.updateImage(req.body, (err, results) => {
      if (err) {
        console.log(err);
        res.status(500).end();
      } else {
        console.log(results)
        res.status(201).json(results);
      }
    })
  }
}
