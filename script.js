var numberOfButtons = document.querySelectorAll(".drum").length;
for (var i = 0; i < numberOfButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);
}

function handleClick() {
  var btn = this.innerHTML;
  makesound(btn);
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
  }
}
