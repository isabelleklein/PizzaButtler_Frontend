var rest;
$(document).ready(function() {

	$('#absenden_login').click(function(e) {
			
		e.preventDefault(); /** cancel form submit **/
		var jsObj = $('#login').serializeObject();
		
		rest = new RestInterface();
		
		rest.setParameters("POST", "user/login", jsObj, callback);
		rest.fakeSend("./mock/loginSuccess.json")

	});
});

var callback = function(returnCode){
	console.log("" + returnCode.userID);
	if(returnCode != -1 && returnCode != -2) {
		//var jsObj = $('#login').serializeObject();
		console.log(returnCode.userID + "");
		var expireTime = (returnCode.merken == 'on')? 7 : 0.2;
				
		$('#div_ajaxResponse').text( returnCode );
		if(returnCode.userID != "null")	
		{
			console.log("Privatkunde");
			Cookies.set("userID", returnCode.userID, {expires: expireTime});
		}
		else if(returnCode.restaurantID != "null")
		{
			console.log("Restaurant");
			Cookies.set("restaurantID", returnCode.restaurantID, {expires: expireTime});
		}
		
		location.reload()
		//window.location.href = "."
	}
	else if(returnCode == -1){
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
    $('#delivery_userlogin').click(
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
