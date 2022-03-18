var numberofbutton = document.querySelectorAll(".drum");

for (var i = 0; i < numberofbutton.length; i++) {

  numberofbutton[i].addEventListener("click", function() {
    var nameofbutton = this.innerHTML;
    selectTune(nameofbutton);
    buttonAnimation(nameofbutton);

  });
}

document.addEventListener("keydown", function(event){
  selectTune(event.key);
  buttonAnimation(event.key);
});

function selectTune(key) {

  switch (key) {
    case "s":
      var audio1 = new Audio("sounds/tom-1.mp3");
      audio1.play();
      break;

    case "r":
      var audio2 = new Audio("sounds/tom-2.mp3");
      audio2.play();
      break;

    case "g":
      var audio3 = new Audio("sounds/tom-3.mp3");
      audio3.play();
      break;

    case "m":
      var audio4 = new Audio("sounds/tom-4.mp3");
      audio4.play();
      break;

    case "p":
      var audio5 = new Audio("sounds/snare.mp3");
      audio5.play();
      break;

    case "d":
      var audio6 = new Audio("sounds/kick-bass.mp3");
      audio6.play();
      break;

    case "n":
      var audio7 = new Audio("sounds/crash.mp3");
      audio7.play();
      break;
    default:
      console.log("nameofbutton");

  }

}

function buttonAnimation(currentkey){
  var actionKey=document.querySelector("." + currentkey);
  actionKey.classList.add("pressed");
  setTimeout(function(){
    actionKey.classList.remove("pressed");
  },100);
}
