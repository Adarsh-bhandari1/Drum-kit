var numberOfButtons = document.querySelectorAll(".drum").length;
for (var i = 0; i < numberOfButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);
}

document.addEventListener("keypress", function (event) {
  var key = event.key.toUpperCase();
  makesound(key);
  makeanimation(key);
});

function handleClick() {
  var btn = this.innerHTML;
  makesound(btn);
}

function makeanimation(currentkey) {
  var btn = document.querySelector("." + currentkey.toLowerCase());
  if (btn) {
    btn.style.animation = "pulseGlow 0.2s ease";
    setTimeout(function () {
      btn.style.animation = "";
    }, 200);
  }
}

function makesound(key) {
  switch (key) {
    case "W":
      var inst1 = new Audio("./sounds/tom-1.mp3");
      inst1.play();
      break;

    case "A":
      var inst2 = new Audio("./sounds/tom-2.mp3");
      inst2.play();
      break;
    case "S":
      var inst3 = new Audio("./sounds/tom-3.mp3");
      inst3.play();
      break;
    case "D":
      var inst4 = new Audio("./sounds/tom-4.mp3");
      inst4.play();
      break;
    case "J":
      var inst5 = new Audio("./sounds/snare.mp3");
      inst5.play();
      break;
    case "K":
      var inst6 = new Audio("./sounds/crash.mp3");
      inst6.play();
      break;
    case "L":
      var inst7 = new Audio("./sounds/kick-bass.mp3");
      inst7.play();
      break;
    default:
      console.log(key);
      break;
  }
}
