jQuery(document).ready(function($){

$('.black-button').on({
     'click': function(){
         $('#change-image').attr('src','images/black.jpg').hide().fadeIn(500);
     }
 });

$('.red-button').on({
     'click': function(){
         $('#change-image').attr('src','images/red.jpg').hide().fadeIn(500);
     }
 });

$('.blue-button').on({
     'click': function(){
         $('#change-image').attr('src','images/blue.jpg').hide().fadeIn(500);
     }
 });

$('.yellow-button').on({'click': function(){
         $('#change-image').attr('src','images/yellow.jpg').hide().fadeIn(500);

     }
 });


});


function handleThumbnailClicks() {
  $('.thumbnail').on('click', function(e) {
    const imgSrc = $(this).find('img').attr('src');
    const imgAlt = $(this).find('img').attr('alt');

   $('.hero img').attr('src', imgSrc).attr('alt', imgAlt);
  });
}

$(handleThumbnailClicks);
