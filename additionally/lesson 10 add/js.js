let phone = document.getElementById('phone');

//console.log(phone);

phone.addEventListener('keyup', (e) => {

	phone.value = phone.value.replace(/[^\d]/g, '');

	
})