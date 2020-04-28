function preloader() {
	if (document.images) {
		var img1 = new Image();
		var img2 = new Image();
		var img3 = new Image();
		var img4 = new Image();
		var img5 = new Image();
		var img6 = new Image();
		var img7 = new Image();
		var img8 = new Image();
		var img9 = new Image();
		var img10 = new Image();
		var img11 = new Image();

		img1.src = "../photostory-beauty/DelicateBalance_1.jpg";
		img2.src = "../photostory-beauty/DelicateBalance_3.jpg";
		img3.src = "../photostory-beauty/DelicateBalance_7.jpg";
		img4.src = "../photostory-beauty/DelicateBalance_12.jpg";
		img5.src = "../photostory-beauty/DelicateBalance_14.jpg";
		img6.src = "../photostory-beauty/DelicateBalance_16.jpg";
		img7.src = "../photostory-beauty/DelicateBalance_18.jpg";
		img8.src = "../photostory-beauty/DelicateBalance_20.jpg";
		img9.src = "../photostory-beauty/DelicateBalance_23.jpg";
		img10.src = "../photostory-beauty/DelicateBalance_26.jpg";
		img11.src = "../photostory-beauty/DelicateBalance_28.jpg";
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
	console.log('preloaded story 4');
}
addLoadEvent(preloader);
