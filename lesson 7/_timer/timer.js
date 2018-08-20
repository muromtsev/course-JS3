let timerId = setTimeout(function timer() {

	let date = new Date();	

	document.querySelector('.time').innerHTML = `${addZero(date.getHours())}:${addZero(date.getMinutes())}:${addZero(date.getSeconds())}`;

	timerId = setTimeout(timer, 1000);

}, 1000);

// add zero
function addZero(num) {
	if(num <= 9) return '0' + num;
	else return num;
}


