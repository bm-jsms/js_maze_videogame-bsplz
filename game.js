const canvas = document.querySelector('#game');

const game = canvas.getContext('2d');

const btnUp = document.querySelector('#up');
const btnLeft = document.querySelector('#left');
const btnRight = document.querySelector('#right');
const btnDown = document.querySelector('#down');

// window.addEventListener('load', () =>
// 	alert('Press F11 for a greater experience'),
// );

let canvasSize;
let elementSize;

const playerPosition = {
	x: undefined,
	y: undefined,
};

const setCanvasSize = () => {
	if (window.innerHeight > window.innerWidth) {
		canvasSize = window.innerWidth * 0.85;
	} else {
		canvasSize = window.innerHeight * 0.85;
	}

	canvas.setAttribute('width', canvasSize);
	canvas.setAttribute('height', canvasSize);

	elementSize = Math.floor(canvasSize / 10);

	startGame();
};

const startGame = () => {
	game.font = elementSize + 'px sans';
	game.textAlign = 'end';

	const map = maps[0];
	const mapRows = map.trim().split('\n');
	const mapRowsCols = mapRows.map((row) => row.trim().split(''));

	game.clearRect(0, 0, canvasSize, canvasSize);

	mapRowsCols.forEach((row, rowI) => {
		row.forEach((col, colI) => {
			const emoji = emojis[col];
			const posX = elementSize * (colI + 1);
			const posY = elementSize * (rowI + 1);

			if (col === 'O') {
				if (!playerPosition.x && !playerPosition.y) {
					playerPosition.x = posX;
					playerPosition.y = posY;
					console.log(playerPosition);
				}
			}

			game.fillText(emoji, posX, posY);
		});
	});

	movePlayer();
};

const movePlayer = () => {
	game.fillText(emojis['PLAYER'], playerPosition.x, playerPosition.y);
};

const moveUp = () => {
	if (playerPosition.y - elementSize < elementSize) {
		console.log('Out of bounds');
	} else {
		playerPosition.y -= elementSize;
		startGame();
	}
};
const moveLeft = () => {
	if (playerPosition.x - elementSize < elementSize) {
		console.log('Out of bounds');
	} else {
		playerPosition.x -= elementSize;
		startGame();
	}
};
const moveRight = () => {
	if (playerPosition.x + elementSize > canvasSize) {
		console.log('Out of bounds');
	} else {
		playerPosition.x += elementSize;
		startGame();
	}
};

const moveDown = () => {
	if (playerPosition.y + elementSize > canvasSize) {
		console.log('Out of bounds');
	} else {
		playerPosition.y += elementSize;
		startGame();
	}
};

window.addEventListener('keydown', (event) => {
	switch (event.key) {
		case 'ArrowUp':
			moveUp();
			break;
		case 'ArrowLeft':
			moveLeft();
			break;
		case 'ArrowRight':
			moveRight();
			break;
		case 'ArrowDown':
			moveDown();
			break;
	}
});

btnUp.addEventListener('click', moveUp);
btnLeft.addEventListener('click', moveLeft);
btnRight.addEventListener('click', moveRight);
btnDown.addEventListener('click', moveDown);

window.addEventListener('load', setCanvasSize);
window.addEventListener('resize', setCanvasSize);
