var express = require('express');
var router = express.Router();
const User_Calendar = require('../models/userCalendar');
const mongoose = require('mongoose');

router.post('/fetch-calendar', function (req, res, next) {
  User_Calendar.find({}).then((user_calendar) => {
    res.header('Content-Type', 'application/json; charset=utf-8');
    res.send({ user_calendar });
  });
});

router.post('/create-calendar', function (req, res, next) {
  const selectDay = req.body.date;
  const registerText = req.body.text;
  const createUser = {
    date: selectDay,
    user_text: registerText,
  };
  const newUser = new User_Calendar(createUser);
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

module.exports = router;
