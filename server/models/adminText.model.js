const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const adminTextSchema = new Schema({
  text: { type: String, required: true },
}, {
  timestamps: true,
});

const adminText = mongoose.model('adminText', adminTextSchema);

module.exports = adminText;
