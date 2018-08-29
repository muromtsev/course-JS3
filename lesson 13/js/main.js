$(document).ready(function() {
$('.main_btna').on('click', showModal);
$('.main_btn').on('click', showModal);
$('nav ul li:eq(1) a').on('click', showModal);

function showModal() {
	$('.overlay').animate({
		opacity: 'show'
	}, 1200);
	$('.modal').css('top', '-100%');
	$('.modal').show().animate({
		'top': '10%'
	}, 1000);
	$('.close').on('click', function() {
		$('.modal').toggle().animate({
			'top': '-100%'
		}, 1000);
		$('.overlay').animate({
			opacity: 'hide'
		}, 1200);
	});
}

});//document