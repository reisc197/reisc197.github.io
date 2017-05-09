$(document).ready(function() {
  var key = "cb3434b20fa74d7b892232052171503";
  var url = "https://api.apixu.com/v1/current.json?key=" + key + "&q=miami";

  $.getJSON(url, function(data) {

  	console.log(data);


