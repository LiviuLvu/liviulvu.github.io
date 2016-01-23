$(document).ready(function() {
   $('.icon-menu').on('click', function() {
      //show menu items
      $(this).siblings().toggleClass('a-container-show');
      //toggle between menu icon and close icon
      $(this).toggleClass('close thick');
   });
});
