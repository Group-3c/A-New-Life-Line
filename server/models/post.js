const mongoose = require('mongoose');
//const Schema = new mongoose.Schema;

const PostSchema = mongoose.Schema({
  question: {type: String, required: true},
  name: {type: String, required: true},
}, {
  timestamps: true,
});

const Post = mongoose.model('Post', PostSchema);

module.exports = Post
