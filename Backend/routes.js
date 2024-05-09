const express = require('express');
const router = express.Router();

let items = [
    {
        id:1,
        name:"b.sai teja",
        email:"saiteja99722@gmail.com"
    }
]; // Example data (you would typically use a database)

// Create operation - POST
router.post('/items', (req, res) => {
    const newItem = req.body;
    items.push(newItem);
    res.status(201).json(newItem);
});

// Read operation - GET
router.get('/items', (req, res) => {
    res.json(items);
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
