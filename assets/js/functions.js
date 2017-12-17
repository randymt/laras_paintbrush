$(function() {
	navToggle();
	stageToggle();
	workLoad();
	openStage();
});



function navToggle() {
	$('.mobile-nav-toggle').on('click', function() {
		$('.mobile-nav').toggleClass('is-open');
	});
}

function stageToggle() {
  $('.stage-toggle').on('click', function() {
     $('.gallery-stage-container').toggleClass('stage-open');
   });
}

function openStage() {
	$('.show-full').on('click', function() {
		$('.gallery-stage-container').addClass('stage-open');
	});
}


function workLoad () {

	$.ajaxSetup({ cache: true });

	$('.thumb-unit').click(function () {
		
		var $this = $(this),
			newFolder = $this.data('folder'),
			spinner = '<div class="loader">Loading...</div>',
			newHTML = 'painting-loads/'+ newFolder +'.html';

		$('.painting-load').html(spinner).load(newHTML);

	});
}

