$(function() {
	stageToggle();
	workLoad();
});





function stageToggle() {
  $('.stage-toggle').on('click', function() {
     $('.gallery-stage-container').toggleClass('stage-open');
     $('.primary-title').toggleClass('stage-open');
   });
}


function workLoad () {

	$.ajaxSetup({ cache: false });

	$('.thumb-unit').click(function () {
		
		var $this = $(this),
			newFolder = $this.data('folder'),
			spinner = '<div class="loader">Loading...</div>',
			newHTML = 'painting-loads/'+ newFolder +'.html';

		$('.painting-load').html(spinner).load(newHTML);

	});
}