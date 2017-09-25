const express = require('express');
const app = express();
const port = 8332;

app.listen(port, () => {
  console.log('listening on port ' + port);
})

app.get('/list', (req, res) => {
  res.send('Got list');
});

app.post('/list', (req, res) => {
  res.send('POSTed list');
});

app.use(express.static('client'));