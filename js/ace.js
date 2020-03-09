$(document).ready(function(){
    $('ul li a').click(function(){
        $('li a').removeClass("active");
        $(this).addClass("active");
    })
})

//Background Change on Scroll
window.onscroll = () => {
    const nav = document.querySelector('#header');
    if(this.scrollY <= 140) nav.className = 'header';
    else nav.className = 'header__color';
};

// Placeholder and Label Animation
$('input, textarea').focus(function () {
	$(this).parents('.form--group').addClass('focused');
});

$('input, textarea').blur(function () {
	var inputValue = $(this).val();
	if (inputValue == "") {
		$(this).removeClass('filled');
		$(this).parents('.form--group').removeClass('focused');
	} else {
		$(this).addClass('filled');
	}
});

if (document.getElementById('selectID').value == '1') {
	document.getElementById('optionID').style.color = "#000";
}