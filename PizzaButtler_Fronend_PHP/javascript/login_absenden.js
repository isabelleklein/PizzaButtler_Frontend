var rest;
$(document).ready(function() {

	$('#absenden_login').click(function(e) {
			
		e.preventDefault(); /** cancel form submit **/
		var jsObj = $('#login').serializeObject();
		
		rest = new RestInterface();
		
		rest.setParameters("POST", "user/login", jsObj, callback);
		rest.fakeSend("http://localhost/mock/loginSuccess.json")

	});
});

var callback = function(returnCode){
	if(returnCode > 0) {
		var jsObj = $('#login').serializeObject();
		var expireTime = (jsObj.merken == 'on')? 7 : 0.2;
				
		$('#div_ajaxResponse').text( returnCode );
				
		Cookies.set("userID", returnCode, {expires: expireTime});
		location.reload()
		//window.location.href = "."
	}
	else if(returnCode === -1){
		console.log("Fehler: Falsche Eingaben / Nicht vorhanden");
	}
	else {
		console.log("Fehler im Prozess aufgetreten");
	}
}

$(function() {
	$('#openx').click(
	        function() {
	        	console.log("Öffnen angeklickt");
	            $('#overlay').show('slow', 
	                function() {
	                    $('#containerx').fadeIn('slow');
	                    $('#changeText').html('Dynamischer Inhalt');
	                }
	            );
	        }
	    );
	$('#closex').click(
	            function() {
	                $('#containerx').hide('slow', 
	                     function() {
	                          $('#overlay').fadeOut();          
	                     }    
	                );
	            }
	        );

});
