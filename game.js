const canvas = document.querySelector('#game');

const game = canvas.getContext('2d');

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
	game.font = elementSize + 'px sans';
	game.textAlign = 'end';

	const map = maps[1];
	const mapRows = map.trim().split('\n');
	const mapRowsCols = mapRows.map((row) => row.trim().split(''));

	for (let row = 1; row <= 10; row++) {
		for (let col = 1; col <= 10; col++) {
			game.fillText(
				emojis[mapRowsCols[row - 1][col - 1]],
				elementSize * col,
				elementSize * row,
			);
		}
	}
};

window.addEventListener('load', setCanvasSize);
window.addEventListener('resize', setCanvasSize);
