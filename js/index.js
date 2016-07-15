;$(function(){	
	//首页加载就判断cookie里是否有usermsg项 如果有就隐藏登陆注册相关按钮 且显示用户信息 如果没有就直接加载首页
	//设置全局
	if($.cookie("usermsg")){
		$("#username a").append($.cookie("usermsg"));
		$("#login_qq").css({"display":"none"});
		$("#login_weichat").css({"display":"none"});
		$("#login").css({"display":"none"});
		$("#register").css({"display":"none"});
		$("#username").show();
		$("#messg").show();
		$("#mylike").show();
		/*把用户名显示到username中*/
	}else{
		$("#username").css({"display":"none"});
		$("#messg").css({"display":"none"});
		$("#mylike").css({"display":"none"});
		$("#login_qq").show();
		$("#login_weichat").show();
		$("#login").show();
		$("#register").show();
	}
	/*取购物车里商品数量，写入购物车提示数量*/
	if($.cookie("carts")){
		var goods = JSON.parse($.cookie("carts"));
		$(".cart-num").html(goods.cat.num);
	}
	

	/*------------------------------退出登录-------------------------*/
    $("#username").hover(function(){
        $("#logout").css({"display":"block"});
    },function(){
        $("#logout").hide();
    });
	/*$("#username").mouseover(function(){
		$("#logout").css({"display":"block"});
	});
	$("#username").mouseout(function(){
		$("#logout").hide();
	});*/
	$("#logoutBtn").click(function(){
		$("#username").css({"display":"none"});
		$("#messg").css({"display":"none"});
		$("#mylike").css({"display":"none"});
		$("#login_qq").show();
		$("#login_weichat").show();
		$("#login").show();
		$("#register").show();
        /*清除cookie里的用户信息*/
		$.cookie("usermsg","lala",{expires:-1,path:"/"});
	});
	
	/*-------------------------喜欢 +1 on委托-------------------------*/
	$(".cont").on("click",".like",function(){
		if($.cookie("usermsg")){
			$(this).text(parseInt($(this).text())+1);
			$(".myLikeNum").text(parseInt($(".myLikeNum").text())+1);
		}else{
			if(confirm("还没有登陆哦~去登陆吧~")){
				location.href = "login.html";
			}
		}
	});

});

/*-----------------------------导航栏点击事件-------------------------*/
$("#com-nav .navList").children().not("#com-nav .navList .hifan").children().not(".down").on("click",function(){
	$(this).addClass("active").siblings().removeClass("active");
	
})
/*---------------------------------返回顶部---------------------------*/
;$("#go2top").on("click",function(){
    $("html,body").animate({scrollTop:0},800);
});

/*--------------------------------下载app 下拉------------------------*/
$("#com-topbar .drop").mouseover(function(){
    $("#com-topbar .down").css({
        "display":"block",
        "top":"31px",
        "left":"1085px"
    });
});
$("#com-topbar  .drop").mouseout(function(){
    $("#com-topbar .down").css({
        "display":"none"
    });
});
/*-------------------------------导航栏 更多 下拉---------------------*/
$("#def-nav .drop").mouseover(function(){
    $("#def-nav .down").css({
        "display":"block",
        "top":"45px",
        "left":"-32px"
    });
});
$("#def-nav .drop").mouseout(function(){
    $("#def-nav .down").css({
        "display":"none"
    });
});
/*-----------------------底部滚动----------------------*/
var _this = $(".link-slide").first();
var lineH=_this.find("li:first").outerHeight()+3; 
var upHeight=0-1*lineH; 
function scrollGun(){
    _this.stop().animate({
        marginTop:upHeight
    },500,function(){
        _this.find("li:first").appendTo(_this);  //找到第一个
        //_this.css({marginTop:0});
        _this.stop().animate({marginTop:0},500);
    });
}
setInterval(function(){
    scrollGun();    //滚动
},3000);

/*-------------------------------二级菜单--------------------------------*/
$(".sec_menu").find("li").on("mouseover",function(){
    var pre = $($(".sec_menu .list")[0]).prev();
    pre.css({"border":"none"});
    $(this).find("div").find("i").removeClass("corner1").addClass("corner2");
    //$(".sec_menu .list").find(".list_cont").append("<div class='.menuBorder'></div>");
    $(".sec_menu .list").removeClass("active"), $(this).addClass("active"), $(this).children(".thir_menu").show();
    $(this).css({"height":$(this).outerHeight-2 + "px"});
});
$(".sec_menu").find("li").on("mouseout",function(){
    $(this).find("div").find("i").removeClass("corner2").addClass("corner1");
    //$(".sec_menu .list").find(".list_cont").remove("<div class='.menuBorder'></div>");
    $(".sec_menu .list").removeClass("active"), $(this).removeClass("active"), $(this).children(".thir_menu").hide();
    $(this).css({"height":$(this).outerHeight+2 + "px"});
});

