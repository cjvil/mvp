const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/beer');

const db = mongoose.connection;

db.once('open', () => {
  console.log('opened connection with db');

  const beerSchema = mongoose.Schema({
    name: String,
    rating: Number,
    description: String
  });

  const Beer = mongoose.model('Beer', beerSchema);

  const addEntry = (beer) => {
    console.log('adding entry');

    let beerEntry = new Beer({
      name: beer.name,
      rating: beer.rating,
      description: beer.description
    });

    beerEntry.save((err, result) => {
      console.log('saved entry, ', result);
    });
  };

  const retrieveAllEntries = () => {
    console.log('retrieving all entries');

    Beer.find((err, results) => {
      if(err) {
        console.log('ERROR ' + err);
      }
      console.log('found: ', results);
    });
  };
});