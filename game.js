const canvas = document.querySelector('#game');

const game = canvas.getContext('2d');

const btnUp = document.querySelector('#up');
const btnLeft = document.querySelector('#left');
const btnRight = document.querySelector('#right');
const btnDown = document.querySelector('#down');

const spanLives = document.querySelector('#lives');
const spanTime = document.querySelector('#time');
const spanRecord = document.querySelector('#record');
const pResult = document.querySelector('#result');

// window.addEventListener('load', () =>
// 	alert('Press F11 for a greater experience'),
// );
let level = 0;
let lives = 3;
let canvasSize;
let elementSize;

let timeStart;
let timePlayer;
let timeInterval;

const playerPosition = {
	x: undefined,
	y: undefined,
};

const giftPosition = {
	x: undefined,
	y: undefined,
};

let enemyPositions = [];

const setCanvasSize = () => {
	if (window.innerHeight > window.innerWidth) {
		canvasSize = window.innerWidth * 0.7;
	} else {
		canvasSize = window.innerHeight * 0.7;
	}

	canvasSize = Math.floor(canvasSize);

	canvas.setAttribute('width', canvasSize);
	canvas.setAttribute('height', canvasSize);

	elementSize = Math.floor(canvasSize / 10);

	playerPosition.x = undefined;
	playerPosition.y = undefined;

	startGame();
};

const showLives = () => {
	const heartArray = Array(lives).fill('🧡');

	spanLives.innerText = '';
	heartArray.forEach((heart) => spanLives.append(heart));
};

const showTime = () => {
	spanTime.innerHTML = Date.now() - timeStart;
};

const showRecord = () => {
	spanRecord.innerHTML = localStorage.getItem('record_time');
};

const startGame = () => {
	game.font = elementSize + 'px sans';
	game.textAlign = 'end';

	const map = maps[level];

	if (!map) {
		console.log('You won!');
		gameWin();
		return;
	}

	if (!timeStart) {
		timeStart = Date.now();
		timeInterval = setInterval(showTime, 100);
		showRecord();
	}

	const mapRows = map.trim().split('\n');
	const mapRowsCols = mapRows.map((row) => row.trim().split(''));

	showLives();

	game.clearRect(0, 0, canvasSize, canvasSize);
	enemyPositions = [];

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
			} else if (col === 'I') {
				giftPosition.x = posX;
				giftPosition.y = posY;
			} else if (col === 'X') {
				enemyPositions.push({ x: posX, y: posY });
			}

			game.fillText(emoji, posX, posY);
		});
	});

	movePlayer();
};

const gameWin = () => {
	clearInterval(timeInterval);

	const playerTime = Date.now() - timeStart;
	const recordTime = localStorage.getItem('record_time');

	if (recordTime) {
		if (recordTime >= playerTime) {
			localStorage.setItem('record_time', playerTime);
			pResult.innerHTML = 'New record: ' + playerTime;
		} else {
			pResult.innerHTML = "Sorry you don't have a record";
		}
	} else {
		localStorage.setItem('record_time', playerTime);
		pResult.innerHTML = 'First record: ' + playerTime;
	}
	console.log({ recordTime, playerTime });
};

const movePlayer = () => {
	const giftColitionX = playerPosition.x === giftPosition.x;
	const giftColitionY = playerPosition.y === giftPosition.y;
	const giftCollition = giftColitionX && giftColitionY;
	if (giftCollition) {
		levelWin();
	}

	const enemyCollition = enemyPositions.find((enemy) => {
		const enemyColX = enemy.x === playerPosition.x;
		const enemyColY = enemy.y === playerPosition.y;

		return enemyColX && enemyColY;
	});

	if (enemyCollition) {
		levelFail();
	}

	game.fillText(emojis['PLAYER'], playerPosition.x, playerPosition.y);
};

const levelWin = () => {
	console.log('Level win');

	if (level < maps.length) {
		level++;
		startGame();
	}
};

const levelFail = () => {
	lives--;

	if (lives <= 0) {
		level = 0;
		lives = 3;
		timeStart = undefined;
	}

	playerPosition.x = undefined;
	playerPosition.y = undefined;

	startGame();
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
