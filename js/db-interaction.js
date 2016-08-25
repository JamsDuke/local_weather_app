"use strict";

let $ = require('jquery'),
    firebase = require("./config");
    var userZip = getZipCode();

function getWeather(callback) {
  return new Promise(function(resolve, reject){
    $.ajax({
      url: `http://api.openweathermap.org/data/2.5/forecast/?zip=${userZip},us&APPID=65bf3ad0bda68cac284e1921db0d3003`
    }).done(function(weatherData){
      resolve(weatherData);
    });
  });
}

function getZipCode() {
  var inputZip = $("#zipCode").val();
  return inputZip;
}

module.exports = {
  getWeather
};