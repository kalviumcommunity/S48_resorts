const express = require('express');
const router = express.Router();
const ResortModal = require('./Modals/Resortmodal');
const UsersModal = require('./Modals/Usermodal');

// Read operation - GET all resorts
router.get('/resortsdata', async (req, res) => {
  try {
    const resorts = await ResortModal.find();
    res.status(200).send(resorts);
  } catch (err) {
    res.status(500).send(err);
  }
});

// Read operation - GET all users
router.get('/usersdata', async (req, res) => {
  try {
    const users = await UsersModal.find();
    res.status(200).send(users);
  } catch (err) {
    res.status(500).send(err);
  }
});

// Create operation - POST a new resort
router.post('/resortsdata', async (req, res) => {
  const { resortName, openingTime, closingTime, resortAddress, resortcontactNumber } = req.body;

  const newResort = new ResortModal({
    resortName,
    openingTime,
    closingTime,
    resortAddress,
    resortcontactNumber, 
  });

  try {
    const savedResort = await newResort.save();
    res.status(201).json(savedResort);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
