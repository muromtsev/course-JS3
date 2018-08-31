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