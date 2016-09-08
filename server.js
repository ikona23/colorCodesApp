var express = require('express');
var app = express();

app.disable('x-powered-by')

app.get('/', function (req, res) {
//   res.send('Hello World!');
// });

  res.send('Got a POST request');
});

app.listen(3003, function () {
  console.log('Example app listening on port 3003!');
});
