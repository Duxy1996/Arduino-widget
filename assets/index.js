
// # Req ./Vector.js
// # Req ./Slider.js

var slider = []

function run()
{
  slider = new Slider('containerframe','container','circleSlideBar');
  slider.addBindObject("exampleLabel");
  slider.addBindObject("exampleLabel1");
  slider.addBindObject("exampleLabel2");
  slider.addBindObject("exampleLabel3");
}

function setSliderMax()
{
  var newRange = parseInt(document.getElementById('searchTxt').value);
  slider.setRange(newRange);
}

document.addEventListener("DOMContentLoaded", function(event) {
  run();
});