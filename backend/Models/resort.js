const mongoose = require('mongoose')

const resortSchema = new mongoose.Schema({
    resort_name: String,
    location: String,
    specialities: String,
    fresh_seafood: String,
    variety_of_meat_preparation: String,
})

const UserModel = mongoose.model("resort", resortSchema);
module.exports = UserModel;