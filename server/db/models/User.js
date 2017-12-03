const mongoose = require('mongoose');                         

const ObjectId = mongoose.Schema.Types.ObjectId;              

const userSchema = mongoose.Schema({
  id: String,                                               
  creationDate: { type: Date, required: true, default: Date.now },
  email: String,
  name: String,
  title: String,
});

module.exports = mongoose.model('User', userSchema);
