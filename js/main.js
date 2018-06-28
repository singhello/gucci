require.config({
	paths : {
		"jquery" : "jquery-1.11.3",
		"cookie" : "jquery.cookie"
	}
})

//引入依赖文件
require(['jquery','cookie'],function($,cookie){
	$(function(){
		$("#chian").click(function(){
			alert("hehe");
		})
	})
})