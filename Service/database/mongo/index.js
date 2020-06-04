const mongoose = require('mongoose')

mongoose.connect('mongodb://jake:carousel@3.16.95.115/airbnb', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

mongoose.connection.on('connected', (err) => {
  if(err) {
    console.log(err);
  } else {
    console.log('Mongoose Airbnb MongoDB connected!')
  }
})

const Schema = mongoose.Schema

const Properties = new Schema({
  _id: Number,
  images: [{
    _id: Number,
    url: String,
    description: String
  }]
})

const Counters = new Schema({
  _id: String,
  sequence_value: Number
})

const Property = mongoose.model('Property', Properties, 'properties')
const Counter = mongoose.model('Counter', Counters, 'counters')

module.exports = {
  Property: Property,
  Counter: Counter
}
