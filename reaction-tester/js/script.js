var myBox = document.getElementById('box');

var clickedTime;
var createdTime;
var reactionTime;
var myTime = document.getElementById('time');
var boxColor = document.getElementById('boxColor');

function getRandomColor() {
  var letters = "0123456789ABCDEF".split('');
  var color = "#";

  for (var i = 0; i < 6; i++) {
    color += letters[Math.round(Math.random() * 15)];
  }
  return color;
}

function getRandomShape() {
  var borderRad = Math.random();
  borderRad = borderRad * 60;
  borderRad = Math.ceil(borderRad);

  return borderRad + "%";
}

function getTopMargin() {
  var top = Math.random();
  top = top * 1000;
  top = Math.ceil(top);

  return top + "px";
}

function getLeftMargin() {
  var left = Math.random();
  left = left * 1000;
  left = Math.ceil(left);

  return left + "px";
}

function makeBox() {
  createdTime = Date.now();

  var randomTime = Math.random();
  randomTime = randomTime * 5000;
  randomTime = Math.floor(randomTime);

  var newColor = getRandomColor();
  var newShape = getRandomShape();
  var newTop = getTopMargin();
  var newLeft = getLeftMargin();

  setTimeout(function() {
    myBox.style.display = "block";
    myBox.style.background = newColor;
    myBox.style.borderRadius = newShape;
    myBox.style.marginTop = newTop;
    myBox.style.marginLeft = newLeft;
    boxColor.innerHTML = newColor;
    createdTime = Date.now();
  }, randomTime);
}

myBox.onclick = function() {
  clickedTime = Date.now();

  reactionTime = (clickedTime - createdTime) / 1000;
  reactionTime = reactionTime.toFixed(2);

  myTime.innerHTML = reactionTime + " sec";

  myBox.style.display = "none";
  makeBox();
};

makeBox();














































