const progress = document.getElementById('progress');
const previous = document.getElementById('previous');
const next = document.getElementById('next');
const colorBtn = document.getElementById('color-button');
const defaultBtn = document.getElementById('default-button');
const circles = document.querySelectorAll('.circle');

let currentActive = 1;

next.addEventListener('click', () => {
	currentActive++;
	// This is just bounds checking. We have four circles, so we want the current active to stay at 4.
	if (currentActive > circles.length) currentActive = circles.length;
	update();
});

previous.addEventListener('click', () => {
	currentActive--;
	// Again, just bounds checking. This is to make sure current active doesn't go below 1. The range is 1 - 4.
	if (currentActive < 1) currentActive = 1;
	update();
});

colorBtn.addEventListener('click', () => {
	let rgbString =
		'rgb(' +
		Math.floor(Math.random() * 256) +
		', ' +
		Math.floor(Math.random() * 256) +
		', ' +
		Math.floor(Math.random() * 256) +
		')';
	document.documentElement.style.setProperty('--line-border-fill', rgbString);
});

defaultBtn.addEventListener('click', () => {
	document.documentElement.style.setProperty('--line-border-fill', 'red');
});

function update() {
	circles.forEach((circle, idx) => {
		if (idx < currentActive) {
			circle.classList.add('active');
		} else {
			circle.classList.remove('active');
		}
	});

	const actives = document.querySelectorAll('.active');

	// This is simple. We subtracted one so that it checks for percentages in terms of 1/3,2/3,3/3 or 33%,66%,99%
	progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%';

	if (currentActive === 1) {
		previous.disabled = true;
	} else if (currentActive === circles.length) {
		next.disabled = true;
	} else {
		previous.disabled = false;
		next.disabled = false;
	}
}
