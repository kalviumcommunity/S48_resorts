require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes'); // Assuming routes.js is your routes file
// const bodyParser = require('body-parser');
const cors = require('cors')
const UsersModal = require('./Modals/Usermodal');
const app = express();
const port = 3000;
const mongoDBuri = process.env.MONGODB_URI;

// Middleware
app.use(cors()); 
app.use(express.json());
app.use('/', routes); 

// Connecting database (MongoDB) to server
mongoose.connect(mongoDBuri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => { console.log("Database Connected!!") })
  .catch((err) => console.error(err));


// Basic route to check server status
app.get("/", (req, res) => {
  res.json(`Server is running on port ${port}`);
});

// Get request for MongoDB connection status
app.get("/mongo", (req, res) => {
  if (mongoose.connection.readyState === 1) {
    res.json("Database Connected");
  } else {
    res.json("Error connecting to Database");
  }
});

// Start the server
app.listen(port, () => {
  console.log(`🚀 Server is running on port ${port}`);
});
