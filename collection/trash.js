$(document).ready(function(){ 
    "use strict"; 
     $(".compost").mouseenter(function(){
     $(".unrecyclable1").css("opacity", "0");
     $(".recyclable1").css("opacity", "0");
     $(".all1").css("opacity", "0");
});

     $(".compost").mouseleave(function(){
     $(".unrecyclable1").css("opacity", "1");
     $(".recyclable1").css("opacity", "1");
     $(".all1").css("opacity", "1");
});

     $(".unrecyclable").mouseenter(function(){
     $(".compost1").css("opacity", "0");
     $(".recyclable1").css("opacity", "0");
     $(".all1").css("opacity", "0");
});

     $(".unrecyclable").mouseleave(function(){
     $(".compost1").css("opacity", "1");
     $(".recyclable1").css("opacity", "1");
     $(".all1").css("opacity", "1");
});

     $(".recyclable").mouseenter(function(){
     $(".compost1").css("opacity", "0");
     $(".unrecyclable1").css("opacity", "0");
     $(".all1").css("opacity", "0");
});

     $(".recyclable").mouseleave(function(){
     $(".compost1").css("opacity", "1");
     $(".unrecyclable1").css("opacity", "1");
     $(".all1").css("opacity", "1");
});
     $(".compost").hover(function(){
     $(".compost1").css("opacity", "1");



});

});

