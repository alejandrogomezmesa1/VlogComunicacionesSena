// Slider automático de fotos de los integrantes
const sliderFotos = [
	{ src: 'Alejo3.png', caption: 'Alejandro Gómez' },
	{ src: 'Alejo2.png', caption: 'Alejandro Gómez' },
	{ src: 'SamuelM.png', caption: 'Samuel Marín' },
	{ src: 'SamuelP.jpg', caption: 'Samuel Pérez' },
	{ src: 'SamuelP1.jpg', caption: 'Samuel Pérez' }
];
let idxSlider = 0;
setInterval(() => {
	idxSlider = (idxSlider + 1) % sliderFotos.length;
	const img = document.getElementById('sliderImg');
	const caption = document.getElementById('sliderCaption');
	if (img && caption) {
		img.style.opacity = 0;
		setTimeout(() => {
			img.src = sliderFotos[idxSlider].src;
			caption.textContent = sliderFotos[idxSlider].caption;
			img.style.opacity = 1;
		}, 400);
	}
}, 2000);
