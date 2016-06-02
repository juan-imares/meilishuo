;$(function(){
	var cart = $.cookie("carts") ? $.cookie("carts") : "{}";
	var goods = JSON.parse(cart);
	/*如果cookie里面的carts字段不为空 则在购物车页面创建一个tbody用于放置购物车商品信息
	 若cookie里面的carts字段为空 则在购物车页面显示购物车为空的提示信息*/
	if(cart != "{}"){
		$("#float_ctrl").show();
		$(".emptyTip").hide();
		/*插入商品结构*/
		$(".cart table thead").after('<tbody>'+
				'<tr id="cat" class="goods last first">'+
					'<td class="tl first">'+
						'<input class="select_goods mls-input-checkbox" id="select16" type="checkbox">'+
						'<label for="select16" class="mls-input-label mls-input-checkbox-label-new"></label>'+ 
					'</td>'+
					'<td id="cat" class="g-content">'+
						'<div class="img-title-detail">'+
							'<div class="panel-img inlineblock">'+
								<!--插入商品图片-->
								'<a href="goodDetail.html"><img src='+goods.cat.pic+'></a>'+
							'</div>'+
							'<div class="title-detail-panel inlineblock">'+
								'<div><!--放商品名--><a href="goodDetail.html">'+goods.cat.name+'</a></div>'+
								'<div class="order_detail_wrapper">'+
									'<span class="order_info_item order_info_item_0 first" title="颜色：银色">颜色：银色</span>'+
								'</div>'+
							'</div>'+
						'</div>'+
					'</td>'+
					'<td class="price-discount-activity">'+
						'<span class="price_origial"><s>91.80</s></span>'+
						'<span class="price">'+goods.cat.price+'</span>'+
					'</td>'+
					'<td>'+
						'<div class="amount-counter">'+ 
							'<span class="minus">-</span>'+ 
							'<input class="amount" data-ori="2" data-max="318" value="2" type="text">'+ 
							'<span class="add">+</span>'+
						'</div>'+
					'</td>'+
					'<td><span class="goods_total">0.00</span></td>'+
					'<td class="last">'+
						'<a href="javascript:;" class="del">删除</a>'+
					'</td>'+
				'</tr>'+
        	'</tbody>');
        	
        	
			$("#cat .amount").val(goods.cat.num);
			/*减号*/
			$("span.minus").click(function(){
				
				if(parseInt($("#cat .amount").val())<=1){
					$("#cat .amount").val(1);
				}else{
					$("#cat .amount").val(parseInt($("#cat .amount").val())-1);
				}
				var totalPrice = parseFloat(parseInt($("#cat .amount").val())*goods.cat.price).toFixed(2);
				$("#cat .goods_total").text(totalPrice);
			});
			/*加号*/
			$("span.add").click(function(){
				
				$("#cat .amount").val(parseInt($("#cat .amount").val())+1);
				var totalPrice = parseFloat(parseInt($("#cat .amount").val())*goods.cat.price).toFixed(2);
				$("#cat .goods_total").text(totalPrice);
			});
			var totalPrice = parseFloat(parseInt($("#cat .amount").val())*goods.cat.price).toFixed(2);
			$("#cat .goods_total").text(totalPrice);
			
			/*全选按钮 反选*/
			$("#select_all1").click(function(){
				/*用attr不行 ， 尝试prop 是ok的，prop会返回true或者false*/
				$(":checkbox").not(this).prop("checked",$(this).prop("checked"));
				if($(".select_goods").prop("checked")){
					$("span.total_price").text($("#cat .goods_total").text());
					$(".check-goods-num").text($("input.amount").val());
				}else{
					$("span.total_price").text("0.00");
					$(".check-goods-num").text(0);
				}
			});
			$("#select_all2").click(function(){
				
				$(":checkbox").not(this).prop("checked",$(this).prop("checked"));
				if($(".select_goods").prop("checked")){
					$("span.total_price").text($("#cat .goods_total").text());
					$(".check-goods-num").text($("input.amount").val());
				}else{
					$("span.total_price").text("0.00");
					$(".check-goods-num").text(0);
				}
			});
			
			/*若.select_goods 为checked 计算总价 并把总价格填入span.total_price*/
			$(".select_goods").click(function(){
				if($(".select_goods").prop("checked")){
					$("span.total_price").text($("#cat .goods_total").text());
					$(".check-goods-num").text($("input.amount").val());
				}else{
					$("span.total_price").text("0.00");
					$(".check-goods-num").text(0);
				}
			});
			
			/*删除订单*/
			$("a.del").click(function(){
				if(confirm("您不要这件宝贝了吗？")){
					$(".cart table tbody").eq(0).remove();
					/*清除cookie里面的carts id为cat的数据*/
					$.cookie("carts","bye",{expires:-1,path:"/"});
					
					$(".emptyTip").css({"display":"block"});
					$("#float_ctrl").hide();
				}
			});
			
		}else{
			$("#float_ctrl").hide();
			$(".emptyTip").css({"display":"block"});
		}
	
	
})


