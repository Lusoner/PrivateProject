// JavaScript Document
$(function(){

//首页banner
	var iNow=0;
	var myTimer=null;
	var Len=$('.banner_list li').length;
	
	for(var i=0; i<Len; i++){
		
		$('.tab_list').append('<li></li>');
		
	};
	
	var iW=Len*$('.tab_list li').outerWidth(true)
	
	$('.tab_list').css('left',($(window).width()-iW)/2);
	
	$('.tab_list li').eq(0).addClass('cur');
	
	$('.tab_list li').click(function(){
		
		if(!$('.banner_list li').is(':animated')){
			
			if($(this).index()!==iNow){
				
				$('.banner_list li').eq(iNow).fadeOut(600);
				iNow=$(this).index();
				$('.banner_list li').eq(iNow).fadeIn(600);
				$('.tab_list li').eq(iNow).addClass('cur').siblings().removeClass('cur')
				
				
			};
			
		};
		
	});
	
	function Tab(){
		if(!$('.banner_list li').is(':animated')){
			$('.banner_list li').eq(iNow).fadeOut(600)
			if(iNow<Len-1){
				iNow++	
			}else{
				iNow=0	
			};
			$('.banner_list li').eq(iNow).fadeIn(600);
			$('.tab_list li').eq(iNow).addClass('cur').siblings().removeClass('cur')
		};
		
	};
	
	myTimer=setInterval(Tab,3000)
	$('.banner').mouseenter(function(){
	
		clearInterval(myTimer);
		
	});
	
	$('.banner').mouseleave(function(){
	
		clearInterval(myTimer);
		myTimer=setInterval(Tab,3000)
		
	});
	
	
	//--enter
	
	$('.p_wrap').hover(function(){
	
		$(this).children('.p2').stop().animate({'right':0},function(){
		
			$(this).stop().animate({'right':-25},function(){
				
				$(this).stop().animate({'right':0})
					
			});
			
		})
		
	},function(){
		
		$(this).children('.p2').stop().animate({'right':-125})
			
	});
	
	//whjv_l_c_l点击事件
	$('.whjv_l_c_l li').click(function(){
		$(this).addClass('cur').siblings().removeClass('cur');
		var me=$(this).index();
		$('.whjv_l_c_con .whjv_l_c_con_wrap').eq(me).show().siblings().hide()
			
	});
	
	//区域文化
	$('.qywh_l').mouseleave(function(){
		
		$(this).children('a').children('p').stop().animate({'left':'0'},400,function(){
			
			$(this).stop().animate({'left':-6+'%'},200,function(){
				
					$(this).stop().animate({'left':0+'%'},300)
			})
				
		})
			
	});
	
	$('.qywh_l').mouseenter(function(){
		
		$(this).children('a').children('p').stop().animate({'left':-100+'%'},750)
			
	});
	
	$('.qywh_r').mouseleave(function(){
		
		$(this).children('a').children('p').stop().animate({'right':'0'},400,function(){
			
			$(this).stop().animate({'right':-6+'%'},200,function(){
				
					$(this).stop().animate({'right':0+'%'},300)
			})
				
		})
			
	});
	
	$('.qywh_r').mouseenter(function(){
		
		$(this).children('a').children('p').stop().animate({'right':-100+'%'},750)
			
	});
	$('.li_l_a').hover(function(){
	
		$(this).children('.p02').stop().animate({'right':'0'},function(){
			
			$(this).stop().animate({'right':-8+'%'},function(){
				
					$(this).stop().animate({'right':'0'})
			})	
		});
		
		
	},function(){
		
		$(this).children('.p02').stop().animate({'right':-100+'%'})
		
	});
	//-----
	var v1=$('.ip01').val();
	var v2=$('.ip02').val();
	var v3=$('.ip03').val();
	var v4=$('.ip04').val();
	var v5=$('.ip05').val();
	var v6=$('.ip06').val();
	var v7=$('.ip07').val();
	var v8=$('.ip08').val();
	var v9=$('.ip09').val();
	var v10=$('.ip10').val();
	
	
	$('.ip01').blur(function(){
		if($(this).val()==''){
		
			$(this).val(v1);
			$(this).css('color','#8d8d8d');			
		}
	});
	$('.ip01').focus(function(){
		if($(this).val()==''){
				
			$(this).val(v1)
		}else{
			$(this).val('')
			$(this).css('color','#000')
		};
		
	});
	//-----
	
	$('.ip02').blur(function(){
		if($(this).val()==''){
		$(this).attr('type','text')
			$(this).val(v2);
			$(this).css('color','#8d8d8d');			
		}
	});
	$('.ip02').focus(function(){
		
		$(this).attr('type','password')
		if($(this).val()==''){
			$(this).val(v2)
		}else{
			$(this).val('')
			$(this).css('color','#000')
		};
		
	});
	//-----------------
	$('.ip03').blur(function(){
		if($(this).val()==''){
		
			$(this).val(v3);
			$(this).css('color','#8d8d8d');			
		}
	});
	$('.ip03').focus(function(){
		if($(this).val()==''){
				
			$(this).val(v3)
		}else{
			$(this).val('')
			$(this).css('color','#000')
		};
		
	});
	
	//---
	$('.user_list li').click(function(){
		
		$(this).addClass('cur').siblings().removeClass('cur');
		
		$('.ip_list_wrap ul').eq($(this).index()).show().siblings().hide()
	});
	//--
	$('.ip04').blur(function(){
		if($(this).val()==''){
		
			$(this).val(v4);
			$(this).css('color','#8d8d8d');			
		}
	});
	$('.ip04').focus(function(){
		if($(this).val()==''){
				
			$(this).val(v4)
		}else{
			$(this).val('')
			$(this).css('color','#000')
		};
		
	});
	//--
	$('.ip08').blur(function(){
		if($(this).val()==''){
		
			$(this).val(v8);
			$(this).css('color','#8d8d8d');			
		}
	});
	$('.ip08').focus(function(){
		if($(this).val()==''){
				
			$(this).val(v8)
		}else{
			$(this).val('')
			$(this).css('color','#000')
		};
		
	});
	//--
	$('.ip09').blur(function(){
		if($(this).val()==''){
		
			$(this).val(v9);
			$(this).css('color','#8d8d8d');			
		}
	});
	$('.ip09').focus(function(){
		if($(this).val()==''){
				
			$(this).val(v9)
		}else{
			$(this).val('')
			$(this).css('color','#000')
		};
		
	});
	//--
	$('.ip10').blur(function(){
		if($(this).val()==''){
		
			$(this).val(v10);
			$(this).css('color','#8d8d8d');			
		}
	});
	$('.ip10').focus(function(){
		if($(this).val()==''){
				
			$(this).val(v10)
		}else{
			$(this).val('')
			$(this).css('color','#000')
		};
		
	});
	//--
	$('.ip05').blur(function(){
		if($(this).val()==''){
		$(this).attr('type','text')
			$(this).val(v5);
			$(this).css('color','#8d8d8d');			
		}
	});
	$('.ip05').focus(function(){
		
		$(this).attr('type','password')
		if($(this).val()==''){
			$(this).val(v5)
		}else{
			$(this).val('')
			$(this).css('color','#000')
		};
		
	});
	//---
	$('.ip06').blur(function(){
		if($(this).val()==''){
		$(this).attr('type','text')
			$(this).val(v6);
			$(this).css('color','#8d8d8d');			
		}
	});
	$('.ip06').focus(function(){
		
		$(this).attr('type','password')
		if($(this).val()==''){
			$(this).val(v6)
		}else{
			$(this).val('')
			$(this).css('color','#000')
		};
		
	});
	
	//
	
	$('.page_list_ul').width($('.yaoxianshi .page_list_ul li').length*$('.page_list_ul li').eq(0).outerWidth(true))
	
	//--
	$('.whzxdt_l_t_list li').click(function(){
		 
		 $(this).addClass('cur').siblings().removeClass('cur');
		 
		 $('.whzxdt_l_con_wrap .whzxdt_l_con').eq($(this).index()).addClass('yaoxianshi').siblings().removeClass('yaoxianshi');
		 
		 $('.page_list_ul').width($('.yaoxianshi .page_list_ul li').length*$('.page_list_ul li').eq(0).outerWidth(true))
		
		
	});
})