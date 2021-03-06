![Lahore](/assets/losgo.png)
 
 ## About
 
 **Hazy World** is a student project based in Politacnico Di Milano and cretated under Creative Codng course in 2018-2019 fall semester. It is created with p5 in javascript language and in support to it we also used HTML and CSS.  

## Content
 * Subject of project
 * Aim of project
 * Interactions
 * How it works?
 * Details
 * Challenges
 
## SUBJECT OF PROJECT 

The theme we choose is the **Air Pollution**, which is more and more serious in in recent years. There are a lot of different types of pollution, we want to hightlight the problem of air pollution especially haze. Therefore, We select some top polluted cities which are Beijing, China/New Delhi, India/Ulan Bator, Mongolia/Cairo, Egypt/Lahore, Pakistan.

![Lahore](https://github.com/drawwithcode/2018-group-work-group-10/blob/master/assets/map_readme.png)

## AIM OF PROJECT

This project is to make people experience the haze as well as different types of haze and be aware of the harm of air pollution around the world. 

Users will experience the feeling of staying in the environment of heavy air pollution and try to see the landscape of the city clearly. The experience ends showing users some data of that country or city.

![Lahore](https://github.com/drawwithcode/2018-group-work-group-10/blob/master/assets/readme_haze.jpg)

## INTERACTIONS
* Hazy World combines three different interaction with its users. They are waving hands and mouse.
 
     ![Lahore](https://github.com/drawwithcode/2018-group-work-group-10/blob/master/assets/video-call.png)
      * WebCam; Main interactions such as cleaning the haze 

     ![Lahore](https://github.com/drawwithcode/2018-group-work-group-10/blob/master/assets/cursor1.png)
       * Clicking by Mouse; Sub interactions such as swiping to next city.
     
     ![Lahore](https://github.com/drawwithcode/2018-group-work-group-10/blob/master/assets/cursor2.png)
       * Moving Mouse; Sub interactions such as moving mouse to push the haze or number.

### HOW IT WORKS?

Firstly, the user clicks the city that s/he wants to explore. Then, the user starts to experience how haze effects cities. They try to clear their vision with interacting with webcam because they can barely see the city. After cleaning process, they get specific information about related city and its haze problem. 

There is next and back button in every page to finish or continue the experience. When the user finishes to experience of every city, they end up with more to read and your location page. In this page user can read more about haze and air pollution. On the other hand, they can learn the percentage of haze and air pollution in their city. 

 ![Lahore](https://github.com/drawwithcode/2018-group-work-group-10/blob/master/assets/gest.gif)

### DETAILS 

* The project contains different code libraries and URL data. 

  * **[gest.min.js](https://github.com/hdmchl/gest.js)** 
  
  gest.js is the main library to obtain human gestures and to clean actions, which is developed by [hdmchl](https://github.com/hdmchl) and it's a webcam based gesture recognition library that helps developers make webpages more immersive.
  
  We used this library to recognize the user's gesture so that to clean the haze gradually, as well as to simulate a immersive experience of cleaning haze by waving arms.
  
  For example:
  
  ```
  <code> gest.options.subscribeWithCallback(function(gesture) {
    //var message = '';
    if (gesture.direction) {
      message = gesture.direction;
      tra1 = tra1 - 40;
      tra2 = tra2 - 35;
    } else {
      message = gesture.error.message;
    }
  });
  gest.start();
  gest.options.sensitivity(90); </code> 
  ```
  ![city](/assets/city.gif)
  
  * **[p5.gif.js](https://github.com/antiboredom/p5.gif.js)**
  
  p5.gif.js is a library that let we play animated gifs in p5.js sketches. You can load a gif by calling loadGif('something.gif') and then can display it using p5's built in image() function. Like this:
  
  ```
  <code> if(frameCount < 30){
      gif.size(200, 200);
      gif.position(windowWidth/2 - 100, 70);
   } else {
      gif.size(0, 0);
  } </code> 
  ```
  
  * **p5.geolocation** 
  
  p5.geolocation is used to get the location of users and direct them to learn air pollution rates at their location.
  
  * **URL Data** 
  
  We used [Air Quality Programmatic APIs](http://aqicn.org/api/cn/) to get the real time air quality index of the user's location. Like this:
  
  ```
  <code>let url =
  'http://api.waqi.info/feed/geo:' + la + ';' + lo + '/?token=7c35c573db01e62c917b73ff16afb1e111780d3d';
  
  loadJSON(url, gotData, 'jsonp'); </code>
  ```
 
 
 * **Graphical Style** 
 
* The graphical style is illustration which is drawn by hand. 

  * In drawings, there are most important city landmarks such as Taj Mahal in Delhi. 
  * The colors of drawings are based on the color of country and city. 
  
  ![alt text](https://github.com/drawwithcode/2018-group-work-group-10/blob/master/assets/delhi.jpg)

* In different cities, color of the hazes are different to highlight the different pollution reasons and outcomes such as CO, PM2.5, PM10 

## CHALLENGES

* **Gesture Recognition Sensitiveness**

  The gesture recognition sensitiveness is hard to control and it cannot always recognize every gesture from the user. To let user feel the process and percentage of how much haze they clean, we added a ellipse progress bar:

 ```
  var count = map(tra1, 255, 0, 0,TWO_PI);
  arc(60, 60, 50, 50, 0, count);
  ``` 
  ![process](/assets/process.gif)

* **URL Data & Real Time Location**

  We had a big problem of getting the URL data and combining it with p5.geolocation.js. Then we changed our code like this:

```
la = myLoc.latitude;
lo = myLoc.longitude;
  
let url =
'http://api.waqi.info/feed/geo:' + la + ';' + lo + '/?token=7c35c573db01e62c917b73ff16afb1e111780d3d';
  
loadJSON(url, gotData, 'jsonp');
 ```
  And also added this in html head:
  
  ```  <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests"> ``` 
  
  ![location](/assets/location.gif)


## TEAM MEMBERS:
  * Zixun  Huang
  * Chung Wui Kang
  * Deniz Yanik
