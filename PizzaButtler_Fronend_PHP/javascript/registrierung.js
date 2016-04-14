/**
 * @author Dominik Terlau
 * @Version 2.1
 */ 
var rest;

/** Übermittlung der eingegebenen Daten an das Backend **/

$(document).ready(function() {
	var $registrieren = $('#registrieren');
	/** Aktionsinformationen für den Absenden-Button **/
	
	$('#absenden').click(function(e) {
		e.preventDefault();
		if(checkForm()) {
			var jsObj = $registrieren.serializeObject();
			
			rest = new RestInterface();
			rest.setParameters("POST", "user/reguser", jsObj, registrierenSendenSuccess);
			rest.send("./mock/postUser.json");
		}
	});
	
	$('#open').click(function() {
		$('#overlay').show('slow',function() {
			$('#container').fadeIn('slow');
			$('#changeText').html('Dynamischer Inhalt');
		});
	}); 

	 $('#close').click(function() {
		$('#container').hide('slow', function() {
			$('#overlay').fadeOut();          
		});
	});
});



function registrierenSendenSuccess(data) {
	Cookies.set("userID", data.userID, {expires: 0.2});
	$('#container').hide('slow',
		function () {
			$('#overlay').fadeOut();
			document.location.href = ".";
		}
	);
}