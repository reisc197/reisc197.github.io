$(document).ready(function() {
  var key = "cb3434b20fa74d7b892232052171503";
  var url = "https://api.apixu.com/v1/current.json?key=" + key + "&q=miami";

  $.getJSON(url, function(data) {

  	console.log(data);

  	// data["current"]["wind_mph"] = 15

  	// $("#weather").html(data["current"]["temp_f"]);


  	if (data["current"]["wind_mph"] < 8.1 ) {

  		$("#weather").removeClass("windy"); 

  		$("#weather").addClass("sunny");
  	
  	} else {  

  		$("#weather").removeClass("sunny");

  		$("#weather").addClass("windy"); 

  	
  	}


  	 

	});


});


/*
    Get weather API key at
    https://www.apixu.com/signup.aspx
*/