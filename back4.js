
var img0;
var img1;

var speed = 0.8;
var x = 0;
var tra1 = 0;

var t1 = 'Good job !'
var t2 = 'You cleaned up '
var t3 = 'cities'

//number
var word = "FOUR";
var font;
var tPoints;

var particles = [];
var velThreshold = 3;
var splitCount = 4;

var h = 115;
var minh = 115;
var maxh = 150;

function preload(){
  font = loadFont('./assets/Amaticsc.ttf');

  img1 = loadImage("./assets/fog1.png");
}

function setup() {
  createCanvas(windowWidth,windowHeight);

  //number

  //colorMode(HSB, 255);
  tPoints = font.textToPoints(word, windowWidth/2 + 65, windowHeight/2 + 80, 180, {sampleFactor:0.9});

  let start = tPoints[0].x;
  let end = tPoints[tPoints.length-1].x;
  let centerX = (start-end)*0.5;

  for (let i = 0; i < tPoints.length; i++) {
    let j = int(random(tPoints.length));
    particles.push(new Particle(tPoints[j].x+centerX, tPoints[j].y, tPoints[j].x+centerX, tPoints[j].y));
  }

}


function draw() {

    //image(img0, 0, 0, windowWidth, windowHeight);
    background(210);

    button();

    //cloud
    image(img1, x, 100, windowWidth, windowHeight);
    image(img1, x-500, -100, windowWidth, windowHeight);
    x = x+speed;
    if(x > 450 || x < -50){
      speed = speed * -1;
    }

    //text
    textAlign(CENTER);
    textSize(75);
    stroke(140, tra1);
    strokeWeight(3);
    fill(250, tra1);
    textFont('Amatic SC');
    text(t1, windowWidth/2,  windowHeight/2 - 160);
    fill(244, 236, 247, tra1);
    stroke(110, tra1);
    textSize(60);
    text(t2, windowWidth/2 - 135,  windowHeight/2 + 80);
    text(t3, windowWidth/2 + 245,  windowHeight/2 + 80);

    play();

}

function button(){

  rectMode(CENTER);
  textFont('Amatic SC');

  push()
  strokeWeight(3);
  stroke(90, tra1);
  textAlign(CENTER);
  //fill(20,80);
  noFill();
  rect(windowWidth/2, windowHeight-80, 160, 50, 30);
  textSize(29);
  noStroke();
  fill(50, tra1);
  text('CONTINUE', windowWidth/2,  windowHeight-67);
  tra1 = tra1 + 8;
  pop();


  if(mouseX>windowWidth/2 - 80 && mouseX<windowWidth/2 + 80 && mouseY>windowHeight-105 && mouseY<windowHeight-55) {
    push()
    strokeWeight(3);
    stroke(50);
    fill(100);
    rect(windowWidth/2, windowHeight-80, 160, 50, 30);
    textSize(29);
    noStroke();
    textStyle(BOLD);
    fill(230);
    text('CONTINUE', windowWidth/2,  windowHeight-67);
    pop();
  }

}

//number

function play(){
  for (let i = particles.length-1; i > -1; i--) {
    let p = particles[i];

    p.move();

    if (p.activate) {
    	stroke(p.pColor);
    } else {

      //stroke(120, p.vel.mag()*50, 255);
      stroke(120, 40, 31, random(90,255));
    }

    strokeWeight(p.pSize);

    point(p.pos.x, p.pos.y);

    // Remove particles that are out of bounds.
    if (p.pos.y > height || p.pos.x < 0 || p.pos.x > width) {
      particles.splice(i, 1);
    }
  }
}


function Particle(x, y, tx, ty) {

  this.pos = new p5.Vector(x, y);
  this.vel = new p5.Vector(0, 0);
  this.acc = new p5.Vector(0, 0);
  this.target = new p5.Vector(tx, ty);
  this.activate = false;
  this.fallVariance = random(0.75, 1.25);
  this.pColor = color(255);
  this.pSize = 1.1;

  this.move = function() {
    if (!this.activate) {
      if (this.vel.mag() > velThreshold) {
        // Activates if its velocity exceeds the threshold.
        this.activate = true;

        // Spawn a few more particles in place for a nice effect.
        for (let i = 0; i < splitCount; i++) {
          let p = new Particle(this.pos.x, this.pos.y, this.target.x, this.target.y);

          p.activate = true;
          p.vel.set(this.vel.x, this.vel.y);
          p.vel.mult(random(0.9, 1.1));
          p.vel.rotate(radians(random(-25, 25)));
          p.acc.set(this.acc.x, this.acc.y);
          p.pSize = random(0.25, 3);

          // Keep the last particle white.
          if (i < splitCount-1) {
            //p.pColor = color(h, 255, 255);
            p.pColor = color(200, 200, 200, random(50, 255));
          }

          particles.push(p);

          // Increase hue for the next particle.
          h+=0.1;
          if (h > maxh) {
            h = minh;
          }
        }
      } else {
        // If its velocity didn't exceed the threshold then seek its target.
        let targetDist = dist(this.pos.x, this.pos.y, this.target.x, this.target.y);

        let proximityMult = 1;

        // Slow it down the closer it gets to its target.
        let distThresh = 50;
        if (targetDist < distThresh) {
          proximityMult = targetDist/distThresh;
        }

        // Add some friction so it can eventually settle.
        this.vel.mult(0.99);

        // Seek its target.
        if (targetDist > 1) {
          let steer = new p5.Vector(this.target.x, this.target.y);
          steer.sub(this.pos);
          steer.normalize();
          steer.mult(0.05*proximityMult);
          this.acc.add(steer);
        }
      }
    } else {
      // If it's activated, simply apply gravity.
      this.acc.add(new p5.Vector(0, 0.2*this.fallVariance));
    }

    // Push it away from the mouse.
    let mouseDist = dist(this.pos.x, this.pos.y, mouseX, mouseY);
    let mouseThresh = 100;

    if (mouseDist < mouseThresh) {
      let push = new p5.Vector(this.pos.x, this.pos.y);
      push.sub(new p5.Vector(mouseX, mouseY));
      push.normalize();
      push.mult((mouseThresh-mouseDist)*0.0025);
      this.acc.add(push);
    }

    // Move it.
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
  }
}


function mouseClicked() {

      if(mouseX>windowWidth/2 - 80 && mouseX<windowWidth/2 + 80 && mouseY>windowHeight-105 && mouseY<windowHeight-55) {
          window.location.href = "letter.html";}


}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
