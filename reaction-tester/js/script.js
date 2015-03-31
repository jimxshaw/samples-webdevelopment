var myBox = document.getElementById('box');

function makeBox() {
  var randomTime = Math.random();
  randomTime = randomTime * 6000;
  randomTime = Math.floor(randomTime);

  setTimeout(function() {
    myBox.style.display = "block";
  }, randomTime);
}

myBox.onclick = function() {
  myBox.style.display = "none";
  makeBox();
};

makeBox();














































