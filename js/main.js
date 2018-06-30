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
			$("#menu").css({display:"block"});
			$(".menu-" + index).css("display","block");
			$("#menu").mouseenter(function(){
				
			})
		})
		$that.mouseleave(function(){
			$("#menu").css("display","none");
			$(".menu-" + index).css("display","none");
		});
	})
/*product滚动*/
	$(function(){
		var speed = 10;
		if($(document).scrollTop() > 1270){
			var top0 = $(document).scrollTop() - $(".pro-right").offset().top;
			$(".pro-right").css({top:top0})
		}
	})
	
	
	
	
	
	
	
	
	
	
	
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
//		alert($("#account").val())
//		if($("#account").val().test(/\s+/g)){
////			$(".exp").html("请输入手机号码/电子邮箱").css("color","red");
//			alert($("#account").val());
//		}
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
	
	$(function(){
		$(".create-account").click(function(){
			$("#register-mark").css({display:"block"});
		})
		$("#register-mark button").click(function(){
			$("#register-mark").css({display:"none"});
		})
	})

})