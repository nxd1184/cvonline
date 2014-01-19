$(document).ready(function(){
	$('.customselect').customSelect();
	$('input[type="text"]').focus(	function(){	$(this).parent().css({
		"border-color" : "#3aab0e", 
		"background-image" : "url(images/reg_inp_hover.png)"
		});
	});
	$('input[type="text"]').blur( function(){ $(this).parent().css({
		"border-color": "#dfdfdf",
		"background-image" : "url(images/reg_inp.png)"
		});
	});
	$('.content_logo').mCustomScrollbar();
    $('#slider').slidesjs({
        width: 630,
		height: 54,
		play: {
          active: true,
          auto: true,
          interval: 4000,
          swap: true
        }
    });
	
});