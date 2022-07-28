window.addEventListener('load', function(){
	
	let menu = document.querySelector('.menu');
	let posTop = window.pageYOffset;
	let arrowTop = document.querySelector('#arrowTop');
	if (posTop>892){ 
	alert(posTop) 
	}

	menu.addEventListener('click', function(e){
		let link = e.target;
		// let posTop = window.pageYOffset;
		// console.log(posTop)

		if(link.classList.contains('menu__link')){
			e.preventDefault();

			menu.querySelector('.menu__link-active').classList.remove('menu__link-active');
			link.classList.add('menu__link-active');
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
		if (window.pageYOffset < document.documentElement.clientHeight) {
			arrowTop.hidden = true
		} else arrowTop.hidden = false
	  });
});