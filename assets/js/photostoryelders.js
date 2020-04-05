console.log('photostoryelders.js is loaded');


//FOR THE POPUP
// Get the modal
var modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


//FOR INSIDE THE POPUP
//global ScrollMagic
// global TimelineMax
// global Linear

console.clear();
var controller = new ScrollMagic.Controller();
var sections = document.querySelectorAll("section");
var tl = new TimelineMax();
var offset = window.innerHeight;

//for (let i = 1; i < sections.length; i++) {tl.from(sections[i], 1, { x: "100%", ease: Linear.easeNone }, "+=1");}

tl
    .fromTo("section.panel.two", 1, { x: "100%" }, { x: "0%", ease: Linear.easeNone })
    .fromTo("section.panel.three", 1, { x: "100%" }, { x: "0%", ease: Linear.easeNone })
    .fromTo("section.panel.four", 1, { x: "100%" }, { x: "0%", ease: Linear.easeNone })
    .fromTo("section.panel.five", 1, { x: "100%" }, { x: "0%", ease: Linear.easeNone })
    .fromTo("section.panel.six", 1, { x: "100%" }, { x: "0%", ease: Linear.easeNone })
    .fromTo("section.panel.seven", 1, { x: "100%" }, { x: "0%", ease: Linear.easeNone })
    .fromTo("section.panel.seven", 1, { x: "0%" }, { x: "-100%", ease: Linear.easeNone })
    .fromTo("section.panel.eight", 2, { x: "100%" }, { x: "-100%", ease: Linear.easeNone })
    .fromTo("section.panel.nine", 1, { x: "100%" }, { x: "0%", ease: Linear.easeNone })
    .fromTo("section.panel.ten", 1, { x: "100%" }, { x: "0%", ease: Linear.easeNone })
    .fromTo("section.panel.eleven", 1, { x: "100%" }, { x: "0%", ease: Linear.easeNone })
    .fromTo("section.panel.twelve", 1, { x: "100%" }, { x: "0%", ease: Linear.easeNone })
    .fromTo("section.panel.thirteen", 1, { x: "100%" }, { x: "0%", ease: Linear.easeNone })
    .fromTo("section.panel.fourteen", 1, { x: "100%" }, { x: "0%", ease: Linear.easeNone })


new ScrollMagic.Scene({
    triggerElement: "#pinMaster",
    triggerHook: "onLeave",
    duration: "300%"
})
    .setPin("#pinMaster")
    .setTween(tl)
    .addTo(controller);

let scenes = [];