/*-------------------------------轮播图-------------------------------*/
/*引入轮播图片*/
$.ajax({
    type:"get",
    url:"../data/banner.json",
    "success": function(msg){
        var j = 0;
        for(var i in msg){
            if(j==4){j=0;}
            $(".banner .pic").eq(j).append("<a href="+msg[i].url+">"+"<img src="+msg[i].src+"/>"+"</a>");
            j++;
        }
    }
});
/*开始轮播*/
var timer = setInterval("bannerMove()",3000);
var n=0;
var count = $(".banner li").length; //count = 3
$(".bnr_btn a").click(function(e){
    e = e || window.event;
    e.preventDefault();
    var index = $(this).attr("ind"); //自定义属性
    n = index;
    $(this).addClass("on").siblings().removeClass("on");
});
function bannerMove(){
    n = n>=count-1 ? 0 : ++n;  //0 -> 1
    $(".banner li").filter(":visible").fadeOut(300).parent().children().eq(n).fadeIn(500);
    $(".bnr_btn a").eq(n).addClass("on").siblings().removeClass("on");
}
//轮播图 鼠标移入暂停 移出继续
$(".banner_wrap").hover(function(){
    clearInterval(timer);
    $(".bnr_btn_lr").css("display","block");
},function(){
    timer = setInterval("bannerMove()",3000);
    $(".bnr_btn_lr").css("display","none");
});
//轮播图 左侧按钮
$(".bnr_btn_l").click(function() {
    n =  n<=0 ? 2 : --n;
    $(".banner li").filter(":visible").fadeOut(300).parent().children().eq(n).fadeIn(500);
    $(".bnr_btn a").eq(n).addClass("on").siblings().removeClass("on");
});
//轮播图 右侧按钮
$(".bnr_btn_r").click(function(){
    n = n>=count-1 ? 0 : ++n;
    $(".banner li").filter(":visible").fadeOut(300).parent().children().eq(n).fadeIn(500);
    $(".bnr_btn a").eq(n).addClass("on").siblings().removeClass("on");
});
/*主体内容 fashion*/
$.ajax({
    type:"get",
    url:"../data/fashion.json",
    "success": function(msg){
    	for(var i in msg){
    		$(".fashion .cont").append("<a href="+msg[i].url+">"+"<img src="+msg[i].src+"/>"+"</a>");
        }
    }
})
/*fashion_new 加载商品信息*/
$.ajax({
    type:"get",
    url:"../data/fashion_new.json",
    contentType : "application/json",
    dataType:"json",
    "success": function(msg){
        var j = 0;
        for(var i in msg){
            if(j==10){j=0;}
            $(".fashion_new .cont .item .pic").eq(j).append("<a href="+msg[i].url+">"+"<img src="+msg[i].src+"/>"+"</a>");
            $(".fashion_new .cont .item .desc .price_like").eq(j).append("<span class='price'>"+msg[i].price+"</span>");
            $(".fashion_new .cont .item .desc .price_like").eq(j).append("<span class='like'>"+msg[i].likeNum+"</span>");
            $(".fashion_new .cont .item .desc .tit").eq(j).append("<a href="+msg[i].url+">"+msg[i].desc+"</a>");
            j++;
        }
    }
});
/*beauty  加载商品信息*/
$.ajax({
    type:"get",
    url:"../data/beauty.json",
    contentType : "application/json",
    dataType:"json",
    "success": function(msg){
        var j = 0;
        for(var i in msg){
            if(j==3){j=0;}
            $(".beauty .cont .item .pic").eq(j).append("<a href="+msg[i].url+">"+"<img src="+msg[i].src+"/>"+"</a>");
            $(".beauty .cont .item .desc .two_price").eq(j).append("<span class='price'>"+msg[i].price+"</span>");
            $(".beauty .cont .item .desc .two_price").eq(j).append("<span class='ori_price'>"+msg[i].oriprice+"</span>");
            $(".beauty .cont .item .desc .tit").eq(j).append("<a href="+msg[i].url+">"+msg[i].name+"</a>");
            $(".beauty .cont .item .desc .subtit").eq(j).append(msg[i].desc);
            $(".beauty .cont .item .tag").eq(j).append("<a href="+msg[i].url+">"+msg[i].word1+"</a>");
            $(".beauty .cont .item .tag").eq(j).append("<a href="+msg[i].url+">"+msg[i].word2+"</a>");
            $(".beauty .cont .item .tag").eq(j).append("<a href="+msg[i].url+">"+msg[i].word3+"</a>");
            j++;
        }
    }
});
/*hi范儿 加载商品信息*/
$.ajax({
    type:"get",
    url:"../data/hifan.json",
    contentType : "application/json",
    dataType:"json",
    "success": function(msg){
        var j = 0;
        for(var i in msg){
            if(j==12){j=0;}
            	$(".hifan .cont .item").eq(j).append("<a href="+msg[i].url+">"+"<img src="+msg[i].src+"/>"+"</a>");
            j++;
        }
    }
});
/*hi范儿 选项卡*/
$(".hifan .cont ul li").on("click",function(){
	$(this).addClass("active").siblings().removeClass("active");
	$(".hifan .tab-item").eq($(this).index()).addClass("active").siblings().removeClass("active");
});
/*好店推荐 加载商品信息*/
$.ajax({
    type:"get",
    url:"../data/recoShop.json",
    contentType : "application/json",
    dataType:"json",
    "success": function(msg){
        var j = 0;
        for(var i in msg){
            if(j==15){j=0;}
            $(".recommend_shop .cont .tab-inner .item").eq(j).prepend("<img src="+msg[i].src+"/>");
            $(".recommend_shop .cont .item .desc .tit").eq(j).append("<a href="+msg[i].url+">"+msg[i].tit+"</a>");
            $(".recommend_shop .cont .item .desc .subtit").eq(j).append(msg[i].subtit);
            $(".recommend_shop .cont .item .desc .saleScore .salenum").eq(j).append(msg[i].salenum);
            $(".recommend_shop .cont .item .desc .saleScore .last").eq(j).append(msg[i].score);
            $(".recommend_shop .cont .item .mask .go").eq(j).append("<a href="+msg[i].url+">"+msg[i].go+"</a>");
            j++;
        }
    }
});
/*好店推荐 选项卡*/
$(".recommend_shop .cont .tab div").on("click",function(){
	$(this).addClass("active").siblings().removeClass("active");
	$(".recommend_shop .tab-item").eq($(this).index()).addClass("active").siblings().removeClass("active");
});
/*好店推荐 鼠标移入事件mask显示*/
$(".recommend_shop .cont .item").hover(function(){
	$(".mask", this).show();
},function(){
	$(".mask", this).hide();
});
$(".unadd").hover(function(){
	$(this).html("取消关注");
},function(){
	$(this).html("已关注");
});

