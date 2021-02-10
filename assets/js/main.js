$(document).on('click', '.section_navbar_container_toggle', function () {
	$('.section_navbar_container_mobileMenu').toggleClass('active')
})

$(document).on('click', '.searchBtn:not(.active)', function (e) {
	e.preventDefault();
	$('.searchGroup').addClass('active')
	$(this).addClass('active')
})