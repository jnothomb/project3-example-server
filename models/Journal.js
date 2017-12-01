const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const journalSchema = new Schema({
  title: String,
  content: String,
  date: {
    type: Date,
    default: Date.now()
  }

});

const Journal = mongoose.model('Journal', journalSchema);

module.exports = {
  Journal
};
