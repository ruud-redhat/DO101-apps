var express = require('express');
app = express();

app.get('/', function (req, res) {
  res.send('Hello World!\n');
});

app.get('/mars', (req, res) => {
  res.send("Hallo Mars\n");
})

app.listen(8081, function () {
  console.log('Example app listening on port 8080!');
});

