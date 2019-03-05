class sclass{
constructor(left,middle,right){
	this.lt=left;
	this.mid=middle;
	this.rt=right;
}
show(j){
	stroke(255);
beginShape();
	vertex(this.lt.x,this.lt.y);
	vertex(this.mid.x,this.mid.y);
	vertex(this.rt.x,this.rt.y);
	if(j%3==0){fill(255,0,0);}
	if(j%3==1){fill(0,255,0);}
	if(j%3==2){fill(0,0,255);}
endShape(CLOSE);
}


left1(){
	return this.lt;
}
middle1(){
	return this.mid;
}
right1(){
	return this.rt;
}

leftmid(){
	let lm=p5.Vector.sub(this.mid,this.lt);
	lm.mult(.5);lm.add(this.lt,lm);
return lm;
}
rightmid(){
	let rm=p5.Vector.sub(this.mid,this.rt);
	rm.mult(.5);rm.add(this.rt,rm);
	return rm;
}
bottommid(){
	let bm=p5.Vector.sub(this.rt,this.lt);
	bm.mult(.5);bm.add(this.lt,bm);
	return bm;

}

}

// willie nelson sometimes its heaven sometimes its hell

function gen2(){
	let next=[];
	for(let j=0;j<sees.length;j++){
	let lm=sees[j].leftmid();  
	let bm=sees[j].bottommid();
	let rm=sees[j].rightmid();

	let lt=sees[j].left1();  
	let mid=sees[j].middle1();
	let rt=sees[j].right1();
next.push(new sclass(lt,lm,bm));
next.push(new sclass(lm,mid,rm));
next.push(new sclass(bm,rm,rt));
	}
sees=next;
}


function addmore2(){
gen2();
}

let radio;
function createburrito(){
radio = createRadio();
radio.position(width/3,height/3);
   radio.class("bord");
  radio.option('Start',1);
  radio.option('Reset',2);
}

function drawburrito(){
	var val = radio.value();
  switch(val){
case '1': start();break;
case '2': reset();break;
}
}

function start(){
	if(radio.value()==1){can.mousePressed(addmore2);}
}

function reset(){
	background(155);
	//let subsees = subset(sees,sees.length-1,1);
	sees=[];//setup();
	sees.push(new sclass(left,middle,right));
	sees[0].show(0)
}