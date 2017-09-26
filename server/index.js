const express = require('express');
const app = express();
const port = 8332;
const db = require('../database/index.js');
const bodyParser = require('body-parser');
const request = require('request');
//TODO require api key
const API_KEY = require('./brewerydb.js');

app.use(bodyParser.json());

app.listen(port, () => {
  console.log('listening on port ' + port);
})

app.get('/list', (req, res) => {
  db.retrieveAllEntries((results) => {
    res.send(results);
  });
});

app.post('/list', (req, res) => {
  db.addEntry(req.body, (result) => {
    res.send('POSTed to list ');
  });
});

app.post('/search', (req, res) => {
  console.log('req body ', typeof req.body) // OBJECT
  
  let options = {
    url: 'http://api.brewerydb.com/v2/search',
    method: 'GET',
    qs: {
        q: req.body.query, // TODO: replace with search query
        type: 'beer',
        key: API_KEY,
        format: 'json'
    }
  };

  request(options, (error, response, body) => {
    console.log(typeof body); //STRING
    res.send(body);
  });

});

app.use(express.static('client'));