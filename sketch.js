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

	p=createP("Click play to start the magic. This is Sierpinski's Fractal.");
	p.position(can.x+32.5,can.y+17.5);
	p.class("bord");


	left=createVector(width/2-200,height/2+200*sqrt(3)/2);
	middle=createVector(width/2,height/2-200*sqrt(3)/2);
	right=createVector(width/2+200,height/2+200*sqrt(3)/2);
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
