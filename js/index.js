/*--------------------------------ͷ�� ���ؿͻ��� ����------------------------*/
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
/*------------------------------------���� ���� ����-------------------------------*/
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
/*----------------------------------�ײ� li ��ʱ����------------------------------*/
var _this = $(".link-slide").first();
var lineH=_this.find("li:first").height(); //��ȡ�и�
var upHeight=0-1*lineH; //�����߶�
function scrollGun(){
    _this.animate({
        marginTop:upHeight
    },500,function(){
        _this.find("li:first").appendTo(_this);  //Ŀ���ƥ��һ��Ԫ�����ƶ� Ŀ���ƥ����Ԫ��ԭԪ�ر��� ���Ƶ���ƥ��Ŀ��
        _this.css({marginTop:0});
    });
}
/*------------------------------------��ʱ��--------------------------------------*/
var timer = setInterval(function(){
    scrollGun();    //�ײ�����
    bannerMove();   //�ֲ�ͼ
},3000);

/*-------------------------------�����˵� ��ʽ����--------------------------------*/
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

/*-------------------------------�ֲ�ͼ---------------------------------*/
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
/*���� fashion*/
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




