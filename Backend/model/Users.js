const mongoose = require('mongoose');

const UsersSchema = new mongoose.Schema({
  username: String,
  emailid: String,
  password: String,
  phonenumber: Number
});

const UserModel = mongoose.model("Users", UsersSchema);
module.exports = UserModel;
