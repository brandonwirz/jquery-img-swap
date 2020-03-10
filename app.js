jQuery(document).ready(function($){

$('.asia-button').on({'click': function(){
         $('#change-image').attr('src','images/adventure-asia-background.jpg').hide().fadeIn(500);
     }
 });

$('.clouds-button').on({'click': function(){
         $('#change-image').attr('src','images/adventure-clouds-dawn.jpg').hide().fadeIn(500);
     }
 });

$('.aurora-button').on({'click': function(){
         $('#change-image').attr('src','images/aurora-borealis.jpg').hide().fadeIn(500);
     }
 });

$('.conifer-button').on({'click': function(){
         $('#change-image').attr('src','images/clouds-conifer-daylight.jpg').hide().fadeIn(500);
     }
 });
});
