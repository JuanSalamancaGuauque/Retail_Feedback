const mongoose = require('mongoose');

const FeedbackSchema = new mongoose.Schema({
    location: String,
    availability: Number,
    experience: Number,
    comment: String,
});

module.exports = mongoose.model('Feedback',FeedbackSchema);