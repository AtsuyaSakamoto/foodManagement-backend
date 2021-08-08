const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userCalendarSchema = new Schema({
  // _id: mongoose.Schema.Types.ObjectId,
  date: String,
  user_text: String,
});

module.exports = mongoose.model('User_Calendar', userCalendarSchema);
