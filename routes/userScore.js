var express = require('express');
var router = express.Router();
const User_Score = require('../models/userScore');
const mongoose = require('mongoose');

/* GET users listing. */
router.get('/create-score', function (req, res, next) {
  res.send('respond with a resource');
});

router.post('/create-score', function (req, res, next) {
  const registerScore = req.body.score;
  const registerDate = req.body.date;
  const selectDay = req.body.date;
  const createUser = {
    date: selectDay,
    user_score: registerScore,
  };
  const newUser = new User_Score(createUser);
  newUser
    .save()
    .then((response) => {
      res.header('Content-Type', 'application/json; charset=utf-8');
      res.send(createUser);
    })
    .catch((response) => {
      res.header('Content-Type', 'application/json; charset=utf-8');
      res.send({ response });
    });
});

router.post('/update-score', function (req, res, next) {
  const selectDay = req.body.date;
  const userScoreToUpdate = req.body.score;
  const resObj = { selectDay, userScoreToUpdate };
  User_Score.update(
    { date: selectDay },
    { $set: { user_score: userScoreToUpdate } }
  ).then((response) => {
    res.header('Content-Type', 'application/json; charset=utf-8');
    res.send({ resObj });
  });
});

router.post('/fetch-score', function (req, res, next) {
  User_Score.find({}).then((user_score) => {
    res.header('Content-Type', 'application/json; charset=utf-8');
    res.send({ user_score });
  });
});

module.exports = router;
