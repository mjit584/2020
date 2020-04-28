function preloader() {
	if (document.images) {
		// var img1 = new Image();
		// var img2 = new Image();
		// var img3 = new Image();
		// var img4 = new Image();
		// var img5 = new Image();
		// var img6 = new Image();
		// var img7 = new Image();
		// var img8 = new Image();
		// var img9 = new Image();
		// var img10 = new Image();
		//
		// img1.src = "../photostory-generations/Guiding_Gen_1.jpg";
		// img2.src = "../photostory-generations/Guiding_Gen_3.jpg";
		// img3.src = "../photostory-generations/Guiding_Gen_6.jpg";
		// img4.src = "../photostory-generations/Guiding_Gen_8.jpg";
		// img5.src = "../photostory-generations/Guiding_Gen_10.jpg";
		// img6.src = "../photostory-generations/Guiding_Gen_15.jpg";
		// img7.src = "../photostory-generations/Guiding_Gen_18.jpg";
		// img8.src = "../photostory-generations/Guiding_Gen_19.jpg";
		// img9.src = "../photostory-generations/Guiding_Gen_22.jpg";
		// img10.src = "../photostory-generations/Guiding_Gen_24.jpg";

	}
}
function addLoadEvent(func) {
	var oldonload = window.onload;
	if (typeof window.onload != 'function') {
		window.onload = func;
	} else {
		window.onload = function() {
			if (oldonload) {
				oldonload();
			}
			func();
		}
	}
	console.log('preloaded story 3');
}
addLoadEvent(preloader);
