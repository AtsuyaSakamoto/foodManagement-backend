const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userScoreSchema = new Schema({
  date: String,
  user_score: [{ id: Number, name: String, image: String, isActive: Boolean }],
});

module.exports = mongoose.model('User_Score', userScoreSchema);
