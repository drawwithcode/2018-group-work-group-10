
var img1;
var img2;
var img3;

var speed = 0.5;
var x = 0;
var tra1 = 0;

var t = 'We  Live  in  a  Hazy  World';
var t1 = 'Air pollution kills an estimated 7 million people worldwide every year.';
var t2 = 'As air quality declines, the risk of stroke, heart disease, lung cancer, and chronic and';
var t3 = 'acute respiratory diseases, including asthma, increases for the people who live in them.';
var t4 = 'Air pollution affects all regions of the world. However, populations in low-income cities';
var t5 = 'are the most impacted.According to the latest air quality database, 97% of cities in low-';
var t6 = 'and middle- income countries with more than 100,000 inhabitants do not meet WHO air';
var t7 = 'quality guidelines.';

function preload(){
  img1 = loadImage("./assets/fog1.png");
  img2 = loadImage("./assets/pollution1.jpg");
  img3 = loadImage("./assets/pollution2.jpg");
}

function setup() {
  createCanvas(windowWidth, windowHeight+600);

}


function draw() {

    background(210);

    push();
    imageMode(CENTER);
    image(img2, windowWidth/2, windowHeight/2+140, img2.width/1.3, img2.height/1.3);
    image(img3, windowWidth/2, windowHeight+270, img2.width/1.3, img2.height/1.3);
    pop();

    //cloud
    image(img1, x, 100, windowWidth, windowHeight);
    image(img1, x-500, -100, windowWidth, windowHeight);
    image(img1, x-100, windowHeight);
    //image(img1, x-600, windowHeight-100);
    x = x+speed;
    if(x > 450 || x < -50){
      speed = speed * -1;
    }

    button();

    textAlign(CENTER);
    textFont('Amatic SC');
    fill(50);
    textSize(45);
    text(t, windowWidth/2, windowHeight/4-20);
    push();
    textSize(14);
    textAlign(LEFT);
    textFont('Helvetica');
    text(t1, windowWidth/2-268, windowHeight/4+55);
    text(t2, windowWidth/2-268, windowHeight/4+95);
    text(t3, windowWidth/2-268, windowHeight/4+115);
    text(t4, windowWidth/2-268, windowHeight+30);
    text(t5, windowWidth/2-268, windowHeight+50);
    text(t6, windowWidth/2-268, windowHeight+70);
    text(t7, windowWidth/2-268, windowHeight+90);
    pop();

}

function button(){

  textAlign(CENTER);
  textFont('Amatic SC');
  rectMode(CENTER);

  push()
  strokeWeight(3);
  stroke(90, tra1);
  //fill(20,80);
  noFill();
  rect(windowWidth/2, windowHeight+520, 160, 50, 30);
  textSize(30);
  noStroke();
  fill(50, tra1);
  text('BACK', windowWidth/2,  windowHeight+533);
  tra1 = tra1 + 8;
  pop();


  if(mouseX>windowWidth/2 - 80 && mouseX<windowWidth/2 + 80 && mouseY> windowHeight+495 && mouseY<windowHeight+545) {
    push()
    strokeWeight(3);
    stroke(50);
    fill(100);
    rect(windowWidth/2, windowHeight+520, 160, 50, 30);
    textSize(30);
    noStroke();
    textStyle(BOLD);
    fill(230);
    text('BACK', windowWidth/2,  windowHeight+533);
    pop();
  }

}


function mouseClicked() {

      if(mouseX>windowWidth/2 - 80 && mouseX<windowWidth/2 + 80 && mouseY> windowHeight+495 && mouseY<windowHeight+545) {
          window.location.href = "index.html";}

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
