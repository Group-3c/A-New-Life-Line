const router = require('express').Router();
let AdminText = require('../models/adminText.model');

//first route that handles http get requests on the /adminText url path
router.route('/').get((req, res) => {
  //mongoose method that gives list of all text fields from database in JSON format
  AdminText.find()
    .then(texts => res.json(texts))
    .catch(err => res.status(400).json('Error: ' + err));
});

//route that handles http post requests to add a new admintext element
router.route('/add').post((req, res) => {
  const text = req.body.text;

  const newText = new AdminText({text});

  newText.save()
    .then(() => res.json('Admin text added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

//returns information about a specific text field, given an id (created by MongoDB)
router.route('/:id').get((req, res) => {
  AdminText.findById(req.params.id)
    .then(text => res.json(text))
    .catch(err => res.status(400).json('Error: ' + err));
});

//updates the info of a specific admin text field, given an id
router.route('/update/:id').post((req, res) => {
  AdminText.findById(req.params.id)
    .then(text => {
      text.text = req.body.text;

      text.save()
        .then(() => res.json('Text updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});


module.exports = router;
