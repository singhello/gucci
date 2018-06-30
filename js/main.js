require.config({
	paths : {
		"jquery" : "jquery-1.11.3",
		"cookie" : "jquery.cookie"
	}
})

//引入依赖文件
require(['jquery','cookie'],function($,cookie){
/*国际化地区选择*/
	$("#chian").click(function(){
		$(".inter-mark").css("display","block");
		 toggleBody(1);
	})
	$(".area-close").click(function(){
		$(".inter-mark").css("display","none");
		toggleBody(0);
	})
/*下拉菜单*/
//	$("#top-nav li").each(function(index){
//		$(this).mouseenter(function(){
//			$("#menu").slideDown({display:"block"},1000);
//			$("#top-nav li").mouseleave(function(){
//				$("#menu").css("display","none");
//			});
//			$("#menu").mouseenter(function(){
//				$("#menu").css("display","block");
//			})
//			$("#menu").mouseleave(function(){
//				$("#menu").css("display","none");
//			})
//			$(".menu-" + index).css("display","block").mouseleave(function(){
//				$(this).css("display","none");
//			});
//		})
//	})
	$("#top-nav li").each(function(index){
		var $that = $(this);
		$that.mouseenter(function(){
			$("#menu").stop();
			$("#menu").slideDown({display:"block"},1000);
			$(".menu-" + index).css("display","block");
		})
		$that.mouseleave(function(){
			$("#menu").css("display","none");
			$(".menu-" + index).css("display","none");
			$("#menu").mouseenter(function(){
				$("#menu").css({display:"block"});
			}).mouseleave(function(){
				$("#menu").css("display","none");
			})
		});
	})
/*product滚动*/
//	$(function(){
//		var speed = 10;
//		if($(document).scrollTop() > 1270){
//			var top0 = $(document).scrollTop() - $(".pro-right").offset().top;
//			$(".pro-right").css({top:top0})
//		}
//	})
	
	
	
	
	
	
	
	
	
	
	
/*微信二维码*/
	$("#wechat").mouseenter(function(){
		$(".two-code").css("display","block");
	}).mouseleave(function(){
		$(".two-code").css("display","none");
	})
/*回到顶部*/
	$(".bottom-tubiao").click(function(){
		$("html").animate({scrollTop:0},500);
	})
	
	
	
	
	
/*滚动条开关函数*/
	function toggleBody(isPin){
	    if(isPin){
	        document.body.style.height = '100vh';
	        document.body.style['overflow-y'] = 'hidden';
	    }else{
	        document.body.style.height = 'unset';
	        document.body.style['overflow-y'] = 'auto';
	    }
	}

	
	
	
	
/*账号验证正则表达式*/
	$("#account").blur(function(){
		var re1 = /\d{11}/;
		var re2 =  	/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
		if(/^\s*$/.test($("#account").val())){
			$(".exp").html("请输入手机号码/电子邮箱").css({color:"red",marginBottom:10});
		}else if(!re1.test($("#account").val())){
			$(".exp").html("请输入正确的手机号码/电子邮箱").css({color:"red",marginBottom:10});
		}else{
			$(".exp").html("");
		}
	})
	
	
	
	
	
/*注册页*/
	/*显示注册弹窗*/
	$(function(){
		$(".create-account").click(function(){
			$("#register-mark").css({display:"block"});
			toggleBody(1);
		})
		$("#register-mark button").click(function(){
			$("#register-mark").css({display:"none"});
			toggleBody(0);
		})
	})
	/*手机号码验证正则表达式*/
	$(function(){
		var phonenum = /^[1]\d{10}$/;
		$("#txt1").blur(function(){
			if(/^\s*$/.test($(this).val())){
				$(".p-txt1").html("请输入手机号码").css("color","red");
			}else if(!phonenum.test($(this).val())){
				$(".p-txt1").html("请输入正确的手机号码").css("color","red");
			}else{
				$(".p-txt1").html("");
			}
		})
		/*随机数验证码验证*/
		$("#txt2").blur(function(){
			if($(this).val() != $(".random-num").html()){
				$(".p-txt2").html("与图片验证码不符").css("color","red");
			}else{
				$(".p-txt2").html("");
			}
		})
		/*手机验证码*/
		$("#txt3").blur(function(){
			if(/^\S*$/.test($(this).val())){
				$(".p-txt3").html("请输入手机验证码").css("color","red");
			}else{
				$(".p-txt3").html("");
			}
		})
		/*设置密码*/
		$("#txt4").blur(function(){
			if(/^\s*$/.test($(this).val())){
				$(".p-txt4").html("密码不能为空").css("color","red");
			}else if(/^\W{0,6}$/.test($(this).val())){
				$(".p-txt4").html("至少六个字符含数字大小写字母").css("color","red");
			}
		})
		/*确认密码验证*/
		$("#txt5").blur(function(){
			if(/^\s*$/.test($(this).val())){
				$(".p-txt5").html("确认密码不能为空").css("color","red");
			}else if($(this).val() !== $("#txt4").val()){
				$(".p-txt5").html("确认密码和密码需要保持一致").css("color","red");
			}
		})
		/*接受协议*/
		$(".create").click(function(){
			if(!$("#check2").is(':checked')){
				$(".jieshou").html("请接受隐私政策和销售条款").css("color","red"); 
			}else{
				$(".jieshou").html("");
			}
		})
		
	})
	
	/*选中显示电子邮箱*/
	$(function(){
//		alert($("#check1").is(':checked'))
		$("#check1").click(function(){
			if($("#check1").is(':checked')){
				$(".re-box").css("display","block"); 
			}else{
				$(".re-box").css("display","none");
			}
		})
		
	})
	
	
	/*随机验证码*/
	$(function(){
		$(".random-num").html(`${random(1000,9999)}`).css("backgroundColor",`#${randomColor()}`);
		$(".random-num").click(function(){
			$(this).html(`${random(1000,9999)}`).css("backgroundColor",`#${randomColor()}`);
		})
		$(".change-random").click(function(){
			$(".random-num").html(`${random(1000,9999)}`).css("backgroundColor",`#${randomColor()}`);
		})
	})
	/*随机数*/
	function random(min,max){
		return Math.floor(Math.random() * (max - min + 1) + min);
	}
	/*随机颜色*/
	function randomColor(){
		return Math.floor(Math.random() * 0xffffff).toString(16)
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	

})