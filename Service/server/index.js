require('newrelic');
const express = require('express');
const cors = require('cors')
const path = require('path');
const bodyParser = require('body-parser');
const expressStaticGzip = require('express-static-gzip')
const morgan = require('morgan');

const {getImages, addProperty, addPropertyImage, addPropertyImages, deleteProperty, deletePropertyImage, deletePropertyImages, updateImage} = require('./controller.js');
const app = express();
const PORT = 3003;

// Middleware
app.use(morgan('dev'));
app.use(cors());
app.use(bodyParser.json());
app.use('/', expressStaticGzip(path.join(__dirname, '../client/dist')))

// ROUTES - CRUD APIs

app.get('/properties/:propertyid/images', getImages)

app.post('/properties', addProperty)
app.post('/properties/:propertyid/images', addPropertyImages)

app.delete('/properties/:propertyid', deleteProperty)
app.delete('/properties/:propertyid/images/:imageid', deletePropertyImage)

app.patch('/properties/:propertyid/images/:imageid', updateImage)

app.listen(PORT, console.log(`Server listening on port ${PORT}`))