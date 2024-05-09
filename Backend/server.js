require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const mongoose = require('mongoose');
const mongoDBuri = process.env.MONGODB_URI;
const bodyParser = require('body-parser');

app.use(bodyParser.json());

mongoose.connect(mongoDBuri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Database Connected');
  })
  .catch((err) => console.error(err));

app.get('/', (req, res) =>{
  res.send("Server is running successfully")
})



app.listen(port, () => {
  console.log(`🚀Server is running on port ${port}`);
});
