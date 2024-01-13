// Typewriter created by Tameem Safi.
// source: https://github.com/tameemsafi/typewriterjs

var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true,
    delay:50,
    deleteSpeed:5
});

typewriter
    .typeString("is a student")
    .pauseFor(1000)
    .deleteChars(7)
    .pauseFor(500)
    .typeString("programmer")
    .pauseFor(1000)
    .deleteChars(10)
    // .pauseFor(500)
    // .typeString("patient poker player")
    // .pauseFor(1000)
    // .deleteChars(20)
    // .pauseFor(500)
    // .typeString("tactical thrifter")
    // .pauseFor(1000)
    // .deleteChars(17)
    // .pauseFor(500)
    // .typeString("semi-skilled skater")
    // .pauseFor(1000)
    // .deleteChars(19)
    // .pauseFor(500)
    // .typeString("motivated musician")
    // .pauseFor(1000)
    // .deleteChars(18)
    .pauseFor(500)
    .typeString("lifelong learner")
    .pauseFor(1000)
    .deleteChars(16)
    // .pauseFor(500)
    // .typeString("GIF geek")
    // .pauseFor(1000)
    // .deleteChars(8)
    .start();

// When the user scrolls down 20px from the top of the document, slide down the navbar
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 700 || document.documentElement.scrollTop > 700) {
    document.getElementById("nav").style.top = "0";
  } else {
    document.getElementById("nav").style.top = "-70px";
  }
}

//filter buttons 
//source : https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_filter_elements

filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("each-project");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    //console.log(element.className, arr2[i]);
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("button-section");
var btns = btnContainer.getElementsByClassName("filter-button");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
    //console.log(current);
  });
}