const mongoose = require('mongoose');

// import environmental variables from our variables.env file
require('dotenv').config({ path: 'variables.env' });

// Connect to our Database and handle any bad connections
mongoose.connect(process.env.DATABASE, { useNewUrlParser: true });
mongoose.connection.on('error', err => {
  console.error(`🙅 🚫 🙅 🚫 🙅 🚫 🙅 🚫 → ${err.message}`);
});

// READY?! Let's go!

// Import all of our models
require('./models/Store');

// Start our app!
const app = require('./app');

const PORT = process.env.PORT || 7777;
const server = app.listen(PORT, () => {
  console.log(`Express running → PORT ${server.address().port}`);
});
