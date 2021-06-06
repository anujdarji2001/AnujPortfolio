$(document).ready(function() {
"use strict";

/*============= Counters ===========*/
var barElements = $('.bar li');
for (var i = 0; i < barElements.length; i++) {
 $(barElements[i]).appear(function() {
	  var b = $(this).find("span").attr("data-width");
	  $(this).find("span").animate({
		width: b + "%" //The number to stop for the width of the bar.
	  }, 1700, "easeOutCirc");
	  $(this).find(".value").countTo({
		from: 0, //The number to start counting from. (default: 0)
		to: b, //The number to stop counting at. (default: 100)
		speed: 1700, // Control speed of animation
		refreshInterval: 40 //The number of milliseconds to wait between refreshing the counter. (default: 100)
		});
	});
}


/*============= Touch Mobile ===========*/
document.addEventListener("touchstart", function() {},false);
})();