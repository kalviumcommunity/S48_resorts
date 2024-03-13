const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const UserModel = require('./Models/resort');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb+srv://saiteja:saiteja9019@cluster0.9iqbstj.mongodb.net/resort", { useNewUrlParser: true, useUnifiedTopology: true });

app.get('/', (req, res) => {
  UserModel.find({})
    .then(users => res.json(users))
    .catch(err => res.status(500).json(err));
});

app.get('/getUser/:id', (req, res) => {
  const id = req.params.id;
  UserModel.findById(id)
    .then(user => {
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      res.json(user);
    })
    .catch(err => res.status(500).json(err));
});

app.put('/updateUser/:id', (req, res) => {
  const id = req.params.id;
  UserModel.findByIdAndUpdate(id, {
    resort: req.body.resort,
    Location: req.body.Location,
  }, { new: true })
    .then(updatedUser => {
      if (!updatedUser) {
        return res.status(404).json({ message: "User not found" });
      }
      res.json(updatedUser);
    })
    .catch(err => res.status(500).json(err));
});

app.delete('/deleteUser/:id', (req, res) => {
  const id = req.params.id;
  UserModel.findByIdAndDelete(id)
    .then(deletedUser => {
      if (!deletedUser) {
        return res.status(404).json({ message: "User not found" });
      }
      res.json({ message: "User deleted successfully", user: deletedUser });
    })
    .catch(err => res.status(500).json(err));
});

app.post("/createUser", (req, res) => {
  UserModel.create(req.body)
    .then(newUser => res.json(newUser))
    .catch(err => res.status(500).json(err));
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.use((req, res) => res.status(404).send('Not found'));

app.listen(PORT, () => {
  console.log(`🚀Server is running on port ${PORT}`);
});
