
$(function(){


    $("#songprize_bt").click(function(){
        $("body,html").animate({scrollTop: $("#songprize").offset().top - 80},500);
    });
    
    
    $('a.goprize').click(function(){
		$('html, body').animate({
			scrollTop: $('[name="' + $.attr(this, 'href').substr(1) + '"]').offset().top -80
		}, 500);
		return false;
	});
    
    
})



