//Code here...

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var GAME_FPS = 60;

var box = {

	X: 100,
	Y: 50,
	H: 20,
	W: 20,
}

function drawGame() {

	//X, Y, W, H
	ctx.fillRect(box.X, box.Y, box.W, box.H);
}

var runGame = setInterval(drawGame(), 1000 / GAME_FPS);

