/*引入html代码片段*/
function loadHtml(url,target){
	$.ajax({
		url:url,
		dataType:"html",
		async:false,
		success: function (msg) {
			$(target).html(msg);
		}
	});
}
/*导航栏吸顶效果*/
$(window).scroll(function(){
	var scTop = $(window).scrollTop();
	if (scTop>=$(".header_bg").height()) {
		$("#nav").addClass("fixed");          //导航栏
		$("#go2top").css("display","block");  //返回顶部
		$("#loutiwrap").css("display","block"); //楼梯
	}else{
		$("#nav").removeClass("fixed");
		$("#go2top").css("display","none");
		$("#loutiwrap").css("display","none");
	}
});
/*返回顶部*/
$("#go2top").on("click",function(){
	$("html,body").animate({scrollTop:0},800);
});
/*侧边栏 滑出*/
document.onmousemove = function(e){
	x = e.clientX;
	if(x>1310){
		console.log(1);
		$(".relative-div .side-other").animate({"left":"0px"});
	}/*else if(x<1310){
		$(".relative-div .side-other").animate({"left":"38px"});
	}*/
	
}

/*楼梯*/
var isClick = false;
$(".louti li").on("click", function () {
    isClick = true;
    //siblings()除了自己以外的其他的兄弟节点
    $(this).find("span").addClass("active").parent().siblings().find("span").removeClass("active");
    var docTop = $(".module").eq($(this).index()).offset().top;
    $("body,html").stop().animate({"scrollTop":docTop-200+ 'px'},1000, function () {
        isClick = false;
    });
});
$(window).on("scroll",function(){
    var scrollTop = $(window).scrollTop();
    if(isClick == false){
        $(".module").each(function(){
            if(scrollTop >= $(this).offset().top-($(this).outerHeight())/2){
                $(".louti li").eq($(this).index()).find("span").addClass("active").parent().siblings().find("span").removeClass("active");
            }
        });
    }

});