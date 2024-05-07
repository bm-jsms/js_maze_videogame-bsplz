const emojis = {
	'-': ' ',
	O: '🚪',
	X: '👾',
	I: '🎁',
	PLAYER: '🤖',
	BOMB_COLLISION: '🔥',
	GAME_OVER: '👎',
	WIN: '🏆',
};

const maps = [];
maps.push(`
  IXXXXXXXXX
  -XXXXXXXXX
  -XXXXXXXXX
  -XXXXXXXXX
  -XXXXXXXXX
  -XXXXXXXXX
  -XXXXXXXXX
  -XXXXXXXXX
  -XXXXXXXXX
  OXXXXXXXXX
`);
maps.push(`
  O--------X
  -XXXXXXX--
  --XXXXXXX-
  X-XXXXXXX-
  X---------
  X-XXX-XXX-
  X--XX-XXX-
  XXX--I----
  XXXXXXXXXX
  XXXXXXXXXX
`);
maps.push(`
  XXXXXXXXXX
  XX------XX
  X--XXX-XXX
  X-XXXX-XXX
  X-XXXX-XXX
  X-XXXXIXXX
  X-XXXXXXXX
  X----O-XXX
  XXXXXXXXXX
  XXXXXXXXXX
`);
maps.push(`
  IXXXXXXXXX
  -XXXXXXXXX
  -XXXXXXXXX
  -XXXXXXXXX
  -XXXXXXXXX
  -XXXXXOXXX
  --XXXX-XXX
  X--XXX-XXX
  XX-----XXX
  XXXXXXXXXX
`);
maps.push(`
  O--XXXXXXX
  X--XXXXXXX
  XX----XXXX
  X--XX-XXXX
  X-XXX--XXX
  X-XXXX-XXX
  X---XX--XX
  XX--XXX-XX
  XXX----IXX
  XXXXXXXXXX
`);
maps.push(`
  XXXXXXXXXX
  XXXX------
  XXXX-XXXX-
  ---X-XXXX-
  -X-----OX-
  --XXXXXXX-
  X---------
  XXXXX-XXXX
  XXXXX-XOXX
  XXXXX---XX
`);
maps.push(`
  XXXXXXXXXX
  X---XXXXXX
  X-X--XXXXX
  --XX-XXXXX
  -XXX---OXX
  -XXXXXXXXX
  -XXXXXXXXX
  -XXXXXXXXX
  -------IXX
  XXXXXXXXXX
`);
maps.push(`
  I-----XXXX
  XXXXX-XXXX
  XX----XXXX
  XX-XXXXXXX
  XX-----XXX
  XXXXXX-XXX
  XX-----XXX
  XX-XXXXXXX
  XX-----OXX
  XXXXXXXXXX
`);
maps.push(`
  OXXXX-----
  -XXXX-XXX-
  -XXXX-XXX-
  ------XXX-
  XXXXXXXXX-
  XXXXXXXX--
  XXXXXXX--X
  XXXXXX--XX
  XXX----XXX
  I---XXXXXX
`);

// console.log(maps.length);

/* 

maps.push(`
  XXXXXXXXXX
  XXXXXXXXXX
  XXXXXXXXXX
  XXXXXXXXXX
  XXXXXXXXXX
  XXXXXXXXXX
  XXXXXXXXXX
  XXXXXXXXXX
  XXXXXXXXXX
  XXXXXXXXXX
`);

 */
