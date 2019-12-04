const router = require('express').Router();
let AdminText = require('../models/adminText.model');

//first route that handles http get requests on the /users url path
router.route('/').get((req, res) => {
  //mongoose method that gives list of all text fields from database in JSON format
  AdminText.find()
    .then(texts => res.json(texts))
    .catch(err => res.status(400).json('Error: ' + err));
});

//returns information about a specific admin text, given an id (created by MongoDB)
router.route('/:id').get((req, res) => {
  AdminText.findById(req.params.id)
    .then(adminText => res.json(adminText))
    .catch(err => res.status(400).json('Error: ' + err));
});


//updates the info of a specific admin text field, given an id
router.route('/update/:id').post((req, res) => {
  AdminText.findById(req.params.id)
    .then(adminText => {
      adminText.text = req.body.text;

      adminText.save()
        .then(() => res.json('Admin text updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
