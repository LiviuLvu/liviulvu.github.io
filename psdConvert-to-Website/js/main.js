// when toggling classes, first select elements

$(document).ready(function() {
   //toggle menu icon to close icon
   $('.icon-menu').on('click', function() {
      $(this).siblings().toggleClass('a-container-show');
      $('.icon-menu').toggleClass('menu-close');
   });
});
