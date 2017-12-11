
// Smooth Scrolling
$(document).ready(function coolScroll() {
	
	$("#gallery-link").click(function() {
		$path=$("#gallery").offset().top;
			$('body').animate({scrollTop:$path},1000);
	});

	console.log('coolScroll');
});

$(function(){
  $('.stage-toggle').on('click', function() {
     $('.gallery-stage-container').toggleClass('stage-open');
   });
});