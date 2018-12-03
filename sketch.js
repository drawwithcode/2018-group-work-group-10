var messageContainer = document.createElement('div');
    messageContainer.className = 'gest-message';

var tra=255;

// var w=0;
// var h=0;
// w = w+10;
// h = h+10;


function preload(){
  // put preload code here
}

function setup() {
  createCanvas(windowWidth,windowHeight);

  document.body.append(messageContainer);

  var styles = {


    positioning: 'margin: 22% auto; min-width: 100px; max-width: 400px; width: 80%; padding: 15px;',
    copy: 'font: normal 35px/1.1 \"Helvetica Neue\", Helvetica, Arial, sans-serif; color: #fff; font-size: 45px; text-align: center;',
    general: 'display: block; background-color: #000; z-index: 100; border-radius: 10px;'
  },
    messageContainerStyle = styles.positioning + styles.copy + styles.general;

  gest.options.subscribeWithCallback(function(gesture) {
    var message = '';
    if (gesture.direction) {
      message = gesture.direction;
      tra = tra - 30;
    } else {
      message = gesture.error.message;
    }

    messageContainer.innerHTML = '<p style=\"margin:0\">' + message + '</p>';
    messageContainer.setAttribute('style', messageContainerStyle);

    window.setTimeout(function() {
      messageContainer.setAttribute('style', 'display: none;');
    }, 3000);
  });

  gest.start();


}

function draw() {
  background(255);

  for(var i=0; i<120; i++){
    for(var j=0; j<70; j++){
      noStroke();
      fill(130,156,187,tra);
      ellipse(i*10,j*10, 5, 5);
    }

  }

}
