/**
 * @author Dominik Terlau
 * @Version 2.1
 */


/** Übermittlung der eingegebenen Daten an das Backend **/

$(document).ready(function() {
	var $pwvergessen = $('#pwvergessen');
	/** Aktionsinformationen für den Absenden-Button **/
	
	$('#absenden_pwvergessen').click(function(e) {
		console.log("Abschicken Button wurde geklickt");
		if(checkForm()==true)
			{
			e.preventDefault(); /** cancel form submit **/
			var jsObj = $pwvergessen.serializeObject(), ajaxObj = {};
			
			//console.log(jsObj);
			
			ajaxObj = {  
				type: "POST",																	/**RESTful-Methode POST**/
				url: "http://pizzabutlerentwbak.krihi.com/entwicklung/rest/user/regUser", 										/**Webadresse, welche das Anlegen eines neuen Benutzers ermöglicht**/
				data: JSON.stringify(jsObj), 													/**Datei, die im HTTP-Body mitgegeben wird**/
				contentType:"application/json",  												/**Dateityp der Datei im HTTP-Body**/
				error: function(jqXHR, textStatus, errorThrown) {								/**Ermittlung von Fehlern**/
					console.log("Error " + jqXHR.getAllResponseHeaders() + " " + errorThrown);
				},
				success: function(data) { 														/**Ermittlung von Erfolgreicher übertragung --> Das Backend sendet den HTTP-Code 200**/
					console.log(data);
					if(data ==0) {
						console.log("if-Abschnitt durchlaufen");
						$('#container_pwvergessen').hide('slow', 
				                 function() {
				                      $('#overlay').fadeOut();          
				                 }    
				            );
					}
					else if(data == -1) {
						document.getElementById("fehlerAbsenden").innerHTML = "Ein oder mehr Eingabedaten sind ungültig";
						document.getElementById("fehlerAbsenden").style.display="inline";
						console.log("if-Abschnitt durchlaufen");
					}	
					else if(data == -2) {
						document.getElementById("fehlerAbsenden").innerHTML = "Die Email-Adresse wird bereits verwendet";
						document.getElementById("fehlerAbsenden").style.display="inline";
						console.log("if-Abschnitt durchlaufen");
					}	
				},
				complete: function(XMLHttpRequest) {
					console.log( XMLHttpRequest.getAllResponseHeaders() );
				}, 
				dataType: "json" //request JSON
			};
			
			$.ajax(ajaxObj);
			}
	});
	
    $('#open_pwvergessen').click(
        function() {
            $('#overlay').show('slow', 
                function() {
                    $('#container_pwvergessen').fadeIn('slow');
                    $('#changeText').html('Dynamischer Inhalt');
                }
            );
        }
    );
    

    
     $('.close').click(
        function() {
            $('#container_pwvergessen').hide('slow', 
                 function() {
                    $('#overlay').fadeOut();          
                 }    
            );
        }
    );
     
  	$(function() {
	    $( '#datepicker' ).datepicker({
	      changeMonth: true,
	      changeYear: true
	    });
	 });
});



