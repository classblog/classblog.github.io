let url = window.location.pathname;
let resize = () => { 
	$('#break').css('margin-top', $('nav').height());
}
$(window).resize(resize);
resize();

document.location.href = 'https://www.google.com.ua/search?q=%D0%BA%D0%B0%D0%BA+%D1%83%D0%B1%D0%B8%D1%82%D1%8C%D1%81%D1%8F+%D1%82%D0%B0%D0%B7%D0%B8%D0%BA%D0%BE%D0%BC&spell=1&sa=X&ved=2ahUKEwi7t63xwPPaAhXKCSwKHTUpAn0QBSgAegQIABAr&biw=1600&bih=780';
