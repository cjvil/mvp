const express = require('express');
const app = express();
const port = 8332;
const db = require('../database/index.js');
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.listen(port, () => {
  console.log('listening on port ' + port);
})

app.get('/list', (req, res) => {
  db.retrieveAllEntries((results) => {
    res.send('Got list: ' + results);
  });
});

app.post('/list', (req, res) => {
  db.addEntry(req.body, (result) => {
    res.send('POSTed to list');
  });

});

app.use(express.static('client'));