/*猜你喜欢  加载商品信息*/
$.ajax({
    type:"get",
    url:"../data/guessLike.json",
    contentType : "application/json",
    dataType:"json",
    "success": function(msg){
        var j = 0;
        for(var i in msg){
            if(j==10){j=0;}
            $(".guess_like .cont .item .pic").eq(j).append("<a href="+msg[i].url+">"+"<img src="+msg[i].src+"/>"+"</a>");
            $(".guess_like .cont .item .desc .price_like").eq(j).append("<span class='price'>"+msg[i].price+"</span>");
            $(".guess_like .cont .item .desc .price_like").eq(j).append("<span class='like'>"+msg[i].likeNum+"</span>");
            $(".guess_like .cont .item .desc .tit").eq(j).append("<a href="+msg[i].url+">"+msg[i].desc+"</a>");
            j++;
        }
    }
});
var urlIndex = 1;
$(".guess_like .tit .change").on("click",function(){
	if(urlIndex==3){urlIndex=1;}
	var url_like = "../data/guessLike"+urlIndex+".json";
	urlIndex++;
	$.ajax({
    type:"get",
    url:url_like,
    contentType : "application/json",
    dataType:"json",
    "success": function(msg){
        var j = 0;
        for(var i in msg){
            if(j==10){j=0;}
            $(".guess_like .cont .item .pic").eq(j).empty();
            $(".guess_like .cont .item .pic").eq(j).append("<a href="+msg[i].url+">"+"<img src="+msg[i].src+"/>"+"</a>");
            $(".guess_like .cont .item .desc .price_like").eq(j).empty();
            $(".guess_like .cont .item .desc .price_like").eq(j).append("<span class='price'>"+msg[i].price+"</span>");
            $(".guess_like .cont .item .desc .price_like").eq(j).append("<span class='like'>"+msg[i].likeNum+"</span>");
            $(".guess_like .cont .item .desc .tit").eq(j).empty();
            $(".guess_like .cont .item .desc .tit").eq(j).append("<a href="+msg[i].url+">"+msg[i].desc+"</a>");
            j++;
        }
    }
});

})


