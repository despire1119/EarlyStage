$(function(){
		$('#tab').find('.tab_up a').click(function(){
			$('#tab').find('.tab_up a').attr('class','');
			$('#tab').find('.tab_down').css('display','none');
			$(this).attr('class','one');
			$('#tab').find('.tab_down').eq( $(this).index() ).css('display','block');	
		});
		
	});
//首页巨幕
$(function(){	
	indexSlides.ini();
});
var indexSlides={};
indexSlides.timer=false;
indexSlides.total=$('#slide-index .control a').length;
indexSlides.current=-1;
indexSlides.offScreenLeft=2000;
indexSlides.leaveScreenLeft=4000;
indexSlides.animating=false;
indexSlides.obj=$('#slide-index .slide');
indexSlides.style=[];
indexSlides.style[0]={
	text:{left:'30px',top:'81px'},
	button:{left:'30px',top:'244px'},
	direction:'tb'
};
	
indexSlides.style[1]={
	text:{left:'30px',top:'81px'},
	button:{left:'30px',top:'244px'},
	direction:'tb'
};
	
indexSlides.style[2]={
	text:{left:'30px',top:'81px'},
	button:{left:'30px',top:'244px'},
	direction:'tb'
};
//教师轮播
$(function(){
	$('.bxslider2').bxSlider({
		infiniteLoop:true,
		slideWidth:'210px',
		responsive:false,
		moveSlides:2,
		controls:true,
		easing:'ease-in-out',
		auto:true,
		pause:2000,
		minSlides:5,
		maxSlides:5,
		autoHover:true
	})
});
$(function(){
	$('.bx-wrapper').mouseenter(function(e) {
		$('.bx-prev,.bx-next').fadeIn();
		}).mouseleave(function(e) {
			$('.bx-prev,.bx-next').fadeOut()
			});	
})
//回到顶部
function showScroll(){
	$(window).scroll( function() { 
		var scrollValue=$(window).scrollTop();
		scrollValue > 100 ? $('#scroll').fadeIn():$('#scroll').fadeOut();
	});	
	$('#scroll').click(function(){
		$("html,body").animate({scrollTop:0},500);	
	});	
}
showScroll();
//提交用户信息排错
function f_chkmsgform(frm){
	if (frm.x_Name.value == "")
	{
		alert("请输入您的姓名");
		frm.x_Name.focus();
		return false;
	}
	if(frm.x_Phone != null)
	{
		if (frm.x_Phone.value == "")
		{
			alert("填写正确的电话号码，我们才能联系到您哦！");
			frm.x_Phone.focus();
			return false;
		}
	}
	if (frm.x_Content.value == "")
	{
		alert("不想对我们说点儿什么吗~");
		frm.x_Content.focus();
		return false;
	}
	alert("报名成功");
}

	