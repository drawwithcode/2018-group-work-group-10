var canvas;

//img
var img1;
var img2;
var img3;
var img4;
var img5;
var gif;

//transparency and move
var tra1=250;
var tra2=50;
var tra3=0;
var tra4=255;

//text
var t = 'Wave your arms to clean';
var t1 = 'SO2';
var b1 = 'Cairo has been ranked as the second most polluted large city in the world';



function preload(){
  img1 = loadImage("./assets/Cairo.jpg");
  img2 = loadImage("./assets/Cairo/fog1.png");
  img3 = loadImage("./assets/Cairo/fog2.png");
  img4 = loadImage("./assets/Cairo/fog3.png");
  img5 = loadImage("./assets/Cairo/dust1.png");

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

      tra1 = tra1 - 40;
      tra2 = tra2 - 35;

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
  //console.log(frameCount);


  if (tra1 < 30 && tra2 < 30){

    push();
    rectMode(CENTER);
    strokeWeight(1);
    stroke(50,200);
    fill(200,100);
    rect(windowWidth/2,  windowHeight/4 - 110, 515, 40, 5);
    pop();

    textAlign(CENTER);
    textFont('Amatic SC');
    fill(107, 115, 117, tra3);
    textSize(25);
    text(b1, windowWidth/2, windowHeight/4 - 100);

    push()
    strokeWeight(4);
    stroke(181, 137, 138);
    noFill();
    rectMode(CENTER);
    rect(windowWidth/2 + 460,  windowHeight - 60, 140, 50, 15);
    rect(windowWidth/2 - 460,  windowHeight - 60, 140, 50, 15);
    pop();

    textSize(35);
    textStyle(BOLD);
    fill(194, 128, 128, tra3);
    text('NEXT', windowWidth/2 + 460,  windowHeight - 48);
    text('BACK', windowWidth/2 - 460,  windowHeight - 48);

    push();
    textSize(55);
    fill(107, 115, 117, tra3);
    text('Cairo', windowWidth/2,  windowHeight - 80);
    pop();

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
  text(t, windowWidth/2-35,  windowHeight/2);
  push();
  strokeWeight(2.5);
  stroke(86, 101, 115, tra4);
  fill(212, 239, 223, tra4);
  text(t1, windowWidth/2+145,  windowHeight/2);
  pop();

  tra4 = tra4 - 8;
}


function mouseClicked() {

      if(mouseX>windowWidth/2 + 390 && mouseX<windowWidth/2 + 530 && mouseY>windowHeight - 85 && mouseY<windowHeight - 35) {
          window.location.href = "lahore.html";}

      if(mouseX>windowWidth/2 - 530 && mouseX<windowWidth/2 - 390 && mouseY>windowHeight - 85 && mouseY<windowHeight - 35) {
          window.location.href = "back3.html";}

}
