$(window).on('load',function(){

	getWindWidthHeight();
	$(window).resize(function(){
		getWindWidthHeight();
	});
	$(document).scroll(function(){
		getScrollheight()
	});
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

function getScrollheight(){
	var topH = $(document).scrollTop();
	console.log(topH)
	if(topH>=100){
		$(".personal-title").addClass('fixed');
	}else{
		$(".personal-title").removeClass('fixed');
	}
}