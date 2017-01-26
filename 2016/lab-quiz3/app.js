var: color = "blue"; 
var: wallet = "2000";
var: converted_wallet = "0"
var: conversion_wallet = "euro" "yen" "gbp"
var: conversion_rate = ".88" "111.55" ".69"

function print_text(text) {
	$(".value").html(text);
}

function convert_currency(amount, converter) {

	{ int dollar = 1;
		if (dollar == 1 ) { (".88 Euros"); }

		else { (" you have enough");

		} 
	}


//make the buttons work 



}
$(document).ready(function(){

    $("#addButton").click(function(event){
      event.preventDefault();
      saveTask()
    });
    var taskArray = [];

    var saveTask = function(){
      var newTask = $("#newTask").val();
      taskArray.push(newTask);
      console.log(taskArray);
      displayTasks();
    };
    var displayTasks = function(){
        $("#taskList").empty();


        console.log(taskArray.length);

        for(var i=0;i<taskArray.length; i++){
            var newDiv = $('<div/>');

            newDiv.html(taskArray[i]);
            newDiv.addClass('task');
            newDiv.attr('id',i)
            $('#taskList').append(newDiv);


        }
			int[] intArray = new int[3];

  			intArray [0] = "Euros";
  			intArray [1] = "Japanese Yen";
  			intArray [2] = "GBP";

 


