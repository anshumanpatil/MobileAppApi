var express = require('express');
var router = express.Router();
const day = require("../database/schema/day");

/* GET users listing. */
router.post('/', function (req, res, next) {
  var data = [
    {
      phNumber: "John",
      callType: "21",
      callDayTimestring: "New York",
      callDuration: "New York",
      Day: "New York"
    }
  ];
  day.insertMany(data, function(err, result) {
    if (err) {
      console.log(err);
      res.status(200).json(err);
    } else {
      res.status(400).json(result);
    }
  });
  
});



router.get('/', function (req, res, next) {
  day.find(function(err, result) {
    if (err) {
      console.log(err);
      res.status(200).json(err);
    } else {
      res.status(400).json(result);
    }
  });
  
});

module.exports = router;
