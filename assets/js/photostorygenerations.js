/* global ScrollMagic */
/* global TimelineMax */
/* global Linear */

console.clear();
var controller = new ScrollMagic.Controller();
var sections = document.querySelectorAll("section");
var tl = new TimelineMax();
var offset = window.innerHeight + "200%";


//for (let i = 1; i < sections.length; i++) {tl.from(sections[i], 1, { x: "100%", ease: Linear.easeNone }, "+=1");}

tl
    .fromTo("section.panel.two", 1, { x: "100%" }, { x: "0%", ease: Linear.easeNone })
    .fromTo("section.panel.three", 1, { x: "100%" }, { x: "0%", ease: Linear.easeNone })
    .fromTo("section.panel.four", 1, { x: "100%" }, { x: "0%", ease: Linear.easeNone })
    .fromTo("section.panel.five", 1, { x: "100%" }, { x: "0%", ease: Linear.easeNone })
    .fromTo("section.panel.six", 1, { x: "100%" }, { x: "0%", ease: Linear.easeNone })
    .fromTo("section.panel.seven", 1, { x: "100%" }, { x: "0%", ease: Linear.easeNone })
    .fromTo("section.panel.eight", 1, { x: "100%" }, { x: "0%", ease: Linear.easeNone })
    .fromTo("section.panel.nine", 1, { x: "100%" }, { x: "0%", ease: Linear.easeNone })
    .fromTo("section.panel.ten", 1, { x: "100%" }, { x: "0%", ease: Linear.easeNone })
    .fromTo("section.panel.eleven", 1, { x: "100%" }, { x: "0%", ease: Linear.easeNone })
    .fromTo("section.panel.twelve", 1, { x: "100%" }, { x: "0%", ease: Linear.easeNone })
    .fromTo("section.panel.thirteen", 1, { x: "100%" }, { x: "0%", ease: Linear.easeNone })
    .fromTo("section.panel.fourteen", 1, { x: "100%" }, { x: "0%", ease: Linear.easeNone })
    .fromTo("section.panel.fifteen", 1, { x: "100%" }, { x: "0%", ease: Linear.easeNone })
    .fromTo("section.panel.sixteen", 1, { x: "100%" }, { x: "0%", ease: Linear.easeNone })
    .fromTo("section.panel.seventeen", 1, { x: "100%" }, { x: "0%", ease: Linear.easeNone })
    .fromTo("section.panel.eighteen", 1, { x: "100%" }, { x: "0%", ease: Linear.easeNone })
    .fromTo("section.panel.nineteen", 1, { x: "100%" }, { x: "0%", ease: Linear.easeNone })
    .fromTo("section.panel.twenty", 1, { x: "100%" }, { x: "0%", ease: Linear.easeNone })
    .fromTo("section.panel.twenty-one", 1, { x: "100%" }, { x: "0%", ease: Linear.easeNone })
    .fromTo("section.panel.twenty-two", 1, { x: "100%" }, { x: "0%", ease: Linear.easeNone })
    .fromTo("section.panel.twenty-three", 1, { x: "100%" }, { x: "0%", ease: Linear.easeNone })
    .fromTo("section.panel.twenty-four", 1, { x: "100%" }, { x: "0%", ease: Linear.easeNone })
    .fromTo("section.panel.twenty-five", 1, { x: "100%" }, { x: "0%", ease: Linear.easeNone })
    .fromTo("section.panel.twenty-six", 1, { x: "100%" }, { x: "0%", ease: Linear.easeNone })
    .fromTo("section.panel.twenty-seven", 1, { x: "100%" }, { x: "0%", ease: Linear.easeNone })
    .fromTo("section.panel.twenty-eight", 1, { x: "100%" }, { x: "0%", ease: Linear.easeNone })
    .fromTo("section.panel.twenty-nine", 1, { x: "100%" }, { x: "0%", ease: Linear.easeNone })
    .fromTo("section.panel.thirty", 1, { x: "100%" }, { x: "0%", ease: Linear.easeNone })




new ScrollMagic.Scene({
    triggerElement: "#pinMaster",
    triggerHook: "onLeave",
    duration: "1000%",
})
    .setPin("#pinMaster")
    .setTween(tl)
    .addTo(controller);

let scenes = [];



// For header
window.onscroll = function () { exitFunction() };

var header = document.getElementById("myHeader");
var sticky = header.offsetTop;

function exitFunction() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}

//For My Div
function myFunction() {
    var x = document.getElementById("myDIV");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

//Go back
function goBack() {
    window.history.back()
}
