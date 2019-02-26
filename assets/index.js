
// # Req ./Vector.js

function run()
{
  var antPos = new Vector(0,0);

  var listener = document.getElementById('containerframe');

  listener.addEventListener('mousemove', clickHandler);

  function getModule(v0)
  {
    return Math.sqrt(v0.x * v0.x + v0.y * v0.y)
  }

  function getAngleVectors(v1, v2)
  {
    var numerator = v1.x * v2.x + v2.y * v1.y;
    var denominat = getModule(v1) + getModule(v2);
    var res = Math.acos(numerator / denominat);
    res = (res * 180) / Math.PI;

    var modRed = (res-10) * 1.15

    if (v1.x > 0)
    {
      placeDiv(+modRed);
    }
    else{
      placeDiv(-modRed);
    }
  }

  function clickHandler(temp)
  {
    var difference = Math.abs(antPos.x - temp.offsetX);

    var wOne = difference / 80

    antPos.x = temp.offsetX * 0.05 + antPos.x * 0.95;


    antPos.y = temp.offsetY * 0.05 + antPos.y * 0.95;


    var v1 = new Vector(antPos.x - 45, antPos.y - 45);
    var v2 = new Vector(0,1);

    getAngleVectors(v1,v2);
  }

  function placeDiv(angle)
  {
    var d = document.getElementById('circleSlideBar');
    var container = document.getElementById('container');

    d.style.position = 'relative';

    var square = (container.offsetWidth)/2;

    var x = Math.cos(angle * Math.PI / 180);
    var y = Math.sin(angle * Math.PI / 180);

    x = square * x + square - 10;
    y = square * y + square - 10;

    d.style.left = y +'%';
    d.style.top =  x +'%';
  }
}

document.addEventListener("DOMContentLoaded", function(event) {
  run();
});