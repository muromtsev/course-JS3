(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
window.addEventListener('DOMContentLoaded', function() {

	let tab 	= require('../parts/tab.js');
	let timer 	= require('../parts/timer.js');
	let modal 	= require('../parts/modal.js');
	let ajax 	= require('../parts/ajax.js');
	let slider 	= require('../parts/slider.js');
	let scroll 	= require('../parts/scroll.js');
	let calc 	= require('../parts/calc.js');

	tab();
	timer();
	modal();
	ajax();
	slider();
	scroll();
	calc();
		
		
});//window
},{"../parts/ajax.js":2,"../parts/calc.js":3,"../parts/modal.js":4,"../parts/scroll.js":5,"../parts/slider.js":6,"../parts/tab.js":7,"../parts/timer.js":8}],2:[function(require,module,exports){
function ajax() {
	let message = new Object();
		message.loading = 'Загрузка...';
		message.success = 'Спасибо! Скоро мы с вами свяжимся';
		message.failure = 'Что-то пошло не так...';

		let form 			= document.getElementsByClassName('main-form')[0],
			input 			= form.getElementsByTagName('input'),
			statusMessage 	= document.createElement('div'),
			statusForm 		= document.querySelector('.status-form'),
			close 			= document.querySelector('.popup-close'),
			statusClose 	= document.querySelector('.status-close');
			statusMessage.classList.add('status');


		form.addEventListener('submit', function(event) {
			event.preventDefault();
			form.appendChild(statusMessage);
			
			//AJAX
		
			let request = new XMLHttpRequest();
			request.open('POST', 'server.php')

			request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

			let formData = new FormData(form);

			request.send(formData);

			request.onreadystatechange = function() {
				if(request.readyState < 4) {

					//statusMessage.innerHTML = message.loading;
					console.log(message.loading);
				}
				else if(request.readyState === 4) {
					if(request.status == 200 && request.status < 300) {
						statusForm.style.display = 'block';

						statusClose.addEventListener('click', () => {
							statusForm.style.display = 'none';
						});
						//statusMessage.innerHTML = message.success;
						//statusMessage.style.background = "url('https://media.tenor.com/images/6894e9dc3a96c9fe13bba3c7517d0280/tenor.gif') no-repeat center";
						console.log(message.success);
					}
					else {
						statusMessage.innerHTML = message.failure;
						console.log(message.failure);
					}
				}
			}
			for (let i = 0; i < input.length; i++) {
				input[i].value = '';
			}
		});

		//Form contacts 
		
		let contactForm = document.getElementById('form'),
			contactForm_input = contactForm.getElementsByTagName('input');

		contactForm.addEventListener('submit', function(event) {
			event.preventDefault();
			contactForm.appendChild(statusMessage);
					
			let request = new XMLHttpRequest();
			request.open('POST', 'server.php')

			request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

			let formData = new FormData(form);

			request.send(formData);

			request.onreadystatechange = function() {
				if(request.readyState < 4) {
					//statusMessage.innerHTML = message.loading;
					console.log(message.loading);
				}
				else if(request.readyState === 4) {
					if(request.status == 200 && request.status < 300) {
						statusForm.style.display = 'block';
						statusClose.addEventListener('click', () => {
							statusForm.style.display = 'none';
						});
						//statusMessage.style.background = "url('https://media.tenor.com/images/6894e9dc3a96c9fe13bba3c7517d0280/tenor.gif') no-repeat center";
						console.log(message.success);
					}
					else {
						statusMessage.innerHTML = message.failure;
						console.log(message.failure);
					}
				}
			}
			for (let i = 0; i < contactForm_input.length; i++) {
				contactForm_input[i].value = '';
			}
		});
}

module.exports = ajax;
},{}],3:[function(require,module,exports){
function calc() {
	let persons 	= document.getElementsByClassName('counter-block-input')[0],
			restDays 	= document.getElementsByClassName('counter-block-input')[1],
			place 		= document.getElementById('select'),
			totalValue 	= document.getElementById('total'),
			personsSum 	= 0,
			daysSum 	= 0,
			total 		= 0;

			totalValue.innerHTML = 0;

			persons.addEventListener('change', function() {
				personsSum = +this.value;
				total = (daysSum + personsSum) * 4000;

				if(restDays.value == '') {
					totalValue.innerHTML = 0;
				} 
				else if(restDays.value != '' && persons.value == '') {
					totalValue.innerHTML = 'оба поля заполните'
				}
				else {
					totalValue.innerHTML = total;
				};

			});//persons

			restDays.addEventListener('change', function() {
				daysSum = +this.value;
				total = (daysSum + personsSum) * 4000;
			
				if(persons.value == '') {
					totalValue.innerHTML = 0;
				} 
				else if(restDays.value == '' && persons.value != '') {
					totalValue.innerHTML = 'оба поля заполните'
				} 
				else {
					totalValue.innerHTML = total;
				};				

			});//restDays

			place.addEventListener('change', function() {
				if(restDays.value == '' || persons.value == '') {
					totalValue.innerHTML = 0;
				} else {
					let a = total;
					totalValue.innerHTML = a * this.options[this.selectedIndex].value;
				}
				
			});//place

			persons.addEventListener('keyup', onlyNumber);
			restDays.addEventListener('keyup', onlyNumber);

			function onlyNumber(event) {	
	            if(event.which == 69 || event.which == 190 || event.which == 110 || event.which == 188 || event.which == 191) {
	            	alert('Только цифры!');
	            	this.value = '';
	            }		            		
			}
}

module.exports = calc;
},{}],4:[function(require,module,exports){
function modal() {
	function showModal(id) {
			let overlay = document.querySelector('.overlay'),
				close 	= document.querySelector('.popup-close');

			if(!id.length) {
				id.addEventListener('click', addMoreSplash);
				close.addEventListener('click', removeMoreSplash);
			} 
			else if(id.length) {
				for(let i = 0; i < id.length; i++) {
					id[i].addEventListener('click', addMoreSplash);
					close.addEventListener('click', removeMoreSplash);
				}
			}
			function addMoreSplash() {
				this.classList.add('more-splash');
				overlay.style.display = 'block';
				document.body.style.overflow = 'hidden';
			}
			function removeMoreSplash() {
				overlay.style.display = 'none';
				this.classList.remove('more-splash');
				document.body.style.overflow = '';
			}			
		};

		showModal(document.querySelector('.more'));
		showModal(document.querySelectorAll('.description-btn'));
}

module.exports = modal;
},{}],5:[function(require,module,exports){
function scroll() {
	var linkNav = document.querySelectorAll('[href^="#"]'),
	    	V 		= .4;
	    	
		for (var i = 0; i < linkNav.length; i++) {
		    linkNav[i].addEventListener('click', function(e) { 
		        e.preventDefault(); 
		        var w 		= window.pageYOffset,  
		        	hash 	= this.href.replace(/[^#]*(.*)/, '$1'); 
		        	t 		= document.querySelector(hash).getBoundingClientRect().top,
		            start 	= null;

		        requestAnimationFrame(step);  
		        function step(time) {
		            if (start === null) start = time;
		            var progress	= time - start,
		               	r 			= (t < 0 ? Math.max(w - progress/V, w + t) : Math.min(w + progress/V, w + t));
		            window.scrollTo(0,r);
		            if (r != w + t) {
		                requestAnimationFrame(step)
		            } else {
		                location.hash = hash
		            }
		        }
		    }, false);
		}
}

module.exports = scroll;
},{}],6:[function(require,module,exports){
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
},{}],7:[function(require,module,exports){
function tab() {
	let tab 		= document.getElementsByClassName('info-header-tab'),
		tabContent 	= document.getElementsByClassName('info-tabcontent'),
		info 		= document.getElementsByClassName('info-header')[0];

		function hideTabContent(a) {
			for(let i = a; i < tabContent.length; i++) {
				tabContent[i].classList.remove('show');
				tabContent[i].classList.add('hide');
			}
		}

		hideTabContent(1);

		function showTabContent(b) {
			if(tabContent[b].classList.contains('hide')) {
				hideTabContent(0);
				tabContent[b].classList.remove('hide');
				tabContent[b].classList.add('show');
			}
		}

		info.addEventListener('click', function(e) {
			let target = event.target;
			if(target.className == 'info-header-tab') {
				for(let i = 0; i < tab.length; i++) {
					if(target == tab[i]) {
						showTabContent(i);
						break;
					}
				}
			}
		});
}

module.exports = tab;
},{}],8:[function(require,module,exports){
function timer() {
	let deadline = '2018-09-03';

		function getTimeRemaining(endtime) {
			let t 		= Date.parse(endtime) - Date.parse(new Date()),
				seconds = Math.floor( (t/1000) % 60),
				minutes = Math.floor( (t/1000/60) % 60),
				hours 	= Math.floor( (t/(1000*60*60)) );

				return {
					'total' 	: t,
					'hours'		: hours,
					'minutes'	: minutes,
					'seconds'	: seconds
				};
		};

		function setClock(id, endtime) {

			let timer 	= document.getElementById(id),
				hours 	= timer.querySelector('.hours'),
				minutes = timer.querySelector('.minutes'),
				seconds = timer.querySelector('.seconds');

				function addZero(num) {
					if(num <= 9) {return '0' + num}
						else {return num}					
				};

			function updateClock() {
				let t 				= getTimeRemaining(endtime);
				hours.innerHTML 	= addZero(t.hours);
				minutes.innerHTML 	= addZero(t.minutes);
				seconds.innerHTML 	= addZero(t.seconds);
				
				//console.log(t);				

				if(t.total <= 0) {
					hours.innerHTML 	= addZero(0);
					minutes.innerHTML 	= addZero(0);
					seconds.innerHTML 	= addZero(0);
					clearInterval(timeInterval);
				}
			};
			let timeInterval = setInterval(updateClock, 1000);
			updateClock();			
		};

		setClock('timer', deadline);
}

module.exports = timer;
},{}]},{},[1]);
