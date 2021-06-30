const loadingText = document.querySelector('.loading-text');
const bg = document.querySelector('.bg');

let load = 0;

let interval = setInterval(blurring, 30);

function blurring() {
	load++;

	if (load > 99) {
		clearInterval(interval);
	}
	loadingText.innerText = `${load}%`;
	let opacityChange = scale(load, 0, 100, 1, 0);
	loadingText.style.opacity = opacityChange;
	let blurChange = scale(load, 0, 100, 30, 0);
	bg.style.filter = `blur(${blurChange}px)`;
}

function scale(num, inMin, inMax, outMin, outMax) {
	return (num - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}
