$(".trigger_link").hover(function(){
    $(".trigger_link").css({"display":"block"});
    $(".laypr .pricesort").css({"display":"block"});
},function(){
    $(".trigger_link").css({"display":"block"});
    $(".laypr .pricesort").css({"display":"none"});
})
/*动态创建商品块*/
for(var i=0;i<50;i++){
    $(".goods_wall").append("<div class='poster_grid retsop poster_wall'></div>");
    $(".goods_wall .poster_grid").eq(i).append("<dl class='new_poster'><dt class='np_pic hover_pic'></dt><dd></dd></dl>");
    $(".new_poster dd").eq(i).append("<div class='desc_box clearfix'></div>");
    $(".new_poster dd .desc_box").eq(i).append("<div class='showy_info'></div>");
    $(".new_poster dd .desc_box").eq(i).append("<div class='sale_num'</div>");
    $(".new_poster dd").eq(i).append("<div class='title'><p></p></div>");

}

/*导入商品*/
function getGoodsList(urlList){
	$.ajax({
	    type:"get",
	    url:urlList,  //"../data/goodList/list1.json"
	    contentType : "application/json",
	    dataType:"json",
	    "success": function(msg){
	        var j = 0;
	        for(var i in msg){
	            if(j==50){j=0;}
	            $(".poster_grid .np_pic").eq(j).empty();
	            $(".poster_grid .np_pic").eq(j).prepend("<a href="+msg[i].url+" target='_blank'>"+"<img src="+msg[i].src+"/>"+"</a>");
	            $(".poster_grid .desc_box .showy_info").eq(j).empty();
	            $(".poster_grid .desc_box .showy_info").eq(j).append("<span class='price'>"+msg[i].price+"</span>");
	            $(".poster_grid .desc_box .sale_num").eq(j).empty();
	            $(".poster_grid .desc_box .sale_num").eq(j).append(msg[i].saleNum);
	            $(".poster_grid .title").eq(j).empty();
	            $(".poster_grid .title").eq(j).append("<a href="+msg[i].url+">"+msg[i].desc+"</a>");
	            j++;
	        }
	    }
	});
}
getGoodsList("../data/goodList/list1.json");


/*导航栏点击事件*/
$("#com-nav .navList").children().not("#com-nav .navList .hifan").children().not(".down").on("click",function(){
	$(this).addClass("active").siblings().removeClass("active");
	
})
