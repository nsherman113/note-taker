const express = require('express');

const PORT = process.env.PORT || 3001;
const app = express();
const apiRoutes = require('./routes/api/notes.js');
const htmlRoutes = require('./routes/html/index.js');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//states where the client side code can be
app.use(express.static('./develop/public'));

// Use apiRoutes
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});
