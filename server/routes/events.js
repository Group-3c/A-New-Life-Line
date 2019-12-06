const express = require('express');
const router = express.Router();

let Events = require('../models/events');

router.get('/list', function(req, res){
    Events.find({}, function(err, events) {
        var eventArray = [];

        events.forEach(function(event) {
          eventArray.push(event);
        });
        res.send(eventArray);  
      });
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
