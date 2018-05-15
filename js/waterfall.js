$(window).on('load',function(){
	waterFall();
	var data = {
		"datas":[],//假设这是从后台请求的数据
		"imgAllNum":100
	};
	for(var i=0;i<data.imgAllNum;i++){
		var num  =Math.floor(Math.random()*10);
		data.datas.push({"src":num+'.png'})
	}
	var boxHtmlLen = $(".water-main").children().length;
	$(window).on('scroll',function(){
		var len = $(".water-main").children().length;
		if(scrollBool()){
			$.each(data.datas,function(key,val){
				var cBox = '<div class="water-box">'+
							'<div class="water-pic">'+
								'<img src="images/water00'+ $(val).attr('src')+'">'+
								'<p class="pic-prompt"><span>图片说明</span></p>'+
							'</div>'+
						'</div>';
				$(".water-main").append(cBox);
			});
			waterFall();
			itemPicHover();
		}
	});
	itemPicHover();
	function itemPicHover(){
		$(".water-main .water-box").hover(function(e){
			var srcPic = $(this).find('img').attr('src');
			var promptPic = '<img src="'+srcPic+'">';
			$(".water-prompt").show(100).css({
				'left':e.clientX+10 > ($(window).width()-500) ? e.clientX-510 :e.clientX+10,
				'top':e.clientY+10
			}).empty().append(promptPic);
			$(this).find(".pic-prompt").animate({
				'bottom':0
			},500)
		},function(){
			var index = $(this).parent().children().index($(this));
			var indexH = $(".water-box").eq(index).outerHeight(true);
			$(".water-box").eq(index).find(".pic-prompt").stop().animate({
				'bottom':-indexH
			},300);	
			$(".water-prompt").empty().hide();
		})
	}
	
});
/**
 * 
 */
function waterFall(){
	var main = $(".water-main");
	var box = $(".water-box");
	var boxItemW = box.outerWidth(true);
	var clientW = $(document).width();//屏宽
	var boxNum = Math.floor(clientW/boxItemW);//每行放多少列
	main.css({
		'width':boxNum * boxItemW,
		'margin':'0 auto'
	});
	var boxArr = [];//存放首行高度
	box.each(function(index,dom){
		var itemH = box.eq(index).outerHeight(true);
		box.eq(index).find(".pic-prompt").css({
			'bottom':-itemH
		})

		if(index < boxNum){
			boxArr[index] = itemH;
		}else{
			var minH = Math.min.apply(null,boxArr);//计算数组最小值
			var minHIndex = $.inArray(minH,boxArr);//数组中最小值下标
			$(dom).css({
				'position':'absolute',
				'top':minH,
				'left':minHIndex * boxItemW
			});
			//每行最小高度叠加
			boxArr[minHIndex] += itemH;
		}
	});
};
function scrollBool(){
	var boxLast = $(".water-main>div.water-box").last();
	var boxOffsetTopH = boxLast.offset().top + Math.floor(boxLast.outerHeight(true)/2);
	var scrollTop = $(window).scrollTop();
	var documentH = $(window).height();
	return (boxOffsetTopH < scrollTop + documentH) ? true : false;
}
