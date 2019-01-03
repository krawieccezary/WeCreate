var burger = document.getElementsByClassName('nav-burger')[0];
var nav = document.getElementsByClassName('nav')[0];

function openMenuRWD() {
   burger.classList.toggle('active-burger');
   nav.classList.toggle('open-RWD');
}

burger.addEventListener('click', openMenuRWD);



$(function(){


   // SCROLL TO
   
   function scrollTo(){
         var $div = $(this.hash);
         var $divTop = $div.offset().top;

         $(burger).removeClass('active-burger');
         $(nav).removeClass('open-RWD');
         $('html, body').animate({
            scrollTop: $divTop
         }, 800);

      };

   $('.nav a').on('click', scrollTo);
}); // jQuery END
