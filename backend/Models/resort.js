const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    resort: String,
    Location: String,
})

const UserModel = mongoose.model("users", UserSchema);
module.exports = UserModel;