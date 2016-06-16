$(function() {
   
    //alert($("#in_banner").parent("div").height())
    //$("#in_banner,#in_banner li").css({height:$("#in_banner").parent("div").height()})
	//首页切换
   // $('.banner').unslider();
	//旅行脚步瀑布流
//	$('#lxjb_cont li').wookmark({
//        container: $('#lxjb_cont'),
//		autoResize:'true',
//	});
     //手机版本导航
    $(".nav_ico").click(function(){
       if(!$(".nav").show()){
        $(".nav").show()
        }else{
         $(".nav").hide()   
        }
    });
    
});

//$(window).resize(xiangying)
//
//function xiangying(){
//    var llqWidth = $(window).width();
//    if(llqWidth>1024){
//       $(".ztlx_cont").width(865).find("li").css({marginRight:58});
//    }else if(llqWidth<=1024){
//        $(".ztlx_cont").width(765).find("li").css({marginRight:10});
//    }
//}
    



