function slider() {
	let sliderIndex = 1,
			slides 		= document.getElementsByClassName('slider-item'),
			prev 		= document.querySelector('.prev'),			
			next 		= document.querySelector('.next'),
			dotsWrap	= document.querySelector('.slider-dots'),
			dots 		= document.getElementsByClassName('dot');

			showSlides(sliderIndex);

		function showSlides(n) {
			if(n > slides.length) {
				sliderIndex = 1;
			};
			if(n < 1) {
				sliderIndex = slides.length;
			};

			for(let i = 0; i < slides.length; i++) {
				slides[i].style.display = 'none';
			};

			for(let i = 0; i < dots.length; i++) {
				dots[i].classList.remove('dot-active');
			};

			slides[sliderIndex - 1].style.display = 'block';
			dots[sliderIndex - 1].classList.add('dot-active');
		} //showSlider

		function plusSlides(n) {
			showSlides(sliderIndex += n);
		}
		function currentSlide(n) {
			showSlides(sliderIndex = n);
		}

		prev.addEventListener('click', function() {
			plusSlides(-1);
		});
		next.addEventListener('click', function() {
			plusSlides(1);
		});

		dotsWrap.addEventListener('click', function(event) {
			for(let i = 0; i < dots.length + 1; i++) {
				if(event.target.classList.contains('dot') && event.target == dots[i - 1]) {
					currentSlide(i);
				}
			}
		});

}

module.exports = slider;