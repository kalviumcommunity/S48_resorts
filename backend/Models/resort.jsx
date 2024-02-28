const mongoose = require('mongoose');

const resortSchema = new mongoose.Schema({
    resort:String,
    Name:Srting,
    Location:String,
   Description:String,
})

const reasortModels =  mongoose.model("resorts", resortSchema)
model.exports = reasortModels