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