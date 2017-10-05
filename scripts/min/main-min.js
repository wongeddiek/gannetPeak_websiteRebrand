var textBarBox = $('.text-bar-box');

textBarBox.on('click', function(){
  // add class text-bar-active to clicked element and remove it to sibling elements
  $(this).children().addClass('text-bar-active');
  $(this).siblings().children().removeClass('text-bar-active');

  // grabbing the data attribute of the clicked element
  var clickedText = $(this).attr('data-text');

  $(`#${clickedText}`).siblings().hide();
  $(`#${clickedText}`).show();

  $('.btn-main').html(`more on ${clickedText.replace(/-/," ")} &nbsp; <i id="btn-play" class="fa fa-play" aria-hidden="true"></i>`);
});


