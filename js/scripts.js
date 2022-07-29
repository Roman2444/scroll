window.addEventListener('load', function(){
	
	let menu = document.querySelector('.menu');
	let links = menu.querySelectorAll('a') 
	let arrowTop = document.querySelector('#arrowTop');
	arrowTop.hidden = true

	menu.addEventListener('click', function(e){
		let link = e.target;

		if(link.classList.contains('menu__link')){
			e.preventDefault();

			scrollToTarget(link.hash);
		}
	});

	if(location.hash !== ''){
		scrollToTarget(location.hash);
	}

	function scrollToTarget(id){
		let target = document.querySelector(id);

		if(target !== null){
			let pos = target.offsetTop - 70;

			window.scrollTo({
				top: pos,
				behavior: 'smooth'
			});

			/* window.scrollTo(0, pos); */
		}
	}

	arrowTop.addEventListener('click', function(){
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		});
		// после scrollTo возникнет событие "scroll", так что стрелка автоматически скроется
	  });
  
	  window.addEventListener('scroll', function() {
		let posTop = window.pageYOffset;
		if (posTop < document.documentElement.clientHeight) {
			arrowTop.hidden = true
		} else arrowTop.hidden = false

		for(let i = links.length - 1; i >= 0; i-- ){
			let link = links[i];
			let target = document.querySelector(link.hash)
			menu.querySelector('.menu__link-active').classList.remove('menu__link-active');
			link.classList.add('menu__link-active');

			if(posTop > target.offsetTop - 70){
				break;
			}
		}
	  });
});