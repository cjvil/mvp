const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/beer');

const db = mongoose.connection;

db.once('open', () => {
  console.log('opened connection with db');

  const beerSchema = mongoose.Schema({
    name: String,
    rating: Number,
    description: String,
    abv: String
  });

  const Beer = mongoose.model('Beer', beerSchema);

  const addEntry = (beer, callback) => {
    console.log('adding entry');

    let beerEntry = new Beer({
      name: beer.name,
      rating: beer.rating,
      description: beer.description,
      abv: beer.abv
    });

    beerEntry.save((err, result) => {
      console.log('saved entry, ', result);
      callback(result);
    });

  };

  const retrieveAllEntries = (callback) => {
    console.log('retrieving all entries');

    Beer.find((err, results) => {
      if(err) {
        console.log('ERROR ' + err);
      }
      console.log('found: ', results);
      callback(results);
    })
    .sort({
      rating: -1
    });
  };

  module.exports.addEntry = addEntry;
  module.exports.retrieveAllEntries = retrieveAllEntries;
});

