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
		var img12 = new Image();
		var img13 = new Image();
		var img14 = new Image();
		var img15 = new Image();
		var img16 = new Image();
		var img17 = new Image();
		var img18 = new Image();
		var img19 = new Image();


		img1.src = "../photostory-fishers/FishingGeneration-1.jpg";
		img2.src = "../photostory-fishers/FishingGeneration-2.jpg";
		img3.src = "../photostory-fishers/FishingGeneration-5.jpg";
		img4.src = "../photostory-fishers/FishingGeneration-7.jpg";
		img5.src = "../photostory-fishers/FishingGeneration-11.jpg";
		img6.src = "../photostory-fishers/FishingGeneration-15.jpg";
		img7.src = "../photostory-fishers/FishingGeneration-17.jpg";
		img8.src = "../photostory-fishers/FishingGeneration-19.jpg";
		img9.src = "../photostory-fishers/FishingGeneration-21.jpg";

		img10.src = "../photostory-elders/Sartin_VillageElders_01.jpg";
		img11.src = "../photostory-elders/Sartin_VillageElders_02.jpg";
		img12.src = "../photostory-elders/Sartin_VillageElders_05.jpg";
		img13.src = "../photostory-elders/Sartin_VillageElders_06.jpg";
		img14.src = "../photostory-elders/Sartin_VillageElders_08.jpg";
		img15.src = "../photostory-elders/Sartin_VillageElders_09.jpg";
		img16.src = "../photostory-elders/Sartin_VillageElders_12.jpg";
		img17.src = "../photostory-elders/Sartin_VillageElders_15.jpg";
		img18.src = "../photostory-elders/Sartin_VillageElders_18.jpg";
		img19.src = "../photostory-elders/Sartin_VillageElders_20.jpg";

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
	console.log('preloaded story 2');
}
addLoadEvent(preloader);
