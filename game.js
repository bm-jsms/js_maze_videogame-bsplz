const canvas = document.querySelector('#game');

const ctx = canvas.getContext('2d');

// window.addEventListener('load', () =>
// 	alert('Press F11 for a greater experience'),
// );

let canvasSize;
let elementSize;

const setCanvasSize = () => {
	if (window.innerHeight > window.innerWidth) {
		canvasSize = window.innerWidth * 0.85;
	} else {
		canvasSize = window.innerHeight * 0.85;
	}

	canvas.setAttribute('width', canvasSize);
	canvas.setAttribute('height', canvasSize);

	elementSize = canvasSize / 10;

	startGame();
};

const startGame = () => {
	ctx.font = elementSize + 'px sans';
	ctx.textAlign = 'end';

	for (let i = 1; i <= 10; i++) {
		ctx.fillText(emojis['X'], elementSize * i, elementSize);
	}
};

window.addEventListener('load', setCanvasSize);
window.addEventListener('resize', setCanvasSize);
