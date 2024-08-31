$(function(){


	/*lesson20*/
    $("aside a[href^='#']").click(function(){

        var target = $($(this).attr("href")).offset().top;

        target -= 70;

        $("html, body").animate({scrollTop: target}, 500);

        return false;
    });

	/*lesson08*/
	$('#sec2contents article[id != "tab1"]').hide();

    $("#sec2 a").click(function(){

        $("#sec2contents article").hide(); //すべて非表示

        $($(this).attr("href")).show(); //選択されたコンテンツを再表示
        
        //現在のcurrentクラスを削除
        $(".current2").removeClass("current2");

        //選択されたタブ（自分自身）にcurrentクラスを追加
        $(this).addClass("current2");

        return false;
    })

	/*LESSON12*/

	$(".spot div").hide();

    $(".spot li").hover(function(){
		//li要素をマウスオーバー
		$(this).children("img").stop().fadeOut(0); //フェードアウト
		$(this).children("div").children("iframe").stop().animate({"top" : 0}, 10);
        $(this).children("div").stop().fadeIn(400); //フェードイン

        

    }, function(){

        $(this).children("div").stop().fadeOut(0); //フェードアウト
		$(this).children("img").stop().fadeIn(400); //フェードイン

        $(this).children("div").children("iframe").stop().animate({"top" : "10px"},  10);
    });


	
	

    /*スライダー*/
		$('.slider').slick({
			arrows: false,//左右の矢印はなし
			autoplay: true,//自動的に動き出すか。初期値はfalse。
			autoplaySpeed: 0,//自動的に動き出す待ち時間。初期値は3000ですが今回の見せ方では0
			speed: 6900,//スライドのスピード。初期値は300。
			infinite: true,//スライドをループさせるかどうか。初期値はtrue。
			pauseOnHover: false,//オンマウスでスライドを一時停止させるかどうか。初期値はtrue。
			pauseOnFocus: false,//フォーカスした際にスライドを一時停止させるかどうか。初期値はtrue。
			cssEase: 'linear',//動き方。初期値はeaseですが、スムースな動きで見せたいのでlinear
			slidesToShow: 6,//スライドを画面に4枚見せる
			slidesToScroll: 1,//1回のスライドで動かす要素数
			responsive: [
				{
				breakpoint: 769,//モニターの横幅が769px以下の見せ方
				settings: {
					slidesToShow: 2,//スライドを画面に2枚見せる
				}
			},
			{
				breakpoint: 426,//モニターの横幅が426px以下の見せ方
				settings: {
					slidesToShow: 1.5,//スライドを画面に1.5枚見せる
				}
			}
		]
		});

		$('.slider-r').slick({
			arrows: false,//左右の矢印はなし
			autoplay: true,//自動的に動き出すか。初期値はfalse。
			autoplaySpeed: 0,//自動的に動き出す待ち時間。初期値は3000ですが今回の見せ方では0
			speed: 6900,//スライドのスピード。初期値は300。
			infinite: true,//スライドをループさせるかどうか。初期値はtrue。
			pauseOnHover: false,//オンマウスでスライドを一時停止させるかどうか。初期値はtrue。
			pauseOnFocus: false,//フォーカスした際にスライドを一時停止させるかどうか。初期値はtrue。
			cssEase: 'linear',//動き方。初期値はeaseですが、スムースな動きで見せたいのでlinear
			slidesToShow: 6,//スライドを画面に4枚見せる
			slidesToScroll: 1,//1回のスライドで動かす要素数
			rtl: true,
			responsive: [
				{
				breakpoint: 769,//モニターの横幅が769px以下の見せ方
				settings: {
					slidesToShow: 2,//スライドを画面に2枚見せる
				}
			},
			{
				breakpoint: 426,//モニターの横幅が426px以下の見せ方
				settings: {
					slidesToShow: 1.5,//スライドを画面に1.5枚見せる
				}
			}
		]
		});


	


  /*lesson19*/
	$('dd[id != "acc1"]').css("width", "0px");

	$("dt a").click(function(){

		if(!$(this).hasClass("currentBtn")){
			$(".current3").animate({"width" : "0px"}, 300);

			$($(this).attr("href")).animate({"width" : "1100px"}, 300);

			$("dd").removeClass();

			$($(this).attr("href")).addClass("current3");

			$("dt a").removeClass();

			$(this).addClass("currentBtn");

		}
		return false;
	});

});

$(function(){

	var $circleBox    = $('.circle'),
	$point = $circleBox.find('.point');
	startPosition = 0,
	duration      = 8000, // 1週の時間
	radiusX       = ($circleBox.width() / 2) - ($point.width() / 2),
	radiusY       = ($circleBox.height() / 2) - ($point.height() / 2),
	angle         = 0,
	radian        = 0,
	xPosition     = 0,
	yPosition     = 0;

	var start = function() {
		$point.animate(
			{
				count : 2
			},
			{
				duration : duration,
				easing   : 'linear',
				step     : function(now) {
					angle     = now * 180;
					radian    = ((angle + startPosition + 90) / 180) * Math.PI; // +90することで0度の基点を3時の角度に設定
					xPosition = radiusX + (radiusX * Math.sin(radian));
					yPosition = radiusY + (radiusY * Math.cos(radian)) * -1; // -1を乗算して時計回りにする
	
					$point.css({
						left : xPosition,
						top  : yPosition
					});
				},
				complete : function() {
					start();
					this.count = 0;
				}
			}
		);
	};
	
	start();

});

