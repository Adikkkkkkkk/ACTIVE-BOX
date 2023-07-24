$(function () {
	let header = $('#header')
	let scrollPos = $(window).scrollTop()
	let headerH

	$(window).on('scroll load resize', function () {
		headerH = header.innerHeight()

		scrollPos = $(this).scrollTop()

		if (scrollPos > headerH) {
			header.addClass('fixed')
		} else {
			header.removeClass('fixed')
		}
	})
})
