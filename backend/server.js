const express = require('express');
const app = express();
const routes = require('./routes'); // Import your routes file
const port = 3001;
const mongoose = require('mongoose');


// Use the routes
app.use('/', routes);
app.use(cors())
app.use(express.json())
app.get('/resort',(req,res)=>{
  resort.find()
  .then(resort => resort.json(resort))
  .catch(err => res.json(err))
})

app.use((req, res) => res.status(404).send('Not found'));

app.listen(PORT, () => {
  console.log(`🚀Server is running on port ${PORT}`);
});