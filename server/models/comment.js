const mongoose = require('mongoose');
var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;


const CommentSchema = mongoose.Schema({
  parent: {type: Schema.ObjectId},
  message: {type: String, required: true},
  name: {type: String, required: true}
}, {
  timestamps: true,
});

const Comment = mongoose.model('Comment', CommentSchema);

module.exports = Comment
