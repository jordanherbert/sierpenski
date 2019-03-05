let can;
let p;
let left;
let middle;
let right;
let sees=[];

function setup() {
	can=createCanvas(800,550);
	can.position(windowWidth/8,windowHeight/8);
	can.class("bord");

	p=createP('Click play to start the magic. This is Sierpenskes Fractal.');
	p.position(can.x+32.5,can.y+17.5);
	p.class("bord");


	left=createVector(width/8,7*height/8);
	middle=createVector(width/2,height/8);
	right=createVector(7*width/8,7*height/8);
	sees.push(new sclass(left,middle,right));

	createburrito();

	anch=select('#sier');
	anch.position(0,0);
	anch.class("bord");
}

function draw() {
	background(155);
	for(let j=0;j<sees.length;j++){
	sees[j].show(j);
	}
	drawburrito();
}