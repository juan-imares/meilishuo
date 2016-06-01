/*放大镜处的选项卡*/
;$(".item-pic .js-pic-thumb span img").on("mouseover",function(){
    var thumSrc = $(this).attr("src");
    //thumSrc.split(".jpg")[0]+"_big.jpg"
    var bigSrc = thumSrc.substring(0,thumSrc.length-4)+"_big.jpg";
    $(".item-pic-origin img").attr("src",bigSrc);
    $(this).parent().addClass("active").siblings().removeClass("active");
    $("#bigArea img").attr("src",bigSrc);
});

/*购买数量计算*/
$(".js-stock-plus").click(function(){
    $(".js-stock-num").val(parseInt($(".js-stock-num").val())+1);
});
$(".js-stock-minus").click(function(){
    if(parseInt($(".js-stock-num").val())<=1){
        $(".js-stock-num").val(1);
    }else{
        $(".js-stock-num").val(parseInt($(".js-stock-num").val())-1);
    }
});
/*加入购物车 抛物线效果 插件*/
$(function() {
	var offset = $(".red-cart").offset();  //结束的地方的元素
	$(".add_cart").click(function(event){   //是$(".addcar")这个元素点击促发的 开始动画的位置就是这个元素的位置为起点
		/*var addcar = $(this);
		var img = addcar.parent().find('img').attr('src');*/
		var flyer = $('<img class="u-flyer" src="../img/details/detail5.jpg">');
		flyer.fly({
			start: {
				left: event.pageX,
				top: event.pageY-400
			},
			end: {
				left: offset.left,
				top: offset.top,
				width: 0,
				height: 0
			},
			/*加入完成后*/
			onEnd: function(){
				$("#msg").show().animate({width: '250px'}, 200).fadeOut(1000);
				//console.log(parseInt($(".cart-num").html()));
				var buyNum = parseInt($(".js-stock-num").val());
				//console.log(buyNum);
				$(".cart-num").html(parseInt($(".cart-num").html())+buyNum);
				//最终购物车里的商品数量
				var numInCart = parseInt($(".cart-num").html()); 
				/*------------cookie处理购物车----------------*/
				var goodsId = $("#cat").attr("id");
				var goodsTit = $("#cat").text().substr(4);
				//console.log(goodsId+goodsTit);
				var goodsPrice = $(".item-price-info").children(".price-now").text().substr(1);
				//console.log(goodsPrice);
				var picSrc = "../img/details/detail6-90.jpg";
				
		        var carts = $.cookie("carts") ? $.cookie("carts") : "{}";
		        var goods = JSON.parse(carts);  //字符串json转成json
		        if (goodsId in goods){
           			goods[goodsId].num =goods[goodsId].num + numInCart;
       			}else{
           			goods[goodsId] = {
           				pic:picSrc,
		               name:goodsTit,
		               price:goodsPrice,
		               num:numInCart
           			}
       			}
       			//加入购物车的商品信息写入cookie
		        goods = JSON.stringify(goods);  //json转成字符串
		        $.cookie("carts",goods,{expires:7,path:"/"});
			}
		});
	});
  
});
