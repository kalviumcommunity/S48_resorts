const mongoose = require('mongoose')

<<<<<<< HEAD
const ResortSchema = new mongoose.Schema({
=======
const UserSchema = new mongoose.Schema({
>>>>>>> main
    resort: String,
    Location: String,
})

<<<<<<< HEAD
const ResortModel = mongoose.model("users", ResortSchema);
module.exports = ResortModel;
=======
const UserModel = mongoose.model("users", UserSchema);
module.exports = UserModel;
>>>>>>> main
