// initialize express 
const express = require('express');

// set up port
const PORT = process.env.PORT || 3001;

// require db file
const dbJson = require('./db/db.json')

// initialize app 
const app = express();

// indicate static folders 
app.use(express.static(__dirname + '/public'));
app.use(express.static('./'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// require routes
require("./apiRoutes")(app);
require("./htmlRoutes")(app);


// listen for port
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
  });
  