const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const  UserModel  = require('./Models/resort');
const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 3000;


async function Connection(){
 await  mongoose.connect("mongodb+srv://saiteja:saiteja9019@cluster0.9iqbstj.mongodb.net/resort?retryWrites=true&w=majority&appName=Cluster0", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
console.log('Connected to MongoDB')

}
// Middleware
app.use(cors());
app.use(express.json());

// Routes
// app.use('/', routes);

// Get all users

// Define GetAll function with proper error handling
async function GetAll() {
  try {
    // Attempt to fetch users from the database
    const users = await UserModel.find();
    return users; // Return the retrieved users
  } catch (error) {
    // If an error occurs during database query, log the error and return an empty array
    console.error('Error fetching users:', error);
    return [];
  }
}

// Handle errors in the app.get route handler
app.get('/', async (req, res) => {
  try {
    // Attempt to fetch users using the GetAll function
    const users = await GetAll();
    // Send the retrieved users as a response
    res.send({ data: users });
  } catch (error) {
    // If an error occurs, return an Internal Server Error response
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


// Get user by ID
app.get('/getUser/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const user = await UserModel.findById(id);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Update user by ID
app.put('/updateUser/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const updatedUser = await UserModel.findByIdAndUpdate(id, req.body, { new: true });
    res.json(updatedUser);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Delete user by ID
app.delete('/deleteUser/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const result = await UserModel.findByIdAndDelete(id);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Create user
app.post("/createUser", async (req, res) => {
  try {
    const { username, email, favorite_resort_list } = req.body;
    const newUser = new UserModel({ username, email, favorite_resort_list });
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Error handling for undefined routes
app.use((req, res) => res.status(404).json({ error: 'Not found' }));

// Start server
Connection().then(() =>{
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});
})
