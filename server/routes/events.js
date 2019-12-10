const express = require('express');
const router = express.Router();
const Events = require('../models/events');

router.post('/list', function(req, res){
    Events.find({}, function(err, events) {
        var eventArray = [];

        events.forEach(function(event) {
          eventArray.push(event);
        });
        res.send(eventArray);  
      });
});

router.route('/:id').delete((req, res) => {
  Events.findByIdAndDelete(req.params.id)
    .then(() => res.json('Event deleted'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/new-event').post((req, res) => {
    const name = req.body.name;
    const month = req.body.month;
    const date = req.body.date;
    const type = req.body.type;
    const description = req.body.description;
    const address = req.body.address;
    const username = req.body.username;

const newEvent = new Events({name, month, date, type, description, address, username});

newEvent.save()
    .then(() => res.json('New Event'))
    .catch(err => res.status(400).json('Error: ' + err));
});


module.exports = router;
