"use strict";
$(document).ready(function() {
	var $login = $('#login');
	/** Aktionsinformationen für den Absenden-Button **/
	
	$('#absenden_login').click(function(e) {
		console.log("Login Button wurde geklickt");
		
			
		e.preventDefault(); /** cancel form submit **/
		var jsObj = $login.serializeObject();
		console.log("Login Daten: " + jsObj);
		var rest = RestInterface;

		rest.setParameters("POST", "user/login", jsObj, function(returnCode){
			console.log("Anwortdaten: " + returnCode);
			if(returnCode > -1) {
				console.log("Login erfolgreich");
				$('#div_ajaxResponse').text( returnCode );
				localStorage.setItem("userID", returnCode);
				window.location.href = "../login_intro.php"
			}
			else if(returnCode === -1){
				console.log("Fehler: Falsche Eingaben / Nicht vorhanden");
			}
			else {
				console.log("Fehler im Prozess aufgetreten");
			}
		});
		rest.fakeSend("http://localhost:63342/PizzaButtler_Frontend/PizzaButtler_Fronend_PHP/mock/loginSuccess.json")


	});
});
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