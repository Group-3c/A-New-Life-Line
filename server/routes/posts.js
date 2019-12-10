const express = require('express');
const router = express.Router();

let Post = require('../models/post');
let Comment = require('../models/comment');

//gets all posts
router.route('/').get((req, res) => {
  Post.find()
    .then(posts => res.json(posts))
    .catch(err => res.status(400).json('Error: ' + err));
});

//create a new post
router.route('/new-post').post((req, res) => {
  const question = req.body.question;
  const name = req.body.name;

  const newPost = new Post({question, name});

  newPost.save()
    .then(() => res.json('New Post'))
    .catch(err => res.status(400).json('Error: ' + err));
});

//gets posts by id
router.route('/:id').get((req, res) => {
  Post.findById(req.params.id)
    .then(posts => res.json(posts))
    .catch(err => res.status(400).json('Error: ' + err));
});

//delets posts by id
router.route('/:id').delete((req, res) => {
  Post.findByIdAndDelete(req.params.id)
    .then(() => res.json('Post deleted'))
    .catch(err => res.status(400).json('Error: ' + err));
});

//updates the question on post with id
router.route('/update/:id').post((req, res) => {
  Post.findById(req.params.id)
    .then(posts => {
      posts.question = req.body.question;

      posts.save()
        .then(() => res.json('Post updated'))
        .catch(err => res.status(400).json('Error: ' + err));
      })
    .catch(err => res.status(400).json('Error: ' + err));
});


//gets comment by id
router.route('/comment/:id').post((req, res) => {
  const parent = req.params.id;
  const message = req.body.message;
  const name = req.body.name;

  const newComment = new Comment({message, name, parent});

  newComment.save()
    .then(() => res.json('New comment'))
    .catch(err => res.status(400).json('Error: ' + err))
});

//gets comment by parent id
router.route('/comment/:id').get((req, res) => {
  Comment.find({parent: req.params.id})
    .then(posts => res.json(posts))
    .catch(err => res.status(400).json('Error: ' + err));
});

//deletes post by parent id
router.route('/comments/:id').delete((req, res) => {
  Comment.findAndDelete({parent: req.params.id})
    .then(() => res.json('Comment deleted'))
    .catch(err => res.status(400).json('Error: ' + err));
});

//deletes comment by comment id
router.route('/comment/:id').delete((req, res) => {
  Comment.findByIdAndDelete(req.params.id)
    .then(() => res.json('Comment deleted'))
    .catch(err => res.status(400).json('Error: ' + err));
});

//gets all comments
router.route('/comment/').get((req, res) => {
  Comment.find()
    .then(posts => res.json(posts))
    .catch(err => res.status(400).json('Error: ' + err));
});

//updates comment message by comment id
router.route('/update-comment/:id').post((req, res) => {
  Comment.findById(req.params.id)
    .then(comments => {
      comments.message = req.body.message;

      comments.save()
        .then(() => res.json('Comment updated'))
        .catch(err => res.status(400).json('Error: ' + err));
      })
    .catch(err => res.status(400).json('Error: ' + err));
});


module.exports = router;
