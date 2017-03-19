

$(document).ready(function(){ 
   $('.scrollToContact').on('click', function(){  
       var scrollToElement = document.getElementById('contact');
       scrollToElement.scrollIntoView({ block: 'start' , behavior: "smooth"});
   });

   $('#mailer_submit').html('Üzenet küldése');
   $('.discover_button').html('Ajánlj sorozatokat').css({'float' : 'right'});
   $('.search_button').html('Keresés <img src="assets/img/search-strong.png">');

   $('.panel').hover(function(){
       $(this).css({'box-shadow' : '3px 4px 15px #b15315'});}, function(){
           $(this).css({'box-shadow' : '3px 4px 15px #222'});
   });
   $('.lista-recent').hover(function(){
       $(this).css({'box-shadow' : '3px 4px 15px #b15315'});}, function(){
           $(this).css({'box-shadow' : '3px 4px 15px #222'});
   });
  
   


});
        
 function goBack(){
    window.history.back();
}