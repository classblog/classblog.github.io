let url = window.location.pathname;
let resize = () => { 
	$('#break').css('margin-top', $('nav').height());
	let footer = $('#footer').height();
	console.log(footer);
	$('aside#content').css('min-height', `calc(100vh - ${footer})`);
}
$(window).resize(resize);
resize();