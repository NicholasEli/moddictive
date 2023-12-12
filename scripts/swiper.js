import Swiper from 'swiper';

export const swiper = function () {
	const swipers = document.querySelectorAll('[data-swiper]');

	swipers.forEach((swiper) => {
		const id = swiper.getAttribute('data-swiper');
		const _swiper = new Swiper(`[data-swiper="${id}"]`, {
			direction: 'horizontal'
		});
	});
};

export default swiper;
