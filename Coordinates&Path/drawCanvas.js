var c = document.getElementById("myCanvas");
var ctx = c.getContext('2d');

ctx.beginPath();
ctx.strokeStyle="magenta";
//move our pen here
ctx.moveTo(150,50);
//draw a line to this point
ctx.lineTo(50,200);
ctx.lineTo(250,200);
ctx.closePath();
//to actually draw it
ctx.stroke();
ctx.fillStyle="green"
ctx.fill();

var c1 = document.getElementById("myCanvas1");
var ctx1 = c1.getContext('2d');

ctx1.beginPath();
ctx1.strokeStyle="magenta";
//move our pen here
ctx1.moveTo(75,0);
//draw a line to this point
ctx1.lineTo(0,150);
ctx1.lineTo(75,300);
ctx1.lineTo(150,150);
ctx1.closePath();
//to actually draw it
ctx1.stroke();
ctx1.fillStyle="red"
ctx1.fill();

var c2 = document.getElementById("myCanvas2");
var ctx2 = c2.getContext('2d');

ctx2.beginPath();
ctx2.strokeStyle="magenta";
//move our pen here
ctx2.moveTo(0,0);
//draw a line to this point
ctx2.lineTo(0,300);
ctx2.lineTo(300,0);
ctx2.lineTo(300,300);
ctx2.closePath();
//to actually draw it
ctx2.stroke();
ctx2.fillStyle="purple"
ctx2.fill();

var c3 = document.getElementById("myCanvas3");
var ctx3 = c3.getContext('2d');

ctx3.beginPath();
ctx3.strokeStyle="magenta";
//move our pen here
ctx3.moveTo(0,0);
//draw a line to this point
ctx3.lineTo(300,300);
ctx3.lineTo(300,150);
ctx3.lineTo(0,150);
ctx3.closePath();
//to actually draw it
ctx3.stroke();
ctx3.fillStyle="yellow"
ctx3.fill();

ctx3.moveTo(300,0);
//draw a line to this point
ctx3.lineTo(0,300);
ctx3.lineTo(150,300);
ctx3.lineTo(150,0);
ctx3.closePath();
//to actually draw it
ctx3.stroke();
ctx3.fillStyle="yellow"
ctx3.fill();

var c4 = document.getElementById("myCanvas4");
var ctx4 = c4.getContext('2d');

ctx4.beginPath();
ctx4.strokeStyle="blue";
ctx4.arc(150,150,80,0,6.28);
ctx4.closePath();
ctx4.stroke();
ctx4.fillStyle="blue"
ctx4.fill();

var c5 = document.getElementById("myCanvas5");
var ctx5 = c5.getContext('2d');

ctx5.fillStyle="green"
ctx5.fillRect(0,350,800,150);
ctx5.fillStyle="cyan";
ctx5.fillRect(0,0,800,350);
ctx5.beginPath();
ctx5.arc(80,80,50,0,6.28);
ctx5.closePath();
ctx5.stroke();
ctx5.fillStyle="yellow";
ctx5.fill();

ctx5.beginPath();
ctx5.moveTo(375,350);
//draw a line to this point
ctx5.lineTo(350,500);
ctx5.lineTo(450,500);
ctx5.lineTo(425,350);
ctx5.closePath();
//to actually draw it
ctx5.stroke();
ctx5.fillStyle="grey"
ctx5.fill();




