$(function() {
	// header
	const $mainNav = $('#js-main-nav');
	const $navMenuBtn = $mainNav.find('.nav-menu-btn');
	$navMenuBtn.on('click', function() {
		$mainNav.toggleClass('active');
	});

	// swiper - feature
	var featureSwiper = new Swiper("#featureSwiper", {
		effect: "coverflow",
		grabCursor: true,
		centeredSlides: true,
		slidesPerView: "auto",
		initialSlide: 1,
		coverflowEffect: {
			rotate: 50,
			stretch: 0,
			depth: 100,
			modifier: 1,
			slideShadows: true,
		},
    });

	// swiper - video
	var videoSwiper = new Swiper("#videoSwiper", {
		slidesPerView: 1,
		navigation: {
			nextEl: ".video-slide-wrap .swiper-button-next",
			prevEl: ".video-slide-wrap .swiper-button-prev",
		},
    });

	// swiper - course (stagePaddingLeft)
	// let stagePaddingLeft = 0;
	// function updateStagePaddingLeft() {
	// 	stagePaddingLeft = window.innerWidth * 0.15;
	// 	// console.log('stagePaddingLeft', stagePaddingLeft);
	// }
	// updateStagePaddingLeft();
	// let courseResizeTimer;
	// window.addEventListener('resize', () => {
	// 	clearTimeout(courseResizeTimer);
	// 	courseResizeTimer = setTimeout(function() {
	// 		updateStagePaddingLeft();
	// 	}, 300);
	// });

	// swiper - course
	var courseSwiper = new Swiper("#courseSwiper", {
		loop: true,
		// centeredSlides: true,
		navigation: {
			nextEl: ".course-slide-wrap .swiper-button-next",
			prevEl: ".course-slide-wrap .swiper-button-prev",
		},
		breakpoints: {
			0: {  // 0 ~ 991
				slidesPerView: 1,
				// slidesOffsetBefore: 0, // 手機通常不留白
			},
			992: {  // >= 992
				slidesPerView: "auto",
				// slidesOffsetBefore: stagePaddingLeft,
			},
		},
    });
	
	

	// init AOS
	// AOS.init();
})