$('.nav-item').click(function() {

  $('.nav-item').removeClass('active');  
  $(this).addClass('active');  

  console.log($(this));

  var button_name = $(this).data('button');
  console.log(button_name)

  $('.content').attr('class', 'column content'); 

  $('.content').addClass(button_name); 

if(button_name == 'beyonce') {
  $('.slay').removeClass('hide'); 
}
 
});
