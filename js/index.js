/*--------------------------------头部 下载客户端 下拉------------------------*/
$("#com-topbar .drop").mouseover(function(){
    $("#com-topbar .down").css({
        "display":"block",
        "top":"31px",
        "left":"1000px"
    });
});
$("#com-topbar  .drop").mouseout(function(){
    $("#com-topbar .down").css({
        "display":"none"
    });
});
/*------------------------------------导航 更多 下拉-------------------------------*/
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
/*----------------------------------底部 li 定时滚动------------------------------*/
var _this = $(".link-slide").first();
var lineH=_this.find("li:first").height(); //获取行高
var upHeight=0-1*lineH; //滚动高度
function scrollGun(){
    _this.animate({
        marginTop:upHeight
    },500,function(){
        _this.find("li:first").appendTo(_this);  //目标点匹配一个元素是移动 目标点匹配多个元素原元素保留 复制到各匹配目标
        _this.css({marginTop:0});
    });
}
/*------------------------------------定时器--------------------------------------*/
var timer = setInterval(function(){
    scrollGun();    //底部滚动
    bannerMove();   //轮播图
},3000);

/*-------------------------------二级菜单 样式待改--------------------------------*/
$(".sec_menu").find("li").on("mouseover",function(){
    var pre = $($(".sec_menu .list")[0]).prev();
    pre.css({"border":"none"});
    $(this).find("div").find("i").removeClass("corner1").addClass("corner2");
    //$(".sec_menu .list").find(".list_cont").append("<div class='.menuBorder'></div>");
    $(".sec_menu .list").removeClass("active"), $(this).addClass("active"), $(this).children(".thir_menu").show();
});
$(".sec_menu").find("li").on("mouseout",function(){
    $(this).find("div").find("i").removeClass("corner2").addClass("corner1");
    //$(".sec_menu .list").find(".list_cont").remove("<div class='.menuBorder'></div>");
    $(".sec_menu .list").removeClass("active"), $(this).removeClass("active"), $(this).children(".thir_menu").hide();
});

/*-------------------------------轮播图---------------------------------*/
var n=0;
var count = $(".banner li").length; //count = 3
$(".bnr_btn a").click(function(e){
    e = e || window.event;
    e.preventDefault();
    var index = $(this).attr("ind");
    n = index;
    $(this).addClass("on").siblings().removeClass("on");
   // $(".banner li:not(:first-child)").hide();
});
function bannerMove(){
    n = n>=count-1 ? 0 : ++n;  //0 -> 1
    $(".banner li").filter(":visible").fadeOut(300).parent().children().eq(n).fadeIn(500);
    $(".bnr_btn a").eq(n).addClass("on").siblings().removeClass("on");
}
$(".banner_wrap").hover(function(){
    clearInterval(timer);
    $(".bnr_btn_lr").css("display","block");
},function(){
    timer = setInterval("bannerMove()",3000);
    $(".bnr_btn_lr").css("display","none");
});

$(".bnr_btn_l").click(function() {
    $(".banner li").eq(n).fadeOut(300);
    $(".banner li").eq(n-1).fadeIn(500);
    $(".bnr_btn a").eq(n-1).addClass("on").siblings().removeClass("on");
    n = n-1;
});
$(".bnr_btn_r").click(function(){
    $(".banner li").eq(n).fadeOut(300);
    $(".banner li").eq(n+1).fadeIn(500);
    $(".bnr_btn a").eq(n+1).addClass("on").siblings().removeClass("on");
    n = n+1;
});
/*主体 fashion*/
$.ajax({
    type:"get",
    url:"../data/fashion.json",
    "success": function(msg){
    	for(var i in msg){
    		console.log(msg[i]);
    		$(".fashion .cont a").append("<img src="+msg[i].src+"/>");
        }
        
    }
})




