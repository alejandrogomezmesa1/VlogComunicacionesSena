// Slider automático de fotos de los integrantes
const sliderFotos = [
	{ src: 'img/Alejo3.png', caption: 'Alejandro Gómez' },
	{ src: 'img/Alejo2.png', caption: 'Alejandro Gómez' },
	{ src: 'img/samuelM.png', caption: 'Samuel Marín' },
	{ src: 'img/SamuelP.jpg', caption: 'Samuel Pérez' },
	{ src: 'img/SamuelP1.jpg', caption: 'Samuel Pérez' }
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
