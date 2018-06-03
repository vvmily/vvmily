$(window).on('load',function(){

	getWindWidthHeight();
	$(window).resize(function(){
		getWindWidthHeight();
	});
	$(document).scroll(function(){
		getScrollheight()
	});
	// nav鼠标经过
	$(".personal-btns li").hover(function(){
		$(this).children("p").animate({
			'top':-40
		},300);
		$(this).siblings("li").children("p").animate({
			'top':0
		},0);
	},function(){
		$(this).children("p").animate({
			'top':0
		},100);
	});
	// 专业技能
	$(".item-info-tabs tr td.info span").hover(function(){
		$(this).siblings(".modal").show(500).parents("tr").siblings().find(".modal").hide();
	},function(){
		$(".item-info-tabs tr td.info .modal").hide();
	});
});
/**
 * 获取浏览器可视宽高
 */
function getWindWidthHeight(){
	var wid = $(window).width();
	var heig = $(window).height();
	$(".personal-list").width(wid).height(heig);
	$(".personal-opcity").width(wid).height(heig);
};
/**
 * 滚动大于100，nav固定在头部
 */
function getScrollheight(){
	var topH = $(document).scrollTop();
	console.log(topH)
	if(topH>=100){
		$(".personal-title").addClass('fixed');
	}else{
		$(".personal-title").removeClass('fixed');
	}
}