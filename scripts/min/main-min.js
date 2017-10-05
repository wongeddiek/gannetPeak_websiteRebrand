var textBarBox = $('.text-bar-box');

textBarBox.on('click', function(){
  $(this).children().addClass('text-bar-active');
  $(this).siblings().children().removeClass('text-bar-active');
});


