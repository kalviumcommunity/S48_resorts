const mongoose = require('mongoose')

const ResortSchema = new mongoose.Schema({
    resort: String,
    Location: String,
})

const ResortModel = mongoose.model("users", ResortSchema);
module.exports = ResortModel;