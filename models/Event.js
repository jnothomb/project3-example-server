const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const eventSchema = new Schema({
  date: Date,
  owner: {
    type: ObjectId,
    ref: 'User'
  },
  attendees: [{
    type: ObjectId,
    ref: 'User'
  }],
  movie: {
    title: String,
    pictureUrl: String,
    imdbId: String
  }
});

const Event = mongoose.model('Event', eventSchema);

module.exports = {
  Event
};
