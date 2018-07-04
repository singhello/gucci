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
		
		$.getJSON("./json/nation.json",function(data){
			let str1 = "";
			$.each(data[0].list.list1, function(i) {
				str1 += `<a href="javascript:;">${data[0].list.list1[i]}</a>`;
			});
			$(".area-ll").html(str1);
			let str2 = "";
			$.each(data[0].list.list2, function(i) {
				str2 += `<a href="javascript:;">${data[0].list.list2[i]}</a>`;
			});
			$(".area-lc").html(str2);
			let str3 = "";
			$.each(data[0].list.list3, function(i) {
				str3 += `<a href="javascript:;">${data[0].list.list3[i]}</a>`;
			});
			$(".area-lcc").html(str3);
			let str4 = "";
			$.each(data[0].list.list4, function(i) {
				str4 += `<a href="javascript:;">${data[0].list.list4[i]}</a>`;
			});
			$(".area-lr").html(str4);
		})
		
		
	})
	$(".area-close").click(function(){
		$(".inter-mark").css("display","none");
		toggleBody(0);
	})


/*登录划过效果*/
	$(function(){
		$(".sign-0").mouseenter(function(){
			$(".sign-in").css("display","block");
		}).mouseleave(function(){
			$(".sign-in").css("display","none");
		})
		$(".sign-in").mouseenter(function(){
			$(".sign-in").css("display","block");
		}).mouseleave(function(){
			$(".sign-in").css("display","none");
		})
	})
/*心愿单划过效果*/
	$(function(){
		$(".save").hover(function(){
			$(".drem-list").css("display","block");
		},function(){
			$(".drem-list").css("display","none");
		})
		$(".drem-list").hover(function(){
			$(this).css("display","block");
		},function(){
			$(this).css("display","none");
		})
	})
/*购物袋划过效果*/
	$(function(){
		$(".shop-car").hover(function(){
			$(".shop-dai").css("display","block");
		},function(){
			$(".shop-dai").css("display","none");
		})
		$(".shop-dai").hover(function(){
			$(this).css("display","block");
		},function(){
			$(this).css("display","none");
		})
	})
/*搜索框*/
	$(function(){
		$(".search").click(function(){
			$("#search-hidden").animate({width:"250px"},500).focus();
			$("#fangdajing").css({backgroundColor: "#E5DFD9",color: "#1b1b1b"});
		})
		$("#search-hidden").blur(function(){
			$("#search-hidden").animate({width:0},500);
			$("#fangdajing").css({backgroundColor: "#000",color: "#fff"});
		})
	})
/*下拉菜单*/
	$("#top-nav li").each(function(index){
		var $that = $(this);
		$(this).mouseenter(function(){
			$("#menu--" + index).css("display","none");
			$("#menu--" + index).stop().slideDown(300);
		}).mouseleave(function(){
			$("#menu--" + index).css("display","none");
		})
		$("#menu--" + index).mouseenter(function(){
			$(this).css("display","block");
		}).mouseleave(function(){
			$(this).css("display","none");
		})
	})	
	//icon 为父元素，为list子元素
//$('.icon').on('mouseover', function() {
//	$('.list').stop().slideDown();
//}).on('mouseout', function() {
//	$('.list').stop().slideUp();
//})
//	$(function(){
//		$(".slider a").each(function(){
//			$(this).attr("class","clear-fix");
//		})
//	})
	
