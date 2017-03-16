//Code here...

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var GAME_FPS = 60;

function drawGame() {

	//X, Y, W, H
	ctx.fillRect(50, 50, 20, 20);
}

var runGame = setInterval(drawGame(), 1000 / GAME_FPS);

