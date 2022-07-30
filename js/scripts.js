window.addEventListener('load', function(){
	
	let menu = document.querySelector('.menu');
	let links = menu.querySelectorAll('a') 
	let arrowTop = document.querySelector('#arrowTop');
	arrowTop.hidden = true;
	let lastScroll = 0;

	window.addEventListener('scroll', function(){ 
		let current = Date.now();
		
		if(current > lastScroll + 100 ){
			onScroll();
			lastScroll = current;
		}
  });

  function onScroll (){
	console.log(1)
	let posTop = window.pageYOffset;
	if (posTop < document.documentElement.clientHeight) {
		arrowTop.hidden = true
	} else arrowTop.hidden = false

	for(let i = links.length - 1; i >= 0; i-- ){
		let link = links[i];
		let target = document.querySelector(link.hash)

		if((posTop + window.innerHeight / 2)  > target.offsetTop){
			menu.querySelector('.menu__link-active').classList.remove('menu__link-active');
			link.classList.add('menu__link-active');
			break;
		}
	}
  }

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
});