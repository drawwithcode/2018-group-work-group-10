var canvas;

//img
var img1;
var img2;
var img3;
var img4;
var img5;
var img6;
var gif;

//transparency and move
var tra1=250;
var tra2=50;
var tra3=50;
var tra4=255;

//text
var t = 'Wave your hands to clean PM2.5';
var delhi1 = '11 out of the 12 most polluted cities on a World Health Organization list were in India'
var delhi2 = 'In India, terrorism has taken 65,900 human lives between 1994 and 2017,'
var delhi3 = 'which is almost half of deaths caused by air pollution in a single year.'


function preload(){
  img1 = loadImage("./assets/Beijing.jpg");
  img2 = loadImage("./assets/Beijin/fog1.png");
  img3 = loadImage("./assets/Beijin/fog2.png");
  img4 = loadImage("./assets/Beijin/fog3.png");
  img5 = loadImage("./assets/Beijin/dust1.png");

  //gif = createImg("./assets/gest.gif");
}

function setup() {
  canvas = createCanvas(windowWidth,windowHeight);
  canvas.position(0, 0);

  gif = createImg("./assets/gest.gif");

  background(255);

  gest.options.subscribeWithCallback(function(gesture) {
    //var message = '';
    if (gesture.direction) {
      //message = gesture.direction;

      tra1 = tra1 - 25;
      tra2 = tra2 - 20;

    } else {
      //message = gesture.error.message;
    }

  });

  gest.start();
  gest.options.sensitivity(90);

}


function draw() {
  cityBeijing();

  if(frameCount < 30){
      gif.size(200, 200);
      gif.position(windowWidth/2 - 100, 70);
   } else {
      gif.size(0, 0);
  }
  console.log(frameCount);


  if (tra1 < 100 && tra2 < 100){

    textAlign(CENTER);
    textFont('Amatic SC');
    fill(159, 87, 39, tra3);
    textSize(18);
    text(delhi1, windowWidth/2, windowHeight/4 - 110);
    text(delhi2, windowWidth/2, windowHeight/4 - 85);
    text(delhi3, windowWidth/2, windowHeight/4 - 60);

    push()
    strokeWeight(4);
    stroke(253, 242, 233);
    noFill();
    rectMode(CENTER);
    rect(windowWidth/2 + 460,  windowHeight - 60, 140, 50, 15);
    rect(windowWidth/2 - 460,  windowHeight - 60, 140, 50, 15);
    pop();

    textSize(35);
    textStyle(BOLD);
    fill(253, 242, 233, tra3);
    text('NEXT', windowWidth/2 + 460,  windowHeight - 48);
    text('BACK', windowWidth/2 - 460,  windowHeight - 48);

    textSize(55);
    fill(229, 231, 233, tra3);
    text('Beijing', windowWidth/2,  windowHeight - 60);

    tra3 = tra3 + 20;


    if(mouseX>windowWidth/2 + 390 && mouseX<windowWidth/2 + 530 && mouseY>windowHeight - 85 && mouseY<windowHeight - 35) {
      noStroke();
      rectMode(CENTER);
      fill(248, 249, 249, 100);
      rect(windowWidth/2 + 460,  windowHeight - 60, 140, 50, 15);
      push();
      textSize(35);
      stroke(140);
      strokeWeight(3);
      fill(253, 242, 233);
      text('NEXT', windowWidth/2 + 460,  windowHeight - 48);
      pop();
    }

    if(mouseX>windowWidth/2 - 530 && mouseX<windowWidth/2 - 390 && mouseY>windowHeight - 85 && mouseY<windowHeight - 35) {
      noStroke();
      rectMode(CENTER);
      fill(248, 249, 249, 100);
      rect(windowWidth/2 - 460,  windowHeight - 60, 140, 50, 15);
      push();
      textSize(35);
      stroke(140);
      strokeWeight(3);
      fill(253, 242, 233);
      text('BACK', windowWidth/2 - 460,  windowHeight - 48);
      pop();
    }

  }


}


function cityBeijing(){
  image(img1, 0, 0, windowWidth,windowHeight);

  push();
  tint(255, tra1);
   image(img2, 0, 0);
   image(img3, 0, 0);
   image(img4, 0, 0);
  pop();

  push();
  tint(255, tra2);
  image(img5, 0, 0, windowWidth, windowHeight);
  pop();

  textFont('Amatic SC');
  textSize(45);
  textAlign(CENTER);
  fill(86, 101, 115, tra4);
  text(t, windowWidth/2,  windowHeight/2);

  tra4 = tra4 - 8;
}


function mouseClicked() {

      if(mouseX<1200 && mouseX>1050 && mouseY>520 && mouseY<570) {
          window.location.href = "delhi.html";}

      if(mouseX<240 && mouseX>100 && mouseY>520 && mouseY<570) {
          window.location.href = "index.html";}

}