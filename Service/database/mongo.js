const mongoose = require('mongoose');
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

let save = (images) => {

  let container = [];
  for (let i = 0; i < properties.length; i ++) {
    let repo = repos[i];
    let doc = new Repo({
      id: repo.id,
      name: repo.name,
      owner: { id: repo.owner.id,
              login: repo.owner.login,
              url: repo.owner.url,
              repos_url: repo.owner.repos_url },
      url: repo.url,
      html_url: repo.html_url,
      description: repo.description
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