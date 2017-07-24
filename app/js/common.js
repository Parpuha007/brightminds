$(document).ready(function () {
	$('.nav-remove').on('click', function () {
		$('.header-nav').css({
			display : "none"
		});
		$('.nav-add').css({
			display : 'block'
		});
	});
	$('.nav-add').on('click', function () {
		$('.header-nav').css({
			display : "block"
		});
		$('.nav-add').css({
			display : 'none'
		});
	});
})