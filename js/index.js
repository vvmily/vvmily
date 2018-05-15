$(document).ready(function(){
	/**
	 * 获取客户端信息
	 *
	 * @return     {string}  The client information.
	 */
	function getClientInfo(){  
		var userAgentInfo = navigator.userAgent;  
		var Agents = new Array("Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod");  
		var agentinfo = null;  
		for (var i = 0; i < Agents.length; i++) {  
			if (userAgentInfo.indexOf(Agents[i]) > 0) { agentinfo = userAgentInfo; break; }  
		}  
		if(agentinfo){
			return agentinfo;
		}else{
			return "PC"; 
		}     
	};
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
	initData();
	function initData(){
		homeBanWork();
	}
	if(getClientInfo()=="PC"){
		$(document).scroll(function(){
			var topH = $(document).scrollTop();
			if(topH>200){
				$(".home-journal-link").animate({
					'left':0
				},800);
				$(".home-journal-detail").animate({
					'right':0
				},1000)
			};
			if(topH>800){
				$(".home-message-list a.left").animate({
					'left':0
				},800);
				$(".home-message-list a.right").animate({
					'right':0
				},800)
			}
		});
	}else{
		$(".home-journal-link").animate({
			'left':0
		},800);
		$(".home-journal-detail").animate({
			'right':0
		},1000)
		

		$(".home-message-list a.left").animate({
			'left':0
		},800);
		$(".home-message-list a.right").animate({
			'right':0
		},800)
	}

	/**
	 *轮播作品集
	 */
	
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
	var textRollTime = 8000;//完成一次的时间（间隔执行）
	homeTextRoll();
	/**
	 * 文字左右滚动
	 */
	function homeTextRoll(){
		var dRoll = $(".home-roll-cons");
		var dLeft =  dRoll.position().left < 400-dRoll.outerWidth(true)-10 ? 400-dRoll.outerWidth(true) :0;
		dRoll.animate({
			'left':dLeft
		},textRollTime);
	};
	var textRollClear = setInterval(homeTextRoll,textRollTime+2);
	$(".home-head-roll").hover(function(){
		// 不加stop()也有挺好的吧！
		$(".home-roll-code").addClass('cur').animate({
			'left':170
		},300);
	},function(){
		$(".home-roll-code").animate({
			'left':150
		},300).removeClass('cur');	
	});
	
});