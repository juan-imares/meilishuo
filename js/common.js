/*引入html代码片段*/
function loadHtml(url,target){
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
		$("#nav").addClass("fixed");
	}else{
		$("#nav").removeClass("fixed");
	}
})
