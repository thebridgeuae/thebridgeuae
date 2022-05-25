(function() {
    setTimeout(() => {
		const scroll = new LocomotiveScroll({
			el: document.querySelector('#js-scroll'),
			smooth: true,
			getSpeed: true,
			getDirection: true,
                        inertia: 0.75,
			useKeyboard: true
		});

		scroll.on('scroll', (instance) => {
			const progress = 360 * instance.scroll.y / instance.limit;

			document.documentElement.setAttribute('data-direction', instance.direction)

		});
		scroll.update();
}, 1000)
		
})();  