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

		img1.src = "../photostory-weeds/Seaweed-1.jpg";
		img2.src = "../photostory-weeds/Seaweed-2.jpg";
		img3.src = "../photostory-weeds/Seaweed-3.jpg";
		img4.src = "../photostory-weeds/Seaweed-4.jpg";
		img5.src = "../photostory-weeds/Seaweed-5.jpg";
		img6.src = "../photostory-weeds/Seaweed-6.jpg";
		img7.src = "../photostory-weeds/Seaweed-7.jpg";
		img8.src = "../photostory-weeds/Seaweed-8.jpg";
		img9.src = "../photostory-weeds/Seaweed-9.jpg";
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
	console.log('preloaded story 5');
}
addLoadEvent(preloader);
