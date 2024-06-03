const express = require('express');
const router = express.Router();
const ResortModal = require('./Modals/Resortmodal');
const UsersModal = require('./Modals/Usermodal');
const Joi = require('joi');

const userSchema = Joi.object({
  userName: Joi.string().required(),
  emailId: Joi.string().email().required(),
  password: Joi.string().required()
});

const resortSchema = Joi.object({
  resortName: Joi.string().required(),
  openingTime: Joi.string().required(),
  closingTime: Joi.string().required(),
  resortAddress: Joi.string().required(),
  resortContactNumber: Joi.string().required()
});


// Create operation - POST
router.post('/items', (req, res) => {
  const newItem = req.body;
  // Assuming 'items' is a placeholder array; replace with actual DB operation
  items.push(newItem);
  res.status(201).json(newItem);
});

// Read operation - GET
router.get('/resortsdata', async (req, res) => {
  try {
    const resorts = await ResortModal.find();
    res.status(200).send(resorts);
  } catch (err) {
    res.status(500).send(err);
  }
});

router.get('/resortsdata/:id', async (req, res) => {
  const id=req.params.id;
  ResortModal.findById({_id:id}).then(resort=>res.json(resort))
  .catch(err=>res.json(err))
});

router.post('/addresort', async (req, res) => {
  const { error } = resortSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }
  try {
    const newResort = new ResortModal(req.body);
    await newResort.save();
    res.status(201).json(newResort);
  } catch (err) {
    res.status(500).send(err);
  }
});

router.put('/updateresort/:id', (req, res) => {
  const id = req.params.id;
  ResortModal.findByIdAndUpdate({_id:id},
    {resortName:req.body.resortName,
    openingTime:req.body.openingTime,
    closingTime:req.body.closingTime,
    resortAddress:req.body.resortAddress,
    resortContactNumber:req.body.resortContactNumber})
    .then(data=>res.json(data))
    .catch(err=>res.json(err))
});

router.delete('/deleteresort/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const result = await ResortModal.findByIdAndDelete({ _id: id });
    console.log(result);
    res.status(200).json({ message: 'Deleted successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


router.get('/usersdata', async (req, res) => {
  try {
    const users = await UsersModal.find();
    res.status(200).send(users);
  } catch (err) {
    res.status(500).send(err);
  }
});

router.post('/login', async(req, res) =>{
  try{
    const {userName, password} = req.body;
    const validationSchema = Joi.object({
      userName: Joi.string().required(),
      password: Joi.string().required(),
    });

    const validationResult = await validationSchema.validateAsync({userName,password});
    const user = await UsersModal.findOne({userName: validationResult.userName,password: validationResult.password});

    if(user){
      res.cookie('userName',userName)
      res.json({success: true, message: 'Login successful'});
    } else{
      res.status(401).json({success: false, message: 'Invalid userName or password'});
    }
  } catch(err){
    console.error(err);
    res.status(500).json({error: 'Internal Server Error'});
  }
});

router.post('/adduser', async (req, res) => {
  const { error } = userSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  try {
    const newUser = new UsersModal(req.body);
    await newUser.save();
    res.status(201).json(newUser);
  } catch (err) {
    res.status(500).send(err);
  }
});

// Update operation - PUT
router.put('/items/:id', (req, res) => {
  const itemId = req.params.id;
  const updatedItem = req.body;
  // Assuming 'items' is a placeholder array; replace with actual DB operation
  items[itemId] = updatedItem;
  res.json(updatedItem);
});

// Delete operation - DELETE
router.delete('/items/:id', (req, res) => {
  const itemId = req.params.id;
  // Assuming 'items' is a placeholder array; replace with actual DB operation
  items.splice(itemId, 1);
  res.status(204).json("deleted item successfully");
});

module.exports = router;