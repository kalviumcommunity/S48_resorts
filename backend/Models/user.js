const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    firstName: String, 
    lastName: String,
    email: String,
    phoneNumber:Number
})

const UserModel = mongoose.model("users", UserSchema);
module.exports = UserModel;