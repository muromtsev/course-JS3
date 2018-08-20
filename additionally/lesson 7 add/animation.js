let block 	= document.querySelector('.block'),
	btn 	= document.querySelector('.btn');


btn.onclick = function() {
	animate(function(timePassed) {
		block.style.left = timePassed / 2 + 'px';
		block.style.borderRadius = timePassed / 15 + 'px';
		block.style.borderWidth = timePassed / 80 + 'px';
		block.style.borderStyle = 'solid';
		block.style.borderColor = 'red';

	}, 1000);

}


function animate(draw, duration) {
	let start = performance.now();

	requestAnimationFrame(function animate(time) {
		let timePassed = time - start;

		if(timePassed > duration) timePassed = duration;

		draw(timePassed);

		if(timePassed < duration) {
			requestAnimationFrame(animate);
		}
	});
}



























// let animation = block.animate([
// 	{ transform: 'translate(0)'},
// 	{ transform: 'translate(150px, 200px)' }
// 	], 500);
// animation.addEventListener('finish', function() {
//   block.style.transform = 'translate(150px, 200px)';
// });
