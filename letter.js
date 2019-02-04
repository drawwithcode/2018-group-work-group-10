var letters = [];
var img;
var x = 0;
var speed = 0.5;

var tra1 = 0;
var tra2 = 0;


function preload(){
  img = loadImage("./assets/fog1.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  letters = new letter(windowWidth/2-190, windowHeight/2, 13, 10);

}

function draw() {

    background(210);

    //cloud
    image(img, x, 100, windowWidth, windowHeight);
    x = x+speed;
    if(x > 450 || x < -50){
      speed = speed * -1;
    }

    button();
    letters.display();
    letters.move();

    image(img, x-500, -100, windowWidth, windowHeight);

}


function letter(x,y,w,h,v1){

       this.x = x;
       this.y = y;
       this.w = w;
       this.h1 = h;
       this.h2 = 8;
       this.h3 = 7;
       this.v1 = random(-0.1,0.1);
       this.v2 = random(-0.13,0.1);
       this.v3 = random(-0.1,0.13);

       this.display=function(){
         strokeWeight(3);
         stroke(230, tra1);
         fill(70, tra1);
         textSize(55);
         text('A', this.x-this.w*10,this.y-this.h1);
         text('I', this.x-this.w*8,this.y+this.h3);
         text('R', this.x-this.w*6,this.y-this.h2);
         text('P', this.x-this.w*2,this.y+this.h3);
         text('O', this.x,this.y-this.h1);
         text('L', this.x+this.w*2,this.y+this.h2);
         text('L', this.x+this.w*4,this.y-this.h1);
         text('U', this.x+this.w*6,this.y+this.h3);
         text('T', this.x+this.w*8,this.y-this.h1);
         text('I', this.x+this.w*10,this.y+this.h2);
         text('O', this.x+this.w*12,this.y-this.h2);
         text('N', this.x+this.w*14,this.y+this.h1);
         text('I', this.x+this.w*18,this.y-this.h3);
         text('S', this.x+this.w*20,this.y+this.h1);
         text('E', this.x+this.w*24,this.y-this.h2);
         text('V', this.x+this.w*26,this.y+this.h3);
         text('E', this.x+this.w*28,this.y-this.h3);
         text('R', this.x+this.w*30,this.y+this.h1);
         text('Y', this.x+this.w*32,this.y-this.h2);
         text('W', this.x+this.w*34,this.y+this.h2);
         text('H', this.x+this.w*36,this.y-this.h3);
         text('E', this.x+this.w*38,this.y+this.h1);
         text('R', this.x+this.w*40,this.y-this.h1);
         text('E', this.x+this.w*42,this.y+this.h2);
       }

       this.move=function(){
       this.h1 = this.h1 + this.v1;
       this.h2 = this.h2 + this.v2;
       this.h3 = this.h3 + this.v3;
       if(this.h1 > 12 || this.h1 < -12){
         this.v1 = this.v1 * -1;
       }

       if(this.h2 > 12 || this.h2 < -12){
         this.v2 = this.v2 * -1;
       }

       if(this.h3 > 12 || this.h3 < -12){
         this.v3 = this.v3 * -1;
       }

       tra1 = tra1 + 5;
     }

 }

function button(){

  textAlign(CENTER);
  textFont('Amatic SC');
  rectMode(CENTER);

  push()
  strokeWeight(1.5);
  stroke(90, tra1);
  //fill(20,80);
  rectMode(CENTER);
  noFill();
  rect(windowWidth/2, windowHeight-135, 310, 40, 10);
  textSize(22);
  noStroke();
  fill(50, tra1);
  text('click to check the air quality of your location', windowWidth/2,  windowHeight-127);
  tra2 = tra2 + 3;
  pop();


  if(mouseX>windowWidth/2 - 155 && mouseX<windowWidth/2 + 155 && mouseY> windowHeight-155 && mouseY<windowHeight-115) {
    push()
    strokeWeight(1.5);
    stroke(50);
    fill(100);
    rect(windowWidth/2, windowHeight-135, 310, 40, 10);
    textSize(22);
    noStroke();
    textStyle(BOLD);
    fill(230);
    text('click to check the air quality of your location', windowWidth/2,  windowHeight-127);
    pop();
  }

}


function mouseClicked() {

      if(mouseX>windowWidth/2 - 155 && mouseX<windowWidth/2 + 155 && mouseY> windowHeight-155 && mouseY<windowHeight-115) {
          window.location.href = "location.html";}

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
