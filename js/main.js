"use strict";

let $ = require('jquery'),
    db = require("./db-interaction"),
    templates = require("./dom-builder"),
    login = require("./user");

// REST API?
function loadWeather() {
  $(".weatherInput").html("");
  db.getWeather()
  .then(function(weatherData) {
    var idArr = Object.keys(weatherData);
    idArr.forEach(function(key){
      weatherData[key].id = key;
    });
    console.log("weatherObj with id added", weatherData);
    templates.makeWeatherReport(weatherData);
  });
}

//User Login
$("#auth-btn").click(function() {
  console.log("clicked auth");
  login()
  .then(function(result){
    let user = result.user;
    console.log("logged in user", user.uid);
  });
});

function buildWeatherObj() {
  let weatherObj = {
    name: $().val(),
    temp: $().val(),
    description: $().val(),
    pressure: $().val(),
    speed: $().val()
  };
  return weatherObj;
}