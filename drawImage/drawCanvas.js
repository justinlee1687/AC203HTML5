var chair = new Image ();
var tent = new Image ();
var torch = new Image ();
var bag = new Image ();

//Assign source to image object
chair.src="chair.png"
bag.src="bag.png"
torch.src="torch.png"
tent.src="tent.png"

//Drawing Image 
chair.onload = function(){
	ctx5.drawImage(chair,180,350,200,190)
}
bag.onload = function(){
	ctx5.drawImage(bag,450,350,100,150)
}
torch.onload = function(){
	ctx5.drawImage(torch,500,200,100,190)

tent.onload = function(){
	ctx5.drawImage(tent,600,350,200,100)
}
}
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




