var canvas;


//img
var img1;
var img2;
var img3;
var img4;
var img5;

//transparency and move
var tra1=255;
var tra2=255;
var tra3=50;
var tra4=255;
var xp = 0;
var yp = 0;

//text
var t = 'Wave your hands to clean the haze';
var delhi1 = '11 out of the 12 most polluted cities on a World Health Organization list were in India'
var delhi2 = 'In India, terrorism has taken 65,900 human lives between 1994 and 2017,'
var delhi3 = 'which is almost half of deaths caused by air pollution in a single year.'


function preload(){
  img1 = loadImage("./assets/delhi.jpg");
  img2 = loadImage("./assets/haze1.png");
  img3 = loadImage("./assets/haze2.png");
  img4 = loadImage("./assets/haze5.png");
  img5 = loadImage("./assets/haze6.png");
}

function setup() {
  canvas = createCanvas(windowWidth,windowHeight);
  canvas.position(0, 0);

  gest.options.subscribeWithCallback(function(gesture) {
    //var message = '';
    if (gesture.direction) {
      //message = gesture.direction;

      tra1 = tra1 - 15;
      tra2 = tra2 - 20;
      xp = xp + 100;
      yp = yp + 10;

    } else {
      //message = gesture.error.message;
    }

  });

  gest.start();
  gest.options.sensitivity(90);

}


function draw() {
  background(255);

  cityDelhi();

  if (tra1 < 60 && tra2 < 60){

    textAlign(CENTER);
    fill(159, 87, 39, tra3);
    textSize(18);
    textStyle(NORMAL);
    textFont('Raleway');
    text(delhi1, windowWidth/2, windowHeight/4 - 110);
    text(delhi2, windowWidth/2, windowHeight/4 - 85);
    text(delhi3, windowWidth/2, windowHeight/4 - 60);

    textSize(30);
    textStyle(BOLD);
    fill(90, 126, 78, tra3);
    text('NEXT', windowWidth - 135,  windowHeight - 55);
    text('BACK', 150,  windowHeight - 55);

    textSize(45);
    fill(159, 87, 39, tra3);
    text('Delhi', windowWidth/2,  windowHeight - 100);


    tra3 = tra3 + 20;
  }

  if(tra1 < 200){
    var div = createDiv(cityDelhi.function());
    div.hide();
    }

}


function cityDelhi(){
  image(img1, 0, 0, windowWidth,windowHeight);

  push();
  tint(255, tra1);
   //image(img2, 20-xp, 20, img2.width, img2.height);
   //image(img2, 0-xp, 0, img2.width/2, img2.height/2);
   //image(img2, 100-xp, 0, img2.width, img2.height);
   //image(img2, 100-xp, 0, img2.width/2, img2.height/2);
   //image(img2, 350+xp, 0, img2.width, img2.height);
   //image(img2, 400+xp, 0, img2.width/2, img2.height/2);
   // image(img2, 150+xp, 0, img2.width, img2.height);
  image(img4, 0, 0, windowWidth, windowHeight);
  pop();

  push();
  tint(255, tra2);
  image(img3, 0, 160+yp, windowWidth, 500);
  image(img5, 0, 0, windowWidth, windowHeight);
  pop();

  textSize(30);
  textAlign(CENTER);
  fill(86, 101, 115, tra4);
  text(t, windowWidth/2,  windowHeight/2);

  tra4 = tra4 - 15;
}
