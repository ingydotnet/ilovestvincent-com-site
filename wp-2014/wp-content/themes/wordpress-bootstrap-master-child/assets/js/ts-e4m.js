$(document).ready(function(){
	  $(".button").click(function() {		
		var email = $("input#email").val();
			if (email == "") {
		  $("input#email").focus();
		  return false;
		}			
		var dataString = 'email=' + email;
		//alert (dataString);return false;
			
	  $.ajax({
		type: "POST",
		url: "send.php",
		data: dataString,
		  success: function() {
			$('#signUpPK').hide();
			$('#content').css('height', 142);
			$('#ts-e4m').html("<div id='message'></div>");
			$('#message').html('<h2>Thanks, please check your inbox</h2>')
			/*.append("<p>You will soon receive a confirmation email to confirm your Fan Fest Invite Request.</p>")*/
			.hide()
			.fadeIn(1500, function() {
			  $('#message');
			});
		  }
		});
	return false;
	});	
});