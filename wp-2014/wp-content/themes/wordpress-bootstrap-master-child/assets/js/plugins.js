$(document).ready(function(){
	setTimeout(function() {$('.bodyoverlay').fadeOut('slow');},300);
	
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
	  var navToggle = "closed";
	  $(".navToggle").click(function() {
		if(navToggle == "opened") {
		  navToggle = "closed";
		  $(".navToggle").removeClass('navH');
		  $("#mainHeader #smallNav").animate({height: "0"}, 500);
		} else {
		  navToggle = "opened";
		  $(".navToggle").addClass('navH');
		  $("#mainHeader #smallNav").animate({height: "15em"}, 500);
		}
	  });
	}	
	// START custom radio inputs
	function setupLabel() {
		if ($('.label_radio input').length) {
			$('.label_radio').each(function(){
				$(this).removeClass('r_on');
			});
			$('.label_radio input:checked').each(function(){
				$(this).parent('label').addClass('r_on');
			});
		};
	};
	$('body').addClass('has-js');
	$('.label_radio').click(function(){
		setupLabel();
	});
	setupLabel();
	// END custom radio inputs
});

window.addEventListener("load",function() {
  setTimeout(function(){ window.scrollTo(0, 1); }, 0);
});
