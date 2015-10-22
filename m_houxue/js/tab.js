	(function (doc, win) {
          var docEl = doc.documentElement,
            resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
            recalc = function () {
              var clientWidth = docEl.clientWidth;
			  if(clientWidth > 1080)
			  {
			  	clientWidth=1080;
				docEl.style.fontSize = 67.5 + 'px';
			  }
              if (!clientWidth) return;
              docEl.style.fontSize = 20 * (clientWidth / 320) + 'px';
            };

          if (!doc.addEventListener) return;
          win.addEventListener(resizeEvt, recalc, false);
          doc.addEventListener('DOMContentLoaded', recalc, false);
        })(document, window);
		
//tab
	$(function(){
		$('#tab').find('.tab_left a').click(function(){
			$('#tab').find('.tab_left a').attr('class','');
			$('#tab').find('.tab_right').css('display','none');
			$(this).attr('class','one');
			$('#tab').find('.tab_right').eq( $(this).index() ).css('display','block');	
		});
		
	});
//三级列表
	$(function(){
		$('.classify_big').find('.classify_left li').click(function(){
		  $('.classify_big').find('.classify_left li').attr('class','left clearfix');
		  $('.classify_big').find('.classify_right').css('display','none');
		  $(this).attr('class','left clearfix left_one');
		  $('.classify_big').find('.classify_right').eq( $(this).index() ).css('display','block');  
		});
	});
	$(function(){
		$('.classify_right').find('ul li').click(function(){
			$('.right_down,.right_down_first').hide();
			$(this).children('.right_down,.right_down_first').show();	
		});
		
	});	
//列表栏分别滑动
	var wh = $(window).height();
	var ch = $('.h_head').height()+$('.service_tab').height()+$('.hhh').height()+$('.navsh').height()+2;
	var h = wh-ch;
	$('#tab').height(h);
	$('.tab_right').height(h);
	$(".none").toggle(
		function(){
			$('.rotat svg').css('-webkit-transform','');
			$(this).find('.rotat svg').css('-webkit-transform','rotate(180deg)');
			$('.header_left_1').hide();
			$('.header_left_2').fadeIn(150);
			$(document.body).css({
				"overflow-x":"hidden",
				"overflow-y":"hidden"
			});
			$('.sort_bg').fadeOut(150);
			$('#tab').fadeIn(150);
			},
		function(){
			$('.rotat svg').css('-webkit-transform','');
			$('#tab,.sort_bg').fadeOut(150);
			$('.header_left_2').hide();
			$('.header_left_1').fadeIn(150);
			$(document.body).css({
				"overflow-x":"auto",
				"overflow-y":"auto"
			});
		});
	$('.sort_btn').toggle(	
		function(){
			$('.rotat svg').css('-webkit-transform','');
			$(this).find('.rotat svg').css('-webkit-transform','rotate(180deg)');
			$('.header_left_1').hide();
			$('.header_left_2').fadeIn(150);
			$(document.body).css({
				"overflow-x":"hidden",
				"overflow-y":"hidden"
			});	
			$('.sort_bg').fadeOut(150);
			$('.sort_bg').fadeIn(150);
		},
		function(){
			$('.rotat svg').css('-webkit-transform','');
			$('#tab,.sort_bg').fadeOut(150);
			$('.header_left_2').hide();
			$('.header_left_1').fadeIn(150);
			$(document.body).css({
				"overflow-x":"auto",
				"overflow-y":"auto"
			});
		}
	);
	$('.header_left_2').click(function (){
		
		$('.none').unbind('click').toggle(
		function(){
			$('.rotat svg').css('-webkit-transform','');
			$(this).find('.rotat svg').css('-webkit-transform','rotate(180deg)');
			$('.header_left_1').hide();
			$('.header_left_2').fadeIn(150);
			$(document.body).css({
   				"overflow-x":"hidden",
   				"overflow-y":"hidden"
 			});
			$('.sort_bg').fadeOut(150);
			$('#tab').fadeIn(150);
			var b = h;
			$('#tab').height(b);
			$('.tab_right').css('max-height',b);
		},
		function(){
			$('.rotat svg').css('-webkit-transform','');
			$('#tab,.sort_bg').fadeOut(150);
			$('.header_left_2').hide();
			$('.header_left_1').fadeIn(150);
			$(document.body).css({
				"overflow-x":"auto",
				"overflow-y":"auto"
			});
		});
			$('.rotat svg').css('-webkit-transform','');
			$('#tab,.sort_bg').fadeOut(150);
			$('.header_left_2').hide();
			$('.header_left_1').fadeIn(150);
			$(document.body).css({
				"overflow-x":"auto",
				"overflow-y":"auto"
			}
		);
		$('.sort_btn').unbind('click').toggle(
			function(){
				$('.rotat svg').css('-webkit-transform','');
				$(this).find('.rotat svg').css('-webkit-transform','rotate(180deg)');
				$('.header_left_1').hide();
				$('.header_left_2').fadeIn(150);
				$(document.body).css({
					"overflow-x":"hidden",
					"overflow-y":"hidden"
				});
				$('#tab').fadeOut(150);
				$('.sort_bg').fadeIn(150);
				var b = h;
				$('#tab').height(b);
				$('.tab_right').css('max-height',b);},
			function(){
				$('.rotat svg').css('-webkit-transform','');
				$('#tab,.sort_bg').fadeOut(150);
				$('.header_left_2').hide();
				$('.header_left_1').fadeIn(150);
				$(document.body).css({
					"overflow-x":"auto",
					"overflow-y":"auto"
				});
			}
		);
			$('.rotat svg').css('-webkit-transform','');
			$('#tab,.sort_bg').fadeOut(150);
			$('.header_left_2').hide();
			$('.header_left_1').fadeIn(150);
			$(document.body).css({
				"overflow-x":"auto",
				"overflow-y":"auto"
			});
		});
		
	var ch2 = $('#hh1').height()+$('.navsh').height()+2;
	var h2 = wh-ch2;
	$('.classify_right').css('height',h2);
	$('.classify_left').css('height',h2);
	
	
	