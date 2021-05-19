const path = require('path');
const express = require('express');
const ENV = require('../env.js');

const PUBLIC_DIR = path.join(__dirname, '../public');

const app = express();

// Serving the files on the dist folder
app.use(express.static(PUBLIC_DIR));

// Send index.html when the user access the web
app.get('*', function (req, res) {
  res.sendFile(path.join(PUBLIC_DIR, 'index.html'));
});

app.listen(ENV.PORT, function () {
  console.log('Server is listening http://localhost:' + ENV.PORT); // eslint-disable-line
});
