require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const mongoose = require('mongoose');
const mongoDBuri = process.env.MONGODB_URI;
const bodyParser = require('body-parser');
const cors = require('cors'); // Import the cors package
const UserModel = require('./model/Users');

app.use(bodyParser.json());
app.use(cors()); // Use the cors middleware to enable CORS for all routes

mongoose.connect(mongoDBuri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Database Connected');
  })
  .catch((err) => console.error(err));

app.get('/getUsers', async (req, res) => {
  try {
    const users = await UserModel.find();
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`🚀Server is running on port ${port}`);
});
