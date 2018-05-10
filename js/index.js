$(document).ready(function(){
	/**
	 * 首页背景轮播
	 */
	jQuery(".home-back-banner p").SwitchFade({
		prev:'.fade-lbtn', 
		next :'.fade-rbtn',
		num  :'.home-fade-nums span',
		className :'cur',
		time  :'500',
		playTime :'10000'

	});
	/**
	 *轮播作品集
	 */
	homeBanWork();
	function homeBanWork(){
		var i = 0;
		var ct = setInterval(homeWork,2000);
		$(".home-works-conts").hover(function(){
			clearInterval(ct);
			i = $(this).parent().children().index($(this));
			homeWork()
		},function(){
			ct = setInterval(homeWork,2000);
		});
		
		function homeWork(){
			var len = $(".home-works-item").children().length;
			i = i < len ? i : 0;
			$(".home-works-item").children(".home-works-conts").eq(i).find(".home-works-detail").stop().show(500).parent().siblings().find(".home-works-detail").stop().hide(200);
			i++;
		};
	}
	
	
	
});