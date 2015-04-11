var express = require('express');
var app = express();

app.get('/b', function (req, res) {
  res.send('B');
});

app.listen(3000);
