const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  members: {
    type: Number,
    required: true,
  },
  eventType: {
    type: String,
    enum: ['offline', 'online'],
    required: true,
  },
  eventLink: {
    type: String,
    validate: {
      validator: function(v) {
        if (this.eventType === 'online') {
          return v && v.length > 0;
        }
        return true;
      },
      message: 'Event link is required for online events.',
    },
  },
  organizerName: {
    type: String,
  },
  thumbnail: {
    type: String, // Store the path to the uploaded image file
  },
});

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;
