/*头部 下载客户端 下拉*/
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

/*导航 更多下拉*/
$("#def-nav .drop").mouseover(function(){
    $("#def-nav .down").css({
        "display":"block",
        "top":"193px",
        "left":"570px"
    });
});
$("#def-nav .drop").mouseout(function(){
    $("#def-nav .down").css({
        "display":"none"
    });
});
/*底部 li 定时滚动*/
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
setInterval(function(){
    scrollGun();
},2000);
