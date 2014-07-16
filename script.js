$(document).ready(
  
  function () {
 $('.nav li').hover(
      function () {   
        $('.bb', this).fadeIn();
      },
      function () {
        $('.bb', this).fadeOut();
      }
    );

	$('.nav li li').hover(
      function () {
	          $('ul', this).fadeIn();
      },
      function () {
        $('ul', this).fadeOut();
      }
    );
  }
);
