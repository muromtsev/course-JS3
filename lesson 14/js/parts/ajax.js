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