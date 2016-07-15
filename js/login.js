$(function(){
	
	/*用户名失去焦点时 验证是否存在这个用户!*/
	$("#mlsUser").on("blur",function(){
		var loguserName = $("#mlsUser").val();
		if($.cookie("usermsg")){
			if($("#mlsUser").val()!=$.cookie("usermsg")){
				alert("没有这个用户哦~ 去注册吧~");
			}
			
		}else{
			
			if(confirm("还没有注册哦~去注册吧~")){
				location.href = "regist.html";
			}
			
		}
	});
	
	/*表单验证*/
	$("#loginForm").validate({
		rules: {
            mlsUser: {
                required: true, //必填项
                rangelength:[6,16]
            },
            password: {
                required: true,
                rangelength:[6,16]
            }
        },
        messages: {
            mlsUser: {
                required: "必须填写用户名",
                rangelength: "昵称要在6-16位之间"
            },
            password: {
                required: "必须填写密码",
                rangelength: "密码要在6到16位之间"
            }
        }
	})
	/*$.validator.addMethod("mobile", function(value, element, params){
            var mobile = /^[1][3578]\d{9}$/;
            return this.optional(element) || (mobile.test(value));
        }, $.validator.format("{0}格式有误，请重新输入！"));*/
	
	/*得到焦点时改变文本框颜色*/
	$(".login_txt").focus(function(){
		$(this).addClass("focus").siblings().removeClass("focus");
	});
	$(".login_txt").on("blur",function(){
		$(this).removeClass("focus");
	});
	
	
	
	$("#login_btn").click(function(e){
		e = e||window.event;
		e.preventDefault();
//		console.log($("#loginForm label"));
//		console.log($("#tips").length);
//		console.log($("#mlsUser").val());
//!($("#loginForm label").length) && 
		if($("#mlsUser").val() && $("#tips").length==1){  //没有错误消息且都不为空  点击跳转到首页
			var nicknm = $("#mlsUser").val(); 
			$.cookie("usermsg",nicknm,{expires:7,path:"/"});
			location.href = "index.html";
			
			//首页加载就判断cookie里是否有username项 如果有就隐藏登陆注册相关按钮 且显示用户信息 如果没有就直接加载首页
		}
		
	})
	
	putCodeToDiv();
	$("#codetxt").blur(verify);
	$(".change_code").click(putCodeToDiv);
	
	/*验证码*/
	/*生成A-Z 0-9 a-z 组成的验证码库*/
		function setLibs(){
			var arr = [];
			for(var i=65;i<=90;i++){
				var co=String.fromCharCode(i);
				arr.push(co);
			}
			for(var i=48;i<=57;i++){
				var co=String.fromCharCode(i);
				arr.push(co);
			}
			for(var i=97;i<=122;i++){
				var co=String.fromCharCode(i);
				arr.push(co);
			}
			return arr;
		}
		/*生成验证码  参数为验证码的位数*/
		function getCodes(num) 
		{
			var codes = "";
			var arr = setLibs();
			for(var i=1; i<=num; i++)
			{
				var index = parseInt(Math.floor(Math.random()*arr.length));
				codes = codes + arr[index];
			}
			return codes;
		}
		/*生成的验证码放到指定div中*/
		var ma; 
		function putCodeToDiv()
		{
			ma = getCodes(6);
			$("#codediv").html(ma);
		}
		/*验证用户输入的验证码正确性*/
		function verify()
		{
			var code = $("#codetxt").val();
			if(code.toLowerCase() != ma.toLowerCase()){
				$("#tips").html("验证码错误");
				$("#codetxt").val("");
				$("#codetxt").focus();
				putCodeToDiv();
			}else{
				$("#tips").html("√");
			}
		}
		
})
