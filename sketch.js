
//Home page

var img0;
var img1;
var gif1;
var gif2;
var gif3;
var gif4;
var gif5;

var x = 0;
var speed = 1.5;
var s = 0;
var t1 = 'There are 5 hazardous air pollution cities'
var t2 = 'Let us clean them up'

var j = 25;
var tra1 = 255;
var tra2 = 255;
var tra3 = 0;
var tra4 = 0;

//fluid haze
var mainPath;
var bobs = [];
var globalHue;


function preload(){
  img0 = loadImage("./assets/map.png");
  img1 = loadImage("./assets/fog1.png");
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  gif1 = createImg("./assets/Dots/1.gif");
  gif2 = createImg("./assets/Dots/2.gif");
  gif3 = createImg("./assets/Dots/3.gif");
  gif4 = createImg("./assets/Dots/4.gif");
  gif5 = createImg("./assets/Dots/5.gif");

  reset();

}


function draw() {
    gif1.size(0,0);
    gif1.position(windowWidth/2 + 285, 180);
    gif2.size(0,0);
    gif2.position(windowWidth/2 + 160, 235);
    gif3.size(0,0);
    gif3.position(windowWidth/2 + 220, 150);
    gif4.size(0,0);
    gif4.position(windowWidth/2 + 120, 190);
    gif5.size(0,0);
    gif5.position(windowWidth/2 , 220);

    image(img0, 0, 0, windowWidth, windowHeight);

    if(tra2<10){

      cities();

      //sub
      textFont('Amatic SC');
      textAlign(CENTER);
      textSize(32);
      stroke(110, tra3);
      strokeWeight(3);
      fill(255, tra3);
      text(t1, windowWidth/2,  60);
      text(t2, windowWidth/2,  95);
      tra3 = tra3+10;

    }

    //title
    push()
    fill(255,tra1);
    rect(-50, -50, windowWidth+500, windowHeight+500);
    textSize(150);
    textAlign(CENTER);
    textFont('Amatic SC');
    fill(10, tra2);
    stroke(100, tra2);
    strokeWeight(3);
    text('THE HAZY WORLD', windowWidth/2, windowHeight/2);
    tra1 = tra1 -3;
    tra2 = tra2 -5;
    pop();

    haze();

    //cloud
    image(img1, x, 100, windowWidth, windowHeight);
    image(img1, x-500, -100, windowWidth, windowHeight);
    x = x+speed;
    if(x > 450 || x < -50){
      speed = speed * -1;
    }

}

function cities(){

  //button
  push()
  strokeWeight(3);
  stroke(255, tra4);
  fill(200,100);
  rect(windowWidth/2 - 180, windowHeight-104, 160, 50, 30);
  rect(windowWidth/2 + 40, windowHeight-104, 160, 50, 30);
  textSize(22);
  noStroke();
  fill(255, tra4);
  text('PLAY', windowWidth/2 + 120,  windowHeight-71);
  text('READ MORE', windowWidth/2 - 100,  windowHeight-71);
  tra4 = tra4 + 10;
  pop();

  //icon
  if(tra4>290){
    gif1.size(s, s);
    gif1.position(windowWidth/2 + 285, 180);
    gif2.size(s, s);
    gif2.position(windowWidth/2 + 160, 235);
    gif3.size(s, s);
    gif3.position(windowWidth/2 + 220, 150);
    gif4.size(s, s);
    gif4.position(windowWidth/2 + 120, 190);
    gif5.size(s, s);
    gif5.position(windowWidth/2 , 220);

    s = s+3;
    if(s>40){
      s=40;
    }

  }

  if(mouseX>windowWidth/2 + 40 && mouseX<windowWidth/2 + 200 &&  mouseY>windowHeight-110 && mouseY<windowHeight-50) {
    push()
    strokeWeight(3);
    stroke(248, 249, 249);
    fill(248, 249, 249);
    //rect(windowWidth/2 - 180, windowHeight-104, 160, 50, 30);
    rect(windowWidth/2 + 40, windowHeight-104, 160, 50, 30);
    textSize(29);
    noStroke();
    textStyle(BOLD);
    fill(113, 125, 126);
    text('PLAY', windowWidth/2 + 120,  windowHeight-67);
    //text('READ MORE', windowWidth/2 - 100,  windowHeight-69);
    pop();
  }

  if(mouseX>windowWidth/2 - 180 && mouseX<windowWidth/2 - 20 &&  mouseY>windowHeight-110 && mouseY<windowHeight-50) {
    push()
    strokeWeight(3);
    stroke(248, 249, 249);
    fill(248, 249, 249);
    rect(windowWidth/2 - 180, windowHeight-104, 160, 50, 30);
    textSize(29);
    noStroke();
    textStyle(BOLD);
    fill(113, 125, 126);
    text('READ MORE', windowWidth/2 - 99,  windowHeight-67);
    pop();
  }


}

