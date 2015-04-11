var express = require('express');
var app = express();

app.get('/a', function (req, res) {
  res.send('A');
});

app.listen(3000);
