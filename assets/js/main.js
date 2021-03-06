/*
 *    Version: 1.0.1
 *     Author: Ali Mahmudlu (alimahmudlu)
 *    Website: http://alimahmudlu.github.io
 *     Github: https://github.com/alimahmudlu/
 *       Repo: https://github.com/alimahmudlu/d-tech.az/
 *  Telephone: +994708550235
 *      Email: alimahmudlu@gmail.com
*/

$(document).on('click', '.section_navbar_container_toggle', function () {
	$('.section_navbar_container_mobileMenu').toggleClass('active')
})

$(document).on('click', '.searchBtn:not(.active)', function (e) {
	e.preventDefault();
	$('.searchGroup').addClass('active')
	$(this).addClass('active')
})
$(document).on("click", function(event){
	if(!$(event.target).closest(".searchGroup").length){
		$('.searchGroup').removeClass('active')
		$('.searchBtn').removeClass('active')
	}
});


$('.section_ourServicesPage_body_items_item').hover(function (e) {
	$('.section_ourServicesPage_body_items_item').not($(this)).addClass('blur')
	$(this).addClass('blurInner')
	// $(this).children('.section_weFixIt_body_items_item_body').fadeIn('slow')
}, function () {
	$('.section_ourServicesPage_body_items_item').not($(this)).removeClass('blur')
	$(this).removeClass('blurInner')
	// $(this).children('.section_weFixIt_body_items_item_body').fadeOut('slow')
})

$('.section_weFixIt_body_items_item').hover(function () {
	$('.section_weFixIt_body_items_item').not($(this)).addClass('blur');
	$(this).addClass('inBlur');
	$(this).children('.section_weFixIt_body_items_item_body').stop(true, true).fadeIn('300')
}, function () {
	$('.section_weFixIt_body_items_item').not($(this)).removeClass('blur');
	$(this).removeClass('inBlur');
	$(this).children('.section_weFixIt_body_items_item_body').stop(true, true).fadeOut('300')
})

console.log($(window).height())

$(document).on('click', '.scrollDown-link', function (e) {
	e.preventDefault();
	$('html, body').animate({
		scrollTop: $(window).height()
	}, 300);
})