//fluid haze
function haze(){

  for(var i=0; i<bobs.length; i++){
    var b = bobs[i];
    b.move();

    push();
    colorMode(RGB, 255);
    //stroke(b.hue, b.bright, 200, 4);
    stroke(255, 255, 255, 5);
    strokeWeight(b.mass);
    point(b.pos.x, b.pos.y);

    pop();
   }

}

function reset(){
  globalHue = random(255);

  mainPath = new Path();

  bobs.splice(0, bobs.length);

  for(let i=0; i<2000; i++){
    let rot = p5.Vector.random2D();
    rot.mult(random(250));

    let x = mainPath.vertices[0].x + rot.x;
    let y = mainPath.vertices[0].y + rot.y;

    bobs.push(new Bob(x, y, mainPath));
  }
}

function Bob(x, y, path){

  this.pos = new p5.Vector(x, y);
  this.vel = new p5.Vector(2, 0);
  this.acc = new p5.Vector(1, 0);
	this.path = path;
	this.direction = 1;
  this.vertIndex = 0;
	this.variance = random(0.8, 1.3);
  this.drag = random(0.98, 0.99);
	this.hue = (globalHue + random(-40, 40)) % 255;
	this.bright = random(255);
	this.mass = random(80);

  this.move = function() {
		// Once it reaches its target, pick the next vertex to seek.
		let target = this.path.vertices[this.vertIndex];
		let targetDist = dist(this.pos.x, this.pos.y, target.x, target.y);

		if (targetDist < 80) {
			if ((this.direction == 1 && this.vertIndex == this.path.vertices.length - 1) ||
				  (this.direction == -1 && this.vertIndex == 0)) {
				this.direction *= -1;
			}
			this.vertIndex += this.direction;
		}

		// Add some air drag so it can eventually settle.
		this.vel.mult(this.drag);

		// Seek its target.
		if (targetDist > 1) {
			let steer = new p5.Vector(target.x, target.y);
			steer.sub(this.pos);
			steer.normalize();
			steer.mult(0.05 * this.variance);
			this.acc.add(steer);
		}

    // Push it away from the mouse.
    let mouseDist = dist(this.pos.x, this.pos.y, mouseX, mouseY);
    let mouseThresh = 100;

    if (mouseDist < mouseThresh) {
      let push = new p5.Vector(this.pos.x, this.pos.y);
      push.sub(new p5.Vector(mouseX, mouseY));
      push.normalize();
      push.mult((mouseThresh - mouseDist) * 0.01);
      this.acc.add(push);
    }

		// Move it.
		this.vel.add(this.acc);
		this.vel.limit(6);
		this.pos.add(this.vel);
		this.acc.mult(0);
	}

}

function Path() {

	this.vertices = [];

	let count = 5;
	for (let i = 0; i < count; i++) {
		let x = map(i, 0, count, width / 4, width - width / 4);
		let y = random(50, height - 100);
		this.vertices.push(new p5.Vector(x, y))
	}

}


function mouseClicked() {

      if(mouseX>windowWidth/2 + 40 && mouseX<windowWidth/2 + 200 &&  mouseY>windowHeight-110 && mouseY<windowHeight-50) {
          window.location.href = "beijing.html";}

      if(mouseX>windowWidth/2 - 180 && mouseX<windowWidth/2 - 20 &&  mouseY>windowHeight-110 && mouseY<windowHeight-50) {
          window.location.href = "readmore.html";}

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
