const express = require('express');
const router = express.Router();
const ResortModal = require("./Modals/Resortmodal")
const UsersModal =  require('./Modals/Usermodal')

// Create operation - POST
router.post('/items', (req, res) => {
    const newItem = req.body;
    items.push(newItem);
    res.status(201).json(newItem);
});



// Read operation - GET
// fetching the resortsdata from mongodb
router.get('/resortsdata', async (req, res) => {
    try {
      const resorts = await ResortModal.find();
      res.status(200).send(resorts);
    } catch (err) {
      res.status(500).send(err);
    }
  });

// fetching the usersdata from mongodb
  router.get('/usersdata', async (req, res) => {
    try {
      const users = await UsersModal.find();
      res.status(200).send(users);
    } catch (err) {
      res.status(500).send(err);
    }
  });
// Update operation - PUT
router.put('/items/:id', (req, res) => {
    const itemId = req.params.index;
    const updatedItem = req.body;
    items[itemId] = updatedItem;
    res.json(updatedItem);
});

// Delete operation - DELETE
router.delete('/items/:id', (req, res) => {
    const itemId = req.params.id;
    items.splice(itemId, 1);
    res.sendStatus(204).json("deleted item successfully");
});

module.exports = router;
