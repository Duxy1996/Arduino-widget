
// # Req ./Vector.js
// # Req ./Slider.js

function run()
{


  var slider = new Slider('containerframe','container','circleSlideBar');
  slider.addBindObject("exampleLabel");
  slider.addBindObject("exampleLabel1");
  slider.addBindObject("exampleLabel2");
  slider.addBindObject("exampleLabel3");

}

document.addEventListener("DOMContentLoaded", function(event) {
  run();
});