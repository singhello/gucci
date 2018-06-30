require.config({
	paths : {
		"jquery" : "jquery-1.11.3",
		"cookie" : "jquery.cookie"
	}
})

//引入依赖文件
require(['jquery','cookie'],function($,cookie){
	var num = 0;
	$(".menu-select").click(function(){
		if(num % 2 == 0){
			$(".list-menu-box").css("display","block");
			$(".select-box").css("width","268px");
			
		}else{
			$(".list-menu-box").css("display","none");
		}
		num++;
	})
	$(".list-menu-box a").each(function(){
		$(this).click(function(){
			$(".menu-select").html($(this).html());
			$(".list-menu-box").css("display","none");
		})
	})
})