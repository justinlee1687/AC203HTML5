//alert("It is not working!")

//declare and initalize variables
var canvas;
var ctx;
//original position of ball
var x = 420;
var y = 420;
var r = 20;
//make the ball stay station in the beginning of the game
var mx = 0;
var my = 0;
var width = 500;
var height = 500;

//position of good and bad guys
var goodX;
var goodY;
var badX;
var badY;
var spriteHeight = 50;
var spriteWidth = 50;

var goodCollision = false;
var badCollision = false;
var score = 0;

function init(){
	canvas = document.getElementById("myCanvas");
	ctx = canvas.getContext("2d");
	window.onkeydown = keydownControl;
	return setInterval(draw,10)
}
function circle(x,y,r){
	ctx.beginPath();
	ctx.arc(x,y,r,0,6.28);
	ctx.closePath();
	ctx.fillStyle="tomato";
	ctx.fill();
}

function clear(){
	ctx.clearRect(0,0,width,height)
}
function draw(){
	clear();
	circle(x,y,r);
	//to make the ball bounce off edge of canvas
	if(x+r>width || x-r<0){
		mx=-mx;
	}
	if(y+r>height || y-r<0){
		my=-my;
	}
	//move x and y of the ball every frame (10ms)
	x+=mx
	y+=my
}

function keydownControl(e){
	if (e.keyCode == 38){
	my = -2
	mx = 0;
	}
	else if (e.keyCode == 40){
	my = +2
	mx = 0;
	}
	else if (e.keyCode == 37){
	mx = -2
	my = 0;
	}
	else if (e.keyCode == 39){
	mx = +2
	my = 0;
	}
}

init();