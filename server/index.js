const list = [
  {name: 'Campfire Stout', rating: 2, description: 'Tasted like campfires, gross'},
  {name: 'Worst Beer Ever', rating: 10, description: 'Sooo good'},
  {name: 'Dolphin Blue Brew', rating: 7, description: 'Fresh taste but made from dolphins :('}
];

const express = require('express');
const app = express();
const port = 8332;
const db = require('../database/index.js');

app.listen(port, () => {
  console.log('listening on port ' + port);
})

app.get('/list', (req, res) => {
  db.retrieveAllEntries((results) => {
    res.send('Got list: ' + results);
  });
});

app.post('/list', (req, res) => {
  db.addEntry(list[0], (result) => {
    res.send('POSTed to list');
  });

});

app.use(express.static('client'));