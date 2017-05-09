$(document).ready(function() {
  var key = "dca94b9ac25b4c4ea01dd30833e0aa3f";
 
 $.getJSON(url, function(data) {

  	console.log(data);

  	 data["current"]["wind_mph"] = 15

  	$("#weather").html(data["current"]["temp_f"]);



  	if (data["current"]["wind_mph"] < 8.1 ) {

  		$("#weather").removeClass("windy"); 

  		$("#weather").addClass("sunny");
  	
  	} else {  

  		$("#weather").removeClass("sunny");

  		$("#weather").addClass("windy"); 

  	
  	}


  	 

	});


});
