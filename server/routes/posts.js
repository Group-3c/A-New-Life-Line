const express = require('express');
const router = express.Router();

let Post = require('../models/post');
let Comment = require('../models/comment');

router.route('/').post((req, res) => {
  Post.find()
    .then(posts => res.json(posts))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/new-post').post((req, res) => {
  const question = req.body.question;
  const name = req.body.name;


  const newPost = new Post({question, name});

  newPost.save()
    .then(() => res.json('New Post'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').post((req, res) => {
  Post.findById(req.params.id)
    .then(posts => res.json(posts))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Post.findByIdAndDelete(req.params.id)
    .then(() => res.json('Post deleted'))
    .catch(err => res.status(400).json('Error: ' + err));
});

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




router.route('/comment/:id').post((req, res) => {
  const parent = req.params.id
  const message = req.body.message
  const name = req.body.name

  const newComment = new Comment({message, name, parent});

  newComment.save()
    .then(() => res.json('New comment'))
    .catch(err => res.status(400).json('Error: ' + err))
});

router.route('/comment/:id').post((req, res) => {
  Comment.find({parent: req.params.id})
    .then(posts => res.json(posts))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/comments/:id').delete((req, res) => {
  Comment.find({parent: req.params.id})
    .then(() => res.json('Comment deleted'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/comment/').post((req, res) => {
  Comment.find()
    .then(posts => res.json(posts))
    .catch(err => res.status(400).json('Error: ' + err));
});


module.exports = router;
