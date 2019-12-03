const mongoose = require('mongoose');

const eventSchema = mongoose.Schema({
    name: {type: String, required: true, unique: true},
    month: {type: String, required: true, unique: false},
    date: {type: String, required: true, unique: false},
    type: {type: String, required: false, unique: false},
    description: {type: String, required: true, unique: false},
    address: {type: String, required: true, unique: false},
    username: {type: String, required: true, unique: false}
});

/* Use your schema to instantiate a Mongoose model */
const Event = mongoose.model('Event', eventSchema);

/* Export the model to make it avaiable to other parts of your Node application */
module.exports = Event;
