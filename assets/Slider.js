// # Req ./Vector.js

class Slider
{
  constructor(frame, container, slider)
  {
    this.frameName     = frame;
    this.containerName = container;
    this.sliderName    = slider;
    this.value         = 0;
    this.antPos        = new Vector(0,0);

    this.listOfBindings = [];

    this.listener  = document.getElementById(this.frameName);
    this.container = document.getElementById(this.containerName);
    this.slideBar  = document.getElementById(this.sliderName);

    this.square = (this.container.offsetWidth)/2;

    this.listener.addEventListener('mousemove', this.clickHandler.bind(this));

  }

  addBindObject(name)
  {
    this.listOfBindings.push(name);
  }

  updateBindObjects(tmpValue)
  {
    for (var index in this.listOfBindings)
    {
      var tmpBindObject = document.getElementById(this.listOfBindings[index]);
      if (tmpBindObject != null)
      {
        tmpBindObject.innerText = Math.round(tmpValue);
      }
      else
      {
        console.log("ERROR:: An element is set to null");
      }
    }
  }

  getModule(v0)
  {
    return Math.sqrt(v0.x * v0.x + v0.y * v0.y)
  }

  getAngleVectors(v1, v2)
  {
    var numerator = v1.x * v2.x + v2.y * v1.y;
    var denominat = this.getModule(v1) + this.getModule(v2);
    var res = Math.acos(numerator / denominat);
    res = (res * 180) / Math.PI;

    var modRed = (res-10) * 1.15

    if (v1.x > 0)
    {
      modRed = + modRed;
    }
    else
    {
      modRed = - modRed;
    }

    this.placeDiv(modRed);

    this.value = Math.round(modRed);

    this.updateBindObjects(this.value);

  }

  clickHandler(temp)
  {
    var difference = Math.abs(this.antPos.x - temp.offsetX);

    this.antPos.x = temp.offsetX * 0.1 + this.antPos.x * 0.9;
    this.antPos.y = temp.offsetY * 0.1 + this.antPos.y * 0.9;

    var v1 = new Vector(this.antPos.x - 45, this.antPos.y - 45);
    var v2 = new Vector(0,1);

    this.getAngleVectors(v1,v2);
  }

  placeDiv(angle)
  {

    this.slideBar.style.position = 'relative';

    var x = Math.cos(angle * Math.PI / 180);
    var y = Math.sin(angle * Math.PI / 180);

    x = this.square * x + this.square - 10;
    y = this.square * y + this.square - 10;

    this.slideBar.style.left = y +'%';
    this.slideBar.style.top =  x +'%';

  }

}