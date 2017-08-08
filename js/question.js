$(window).resize(function(){
    $('html').css({'font-size':$(window).width()/3.2+"px"});
});

$(function(){
	$('html').css({'font-size':$(window).width()/3.2+"px"});
	$('.active .btn').click(function(){
		var num = $('.active .pho').val();
		if(num==''){
			$('.alert').text("请输入您的手机号！");
			$('.alert').fadeIn().delay(1500).fadeOut();
			return false;
		}
		else if(!(/^1[34578]\d{9}$/.test(num))){
	        $('.alert').text("请输入正确的的手机号！");
			$('.alert').fadeIn().delay(1500).fadeOut();
			return false;
	    }
	    else{
			window.location.href = 'first.html';
			return true;
	    }
	})

	$('.up-a').click(function(){
		$('.wrap .warn').text("(当前问答已完成)");
		$(this).val("下一题");
		$('#ok').fadeIn().delay(1500).fadeOut();
		setTimeout(function(){
			window.location="second.html";
		},1600);
		// $('.wait').text('下一轮问答尚未开始,请稍后重试');
		// $('.wait').fadeIn().delay(1500).fadeOut();
	})
	$('.up-b').click(function(){
		$('.wrap .warn').text("(当前问答已完成)");
		$(this).val("下一题");
		$('#ok').fadeIn().delay(1500).fadeOut();
		setTimeout(function(){
			window.location="third.html";
		},1600);
		// $('.wait').text('下一轮问答尚未开始,请稍后重试');
		// $('.wait').fadeIn().delay(1500).fadeOut();
	})
	$('.up-c').click(function(){
		$(this).attr('disabled','disabled');
		$(this).addClass('cur');
		$(this).val('问答结束');
		$('.wrap .warn').text("(所有问答已完成)");
	})

});