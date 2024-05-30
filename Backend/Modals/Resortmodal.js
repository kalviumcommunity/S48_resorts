const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ResortSchema = new Schema({
  resortName: {
    type: String,
    required: true
  },
  openingTime: {
    type: String,
    required: true
  },
  closingTime: {
    type: String,
    required: true
  },
  resortAddress: {
    type: String,
    required: true
  },
  resortcontactNumber: {
    type: Number,
    required: true
  }
});

const ResortModal = mongoose.model('resorts', ResortSchema);

module.exports = ResortModal;
