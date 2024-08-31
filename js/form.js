
$(function(){

     /*LESSON28*/
	var count = $(".slide28 li").length;

	var current = 1;

	var next = 2;

	var interval = 3000;

	var duration = 500;

	var timer;

	$(".slide28 li:not(:first-child)").hide();

	timer = setInterval(slideTimer, interval);

	function slideTimer(){
	 	$(".slide28 li:nth-child(" + current + ")").fadeOut(duration);

	 	$(".slide28 li:nth-child(" + next + ")").fadeIn(duration);

	 	current = next;
	 	next = ++next;

	 	if(next > count){
	 		next = 1;
	 	}

	}
});