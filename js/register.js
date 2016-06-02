$(function(){
	/*表单验证*/
	$("#regForm").validate({
		rules: {
            mobile: {
                required: true, //必填项
                mobile : "手机号"
            },
            nickname:{
            	required:true,
                rangelength:[6,16]
            },
            password: {
                required: true,
                rangelength:[6,16]
            },
            "confirm-password":{
            	equalTo: "#password"
            }
          
        },
        messages: {
            mobile: {
                required: "必须填写用户名"
            },
            nickname:{
            	required: "必须填写昵称",
                rangelength:"昵称要在6到16位之间"
            },
            password: {
                required: "必须填写密码",
                rangelength: "密码要在6到16位之间"
            },
            "confirm-password":{
            	equalTo: "两次密码输入不一致，请重新输入。"
            }
        }
	})
	$.validator.addMethod("mobile", function(value, element, params){
            var mobile = /^[1][3578]\d{9}$/;
            return this.optional(element) || (mobile.test(value));
        }, $.validator.format("{0}格式有误，请重新输入！"));
	
	/*得到焦点时改变文本框颜色*/
	$(".reg_txt").focus(function(){
		$(this).addClass("focus").siblings().removeClass("focus");
	});
	$(".reg_txt").blur(function(){
		$(this).removeClass("focus");
	});
	/*密码框获取焦点 确认密码框出现*/
	$("#password").focus(function(){
		$("#confirm-password-wrap").css({"display":"block"});
	});
	$("#reg_btn").click(function(e){
		e = e||window.event;
		e.preventDefault();
		//!($("#regForm label").length) && 
		if($("#mobile").val()){  //没有错误消息且都不为空  点击跳转到首页
			var nicknm = $("#nickname").val();
			$.cookie("usermsg",nicknm,{expires:7,path:"/"});
			location.href = "login.html";
			//首页加载就判断cookie里是否有usermsg项 如果有就隐藏登陆注册相关按钮 且显示用户信息 如果没有就直接加载首页
		}
		
	});
	
	/*用户名失去焦点时 验证是否存在这个用户*/
	$("#nickname").on("blur",function(){
		var loguserName = $("#nickname").val();
		if($.cookie("usermsg")){
			if(loguserName==$.cookie("usermsg")){
				alert("昵称已存在~换一个吧~");
			}
			
		}
	});
	
})
