$(function(){
		$('#dynamic').find('#dynamic_up a').click(function(){
			$('#dynamic').find('#dynamic_up a').attr('class','');
			$('#dynamic').find('.course_list').css('display','none');
			$(this).attr('class','dynamic_up_one');
			$('#dynamic').find('.course_list').eq( $(this).index() ).css('display','block');	
		});
		
	});