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

/*���� ��������*/
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
setInterval(function(){
    scrollGun();
},2000);
