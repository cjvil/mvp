const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/beer');

const db = mongoose.connection;

db.once('open', () => {
  console.log('opened connection with db');

  const beerSchema = mongoose.Schema({
    name: String,
    rating: Number,
    description: String,
    abv: Number,
    style: String,
    favorite: Boolean
  });

  const Beer = mongoose.model('Beer', beerSchema);

  const addEntry = (beer, callback) => {
    console.log('adding entry', beer);

    let parameters = {
      name: beer.name,
      rating: beer.rating,
      description: beer.description,
      abv: Number.parseFloat(beer.abv),
      favorite: false
    };

    parameters.style = beer.style ? beer.style.name : '';

    let beerEntry = new Beer(parameters);

    beerEntry.save((err, result) => {
      console.log('saved entry, ', result);
      callback(result);
    });

  };

  const retrieveAllEntries = (sortQuery, callback) => {
    console.log('retrieving all entries');
    console.log('sort query ', JSON.stringify(sortQuery) + typeof sortQuery);

    Beer.find((err, results) => {
      if(err) {
        console.log('ERROR ' + err);
      }
      console.log('found: ', results);
      callback(results);
    })
    .sort(sortQuery);
  };

  const retrieveFavorites = () => {

  };

  module.exports.addEntry = addEntry;
  module.exports.retrieveAllEntries = retrieveAllEntries;
});

