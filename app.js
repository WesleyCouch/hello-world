//Code here...

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var GAME_FPS = 60;

var box = new Game_box();

function Game_box() {

	//Location
	this.X = 100;
	this.Y = 50;

	//Dimensions
	this.H = 20;
	this.W = 20;

	this.spd = [0, 0];

	//Draw box
	this.draw = function() {

		ctx.fillRect(this.X, this.Y, this.W, this.H);
	};

	//Move box
	this.move = function () {

		this.X += this.spd[0];
		this.Y += this.spd[1];
	};
}

function drawGame() {
	ctx.clearRect(0,0, canvas.width, canvas.height);

	//Move box
	box.move();
	
	//Draw Box
	box.draw();
}

var runGame = setInterval(drawGame, 1000 / GAME_FPS);

