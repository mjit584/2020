console.log('aboutsort.js is loaded');

filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("inner-card");
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
var btnContainer = document.getElementById("AboutFilter");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("activesort");
    console.log(current);
    current[0].className = current[0].className.replace(" activesort", " ");
    this.className += " activesort";
  });
}

// This is for the toggle of the bio
function showInfo(number) {
var x = document.getElementById(number);
var y = document.getElementById('overlay '+number);
var z = document.getElementById('icontoggle '+number);

if (x.style.display === "none") {
    x.style.display = "block";
    y.style.top = 'auto';
    y.style.bottom = 0;
    z.classList.toggle('fa-minus');
  } else {
    x.style.display = "none";
  }
}
