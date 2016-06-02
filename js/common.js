/*引入html代码片段*/
;function loadHtml(url,target){
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
		$("body").css({"marginTop":"50px"}); //吸顶时设置body的上边距
		$("#go2top").css("display","block");  //显示返回顶部
		$("#loutiwrap").css("display","block"); //楼梯
	}else{
		$("#nav").removeClass("fixed");
		$("body").css({"marginTop":"0px"});
		$("#go2top").css("display","none");
		$("#loutiwrap").css("display","none");
	}
});
/*返回顶部*/
$("#go2top").on("click",function(){
	$("html,body").animate({scrollTop:0},800);
});
/*侧边栏 滑出*/
$("#global-sidebar").hover(function () {
	$(".relative-div .side-other").stop().animate({"left":"0px"});
},function(){
	$(".relative-div .side-other").stop().animate({"left":"34px"});
})

/*楼梯*/
var isClick = false;
$(".louti li").on("click", function () {
    isClick = true;
    //siblings()除了自己以外的其他的兄弟节点
    $(this).find("span").addClass("active").parent().siblings().find("span").removeClass("active");
    var docTop = $(".module").eq($(this).index()).offset().top;
    $("body,html").stop().animate({"scrollTop":docTop-70+ 'px'},1000, function () {
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
/*进入购物车时 若没有登录就进入登录界面*/
$("#toMyCarts").click(function(){
	if(!($.cookie("usermsg"))){
//		location.href = "login.html";
		alert("您还没有登录哦");
	}
});

/*退出登录*/
/*$("#username a").mouseover(function(){
	console.log(666);
	$("#logout").css({"display":"block"});
});
$("#username").mouseout(function(){
	$("#logout").hide();
});
$("#logoutBtn").click(function(){
	$("#username").css({"display":"none"});
	$("#messg").css({"display":"none"});
	$("#mylike").css({"display":"none"});
	$("#login_qq").show();
	$("#login_weichat").show();
	$("#login").show();
	$("#register").show();
	$.cookie("usermsg","lala",{expires:-1,path:"/"});
});*/
/*关闭购物车*/
$("#close").click(function(){
	alert(1);
	$("#checkCart").css({"display":"none"});
});
$("#side-cart").mouseover(function(){
	$("#checkCart").css({"display":"block"});
});
$("#side-cart").mouseout(function(){
	$("#checkCart").css({"display":"none"});
})
