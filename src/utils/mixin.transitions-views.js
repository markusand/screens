export default {
	mounted() {
		const elements = document.querySelectorAll('[data-animate]');
		elements.forEach(element => {
			const { animate, delayIn, delay = 0 } = element.dataset;
			element.style.animationDelay = `${delayIn || delay}ms`;
			element.classList.add(`${animate}-in`);
		});
	},
	beforeRouteLeave(to, from, next) {
		const elements = document.querySelectorAll('[data-animate]');
		if (elements.length === 0) next();
		let animated = 0;
		elements.forEach(element => {
			element.addEventListener('animationend', event => {
				event.stopPropagation();
				animated += 1;
				if (animated === elements.length) next();
			});
			const { animate, delayOut, delay = 0 } = element.dataset;
			element.classList.remove(`${animate}-in`);
			/* Hack [!] Reflow needed to rerun animation */
			element.clientHeight; // eslint-disable-line
			element.classList.add(`${animate}-out`);
			element.style.animationDelay = `${delayOut || delay}ms`;
		});
	},
};
