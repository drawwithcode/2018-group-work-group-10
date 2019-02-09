
var api;
var myLoc;
var tra1 = 0;
var tra2 = 0;
var tra3 = 0;

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
  loadJSON(url, gotData);
  //api = eval(api);

}

function gotData(data){
  api = data;
  console.log(api);
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

    //button
    button();

    //data
    if(api){
      var city = api.data.city.name;
      var idx = api.data.aqi;
      var pm25 = api.data.iaqi.pm25.v;
      var pm10 = api.data.iaqi.pm10.v;
      var time = api.data.time.s;
    }

    if(frameCount>50){
    push();
    rectMode(CENTER);
    strokeWeight(1);
    stroke(60, tra2);
    fill(220,tra3);
    rect(windowWidth/2,  windowHeight/4+65, 420, 230, 5);
    pop();

    textAlign(LEFT);
    textFont('Amatic SC');
    fill(100,tra2);
    textSize(20);
    text('You are in: ', windowWidth/2-150, windowHeight/4+15);
    text('Air Quality Index: ', windowWidth/2-150, windowHeight/4+45);
    text('PM2.5: ', windowWidth/2-150, windowHeight/4+75);
    text('PM10: ', windowWidth/2-150, windowHeight/4+105);
    text('Time: ', windowWidth/2-150, windowHeight/4+135);
    fill(20,tra2);
    text(city, windowWidth/2-20, windowHeight/4+15);
    text(idx, windowWidth/2-20, windowHeight/4+45);
    text(pm25, windowWidth/2-20, windowHeight/4+75);
    text(pm10, windowWidth/2-20, windowHeight/4+105);
    text(time, windowWidth/2-20, windowHeight/4+135);
    tra2 = tra2 + 3;
    tra3 = tra3 + 3;
  }

  if(tra3>190){
    tra3 = 190;
  }

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
    tra1 = tra1 + 1;
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
