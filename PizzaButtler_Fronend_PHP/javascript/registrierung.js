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
			rest.setParameters("POST", "user/", jsObj, registrierenSendenSuccess);
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



// TODO: Sollte richtig gebaut werden, akt: returnCode 0 = success, sollte mit backend abgesprochen werden
function registrierenSendenSuccess(returnCode) {
	returnCode = 0;
	/**Ermittlung von Erfolgreicher übertragung --> Rückgabe User-ID**/
	if (returnCode == 0) { // Erfolgreiche Registrierung
		// UserID setzen == angemeldet
		Cookies.set("userID", returnCode, {expires: 0.2});			
		
		$('#container').hide('slow',
			function () {
				$('#overlay').fadeOut();
				document.location.href = ".";
			}
		);
	}
	else if (returnCode == -1) {
		document.getElementById("fehlerAbsenden").innerHTML = "Ein oder mehr Eingabedaten sind ungültig";
		document.getElementById("fehlerAbsenden").style.display = "inline";
		console.log("if-Abschnitt durchlaufen");
	}
	else if (returnCode == -2) {
		document.getElementById("fehlerAbsenden").innerHTML = "Die Email-Adresse wird bereits verwendet";
		document.getElementById("fehlerAbsenden").style.display = "inline";
		console.log("if-Abschnitt durchlaufen");
	}
}