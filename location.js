
var api;
var myLoc;
var tra1 = 0;

var img;
var s=3;

var la;
var lo;


function preload(){
  myLoc = getCurrentPosition();
  img = loadImage("./assets/map1.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  //location
  la = myLoc.latitude;
  lo = myLoc.longitude;

  let url =
   //'http://api.waqi.info/feed/geo:45.5109784;9.178321/?token=76257e527f21024547d83e6f3e354caac7d456e8';
   'http://api.waqi.info/feed/geo:' + la + ';' + lo + '/?token=76257e527f21024547d83e6f3e354caac7d456e8';
  api = loadJSON(url);
  api = eval(api);

  for(var i=0; i<api.length; i++ ){
    var city = api.data;

  }
  console.log(city);

}


function draw() {

    background(210);

    //map
    push();
    scale(s);
    image(img, 0, -30, width, height);
    pop();
    s = s-0.05;

    if(s<=1){
      s=1;
    }

    //text

    var t = api;
    text(t, width/2, height/4);

    //button
    button();

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
  rect(windowWidth/2, windowHeight-80, 160, 50, 30);
  textSize(30);
  noStroke();
  fill(50, tra1);
  text('HOME PAGE', windowWidth/2,  windowHeight-67);
  if(frameCount>60){
    tra1 = tra1 + 2;
  }
  pop();


  if(mouseX>windowWidth/2 - 80 && mouseX<windowWidth/2 + 80 && mouseY> windowHeight-105 && mouseY<windowHeight-55) {
    push()
    strokeWeight(3);
    stroke(50);
    fill(100);
    rect(windowWidth/2, windowHeight-80, 160, 50, 30);
    textSize(30);
    noStroke();
    textStyle(BOLD);
    fill(230);
    text('HOME PAGE', windowWidth/2,  windowHeight-67);
    pop();
  }

}


function mouseClicked() {

      if(mouseX>windowWidth/2 - 80 && mouseX<windowWidth/2 + 80 && mouseY> windowHeight-105 && mouseY<windowHeight-55) {
          window.location.href = "index.html";}

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
