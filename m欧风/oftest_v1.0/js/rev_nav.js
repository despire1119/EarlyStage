	<!--旋转菜单-->
	(function(){

		var ul=$("#navs"),li=$("#navs li"),i=li.length,n=i-1,r=150
		0;
		ul.click(function(){
			$(this).toggleClass('active');
			if($(this).hasClass('active')){
				
				$('.g_cover').show();
				
				for(var a=0;a<i;a++){
					
					li.eq(a).css({
						
						'transition-delay':""+(50*a)+"ms",
						'-webkit-transition-delay':""+(50*a)+"ms",
						'-o-transition-delay':""+(50*a)+"ms",
						'-moz-transform':""+(50*a)+"ms",
						
						'transform':"translate("+(-r*Math.cos(90/n*a*(Math.PI/180)))+"px,"+(-r*Math.sin(90/n*a*(Math.PI/180)))+"px)",
						'-webkit-transform':"translate("+(-r*Math.cos(90/n*a*(Math.PI/180)))+"px,"+(-r*Math.sin(90/n*a*(Math.PI/180)))+"px)",
						'-moz-transform':"translate("+(-r*Math.cos(90/n*a*(Math.PI/180)))+"px,"+(-r*Math.sin(90/n*a*(Math.PI/180)))+"px)",
						'-o-transform':"translate("+(-r*Math.cos(90/n*a*(Math.PI/180)))+"px,"+(-r*Math.sin(90/n*a*(Math.PI/180)))+"px)",
						'-ms-transform':"translate("+(-r*Math.cos(90/n*a*(Math.PI/180)))+"px,"+(-r*Math.sin(90/n*a*(Math.PI/180)))+"px)"
					});	
					li.eq(i-1).css('-webkit-transform','translate(0px,-150px)');
					
				}

			}else{
				li.removeAttr('style');
				$('.g_cover').hide();
			};
			
		});
		

	})($);
