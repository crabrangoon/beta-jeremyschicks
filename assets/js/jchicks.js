$('.navbar .navbar-toggler.custom-toggler').on( "click", function(e) {
	e.preventDefault();
	if ($('#navbarNav').hasClass('show')) {
		$('.main .overwhite').hide();
	} else {
		$('.main .overwhite').show();
	}
});

$(document).ready(function() {
    $('.navbar-toggler.custom-toggler ').addClass('collapsed');
});
	

