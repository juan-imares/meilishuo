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

