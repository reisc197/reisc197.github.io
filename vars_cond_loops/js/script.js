$(document).ready(function() {

	// var myVariable; 
	// myVariable = 10;

	// var yourVariable = 20;


 //    console.log(myVariable);
 //    myVariable = 100 / 5; 
 //    console.log(myVariable);

 //    myVariable = yourVariable +10; 
 //    console.log(myVariable);


    var popCount = 0; 
    var numOfBalloons = 100;

    for (var i=0; i<numOfBalloons; i++) {
      $("#balloon-container").append("<div class='balloon'> </div>");
      if ( i % 2 === 0) {
      	$(".balloon").last().addClass("big");
      }

     
    }

    var audio = new Audio("pop.m4a");


	$(".balloon").on("mouseenter", function () {
		$(this).addClass("popped");
		popCount = popCount + 1;

		audio.play();


		$("#pop-target").html(popCount);

		// check did the user pop all the balloons


		if (popCount === numOfBalloons) {
		$("h1").html("wooo");

		}  

		 else if (popCount=== 100) {
		 	alert ("almost");

		 }

		 else {
		 	console.log("keep going!")
		}


		

	});





});