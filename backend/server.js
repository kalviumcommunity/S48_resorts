const express = require('express');
const app = express();
const routes = require('./routes'); 
const mongoose = require('mongoose');
const cors = require('cors'); // Import cors middleware
const PORT = 3001; // Correct the variable name

// Connect to MongoDB
mongoose.connect('mongodb+srv://saiteja:saiteja9019@cluster0.9iqbstj.mongodb.net/?retryWrites=true&w=majority/resort', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Error connecting to MongoDB:', err));

app.use(express.json());
app.use(cors()); // Use cors middleware
app.use('/', routes);

app.get('/resort',(req,res)=>{
  // Assuming 'resort' is a mongoose model
  Resort.find()
    .then(resorts => res.json(resorts)) // Corrected from resort to resorts
    .catch(err => res.json(err))
});

app.use((req, res) => res.status(404).send('Not found'));

app.listen(PORT, () => {
  console.log(`🚀Server is running on port ${PORT}`);
});
