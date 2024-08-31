$(function(){
    /*LESSON09*/
    $(".item_navi").children("li").click(function(){
        $(this).children("ul").stop().slideToggle(100);
    })



    /*LESSON23*/
    var dis = 250;
    $(".sibori").click(function(){

        $("body").children().animate({"margin-left": "+=" + dis + "px"}, 200);

        dis *= -1;
    });


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

	/*LESSON17*/
	$(".filter").click(function(){

        var target = $(this).attr("value");

        $(".item li").each(function(){
            $(this).animate({"opacity" : 0}, 300, function(){
                $(this).hide();

                if($(this).hasClass(target) || target == "all"){
                    $(this).show();
                    $(this).animate({"opacity" : 1}, 300);
                }

            });
        });
    });

});