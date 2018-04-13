$(function(){
	$("#search").focus(function(){  //.search 换成对应的input类名或者id名
        $(this).attr("value",""); // attr设置某元素的属性
    }).blur(function(){
        $(this).attr("value","请输入搜索关键字");
    });
});