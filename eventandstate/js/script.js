$(document).ready(function(){

	console.log("hello there!");

	$(".button").on("mouseenter", function() {
		//here are the hover instruction
		$(this). addClass("focused");
	}); 

	$(".button").on("mouseleave", function(){
		$(this).removeClass("focused");
	});

	$(".button").on("click", function(){
		$(this).toggleClass("active");
		$("body").toggleClass("dark");
		$("h1").html("Dig in!");
	});

	$("h1").on("click", function(){
		$(this).html("Dig in!");

	});




}); 
