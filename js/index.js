/*ͷ�� ���ؿͻ��� ����*/
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

/*���� ���� ����*/
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
/*�ײ� li ��ʱ����*/
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
/*��ʱ��*/
var baindex = 0;
setInterval(function(){
    scrollGun();
},2000);

/*�����˵� ��ʽ����*/
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
})

/*�ֲ�ͼ*/
