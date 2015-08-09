var express = require('express');
var app = express();
app.use(express.static('resources/public'));

app.get('/', function (req, res) {
  res.send('Hello World');
});
 
app.listen(3000);

process.stdout.write("Server operational @ localhost:3000");
