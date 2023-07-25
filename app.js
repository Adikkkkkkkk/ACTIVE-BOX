$(function () {
	// FIXED HEADER
	let header = $('#header')
	let scrollPos = $(window).scrollTop()
	let headerH = header.innerHeight()

	// NAV
	let nav = $('#nav')
	let navToggle = $('#navToggle')

	checkScroll(scrollPos, headerH)

	$(window).on('scroll resize', function () {
		headerH = header.innerHeight()

		scrollPos = $(this).scrollTop()

		checkScroll(scrollPos, headerH)
	})

	function checkScroll(scrollPos, headerH) {
		if (scrollPos > headerH) {
			header.addClass('fixed')
		} else {
			header.removeClass('fixed')
		}
	}

	// SMOOTH SCROLL
	$('[data-scroll]').on('click', function (event) {
		event.preventDefault()

		let elementID = $(this).data('scroll')
		let elementOffset = $(elementID).offset().top

		nav.removeClass('show')

		$('html, body').animate(
			{
				scrollTop: elementOffset - 70,
			},
			700
		)
	}) // [data-scroll]

	// NAV TOGGLE

	navToggle.on('click', function (event) {
		event.preventDefault()

		nav.toggleClass('show')
	})

	// REVIEWS https://kenwheeler.github.io/slick/
	let slider = $('#reviewsSlider')

	slider.slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		fade: true,
		arrows: false,
		dots: true,
	})
})