/*product滚动*/
	$(function(){
		$(document).on("scroll",function(){
			let speed = 0;
			if($(document).scrollTop() > 1270){
				speed =($(document).scrollTop()-1270)*0.4;
				console.log(speed);
				$(".product-glasses-pic img").css({top:speed});
			}
			if($(document).scrollTop() >= 3500){
				$(".product-glasses-pic img").css({top:890});
			}
		})
		
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
		return Math.floor(Math.random() * 0xffffff).toString(16);
	}
	
/*购物车*/
	$(function(){
		$(".help-main").each(function(){
			var $that = $(this);
			$(this).click(function(){
//				$that.next().toggle();
//				console.log($($that.find("i")).html() == "+")
				if($($that.find("i")).html() == "-"){
					$($that.find("i")).html("+");
					$that.next().hide(300);
				}else{
					$($that.find("i")).html("-");
					$that.next().show(300);
				}
				
			})
		})
	})
	
	
	
	/*列表页*/
	$(function(){
		$(".pro-list-box li").each(function(){
			$(this).attr("class","clear-fix");
			var $that = $(this);
			var html = "<h4>LOOK 2</h4><p><a href='javascript:;'>浏览LOOK</a></p>";
			$(this).hover(function(){
//				console.log($that)
				$($that.find("img")).attr("src","images/list/15235560666074258_w_218X435.jpg");
				$($that).css({background:"#fff"}).append(html);
			},function(){
				$($that.find("img")).attr("src","images/list/1523556066607748_g_218X435.jpg");
				$($that).css({background:"#E7E7E7"});
				$($that.find("h4")).remove();
				$($that.find("p")).remove();
			})
		})
	})
	
	
	

/*详情页效果*/
	/*微信划过效果*/
	$(function(){
		$(".share>.icon-weixin").on("mouseenter",function(){
			$(".weixin-box").css("display","block");
		}).on("mouseleave",function(){
			$(".weixin-box").css("display","none");
		})
		$(".weixin-box").hover(function(){
			$(".weixin-box").css("display","block");
		},function(){
			$(".weixin-box").css("display","none");
		})
	})
	/*正面与背面的切换*/
	$(function(){
		$(".zheng a").click(function(){
			$(".fan a").css("color","#999");
			$(".xq-center img").attr("src","images/1523556066607748_g_305X610 (1).jpg");
			$(this).css("color","#000");
		})
		$(".fan a").click(function(){
			$(".zheng a").css("color","#999");
			$(".xq-center img").attr("src","images/15235560666074258_g_305X610.jpg");
			$(this).css("color","#000");
		})
	})
	/*产品的标题等滚动条的固定*/
	$(function(){
		$(document).scroll(function(){
			let speed = 0;
			if($(document).scrollTop() > 0 && $(document).scrollTop() <= 400){
				speed = $(document).scrollTop() + 50;
//				console.log(speed)
				$(".xq-right").css({top:speed});
			}else if($(document).scrollTop() > 400){
				$(".xq-right").css({top:450});
			}
		})
	})
	/*其他相关产品列表*/
	$(function(){
		$.getJSON("./json/listAbout.json",function(data){
			let str = "";
			$.each(data[0].url, function(i) {
				str += `<li>
							<img class = 'img_no1' src="${data[0].url[i][0]}">
							<a href="javascript:;"><img class = 'img_no2' src="${data[0].url[i][1]}"></a>
							<i class="iconfont icon-shoucang1"></i>
							<p>${data[0].url[i][2]}</p>
							<p>${data[0].url[i][3]}</p>
							<p><a href="javascript:;">${data[0].url[i][4]}</a></p>
						</li>`;
			});
			$(".pro-about-list-1").html(str);
			$(".pro-about-list-1 li").each(function(){
				let $that = $(this);
				$that.hover(function(){
					$that.find('.img_no1').css('display','none');
					$that.find('.img_no2').css('display','block');
					$that.find('p').css('display','block');
					$that.find('i').css('display','block');
					$that.css("height","320px")//.html();
				},function(){
					$that.find('.img_no2').css('display','none');
					$that.find('p').css('display','none');
					$that.find('i').css('display','none');
					$that.find('.img_no1').css('display','block');
					$that.css("height","235px");
				})
				let id = 0;
				$that.find("i").hover(function(){
					$(this).click(function(){
						$(this).css({color:"#ccc"});
						$.cookie("product",`{
							"id" : ${id},
							"name" : "pro_${id++}",
							"num" : 
						}`,{
							expires:7,
							path:"/"
						})
						console.log($.cookie("product"))
					});
				})
			})
		})
	})
	
	
	
	
	
	
	
	
	
	
	
	

})