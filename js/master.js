let url = window.location.pathname;
let resize = () => { 
	$('#break').css('margin-top', $('nav').height());
}
$(window).resize(resize);
resize();