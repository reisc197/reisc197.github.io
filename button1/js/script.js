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
		$("h1").html("Regrets?");
	});

	$("h1").on("click", function(){
		$(this).html("NEVER!");

	});
		$(".buttontwo").on("mouseenter", function() {
		//here are the hover instruction
		$(this). addClass("focused");
	}); 

	$(".buttontwo").on("mouseleave", function(){
		$(this).removeClass("focused");
	});

$(".buttontwo").on("click", function(){
		$(this).toggleClass("active2");
		$("body").toggleClass("dark");
		$("h1").html("Regrets?");
	});
$(".buttonthree").on("mouseenter", function() {
		//here are the hover instruction
		$(this). addClass("focused");
	}); 

	$(".buttonthree").on("mouseleave", function(){
		$(this).removeClass("focused");
	});

$(".buttonthree").on("click", function(){
		$(this).toggleClass("active3");
		$("body").toggleClass("dark");
		$("h1").html("Regrets?");
	});



}); 
	