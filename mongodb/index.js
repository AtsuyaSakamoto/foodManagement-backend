// import mongoose from 'mongoose';
var mongoose = require('mongoose');

mongoose.connect(
  'mongodb+srv://user1:sakamo51@cluster0.kop3k.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
  { useFindAndModify: false, useNewUrlParser: true, useUnifiedTopology: true }
);
mongoose.connection.once('open', () => {
  console.log('db connected');
});

module.exports = mongoose;
