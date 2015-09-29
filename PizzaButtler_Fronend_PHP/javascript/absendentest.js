
/** Übermittlung der eingegebenen Daten an das Backend **/

$(document).ready(function() {
	var $registrieren = $('#registrieren');
	/** Aktionsinformationen für den Absenden-Button **/
	
	$('#absenden').click(function(e) {
		console.log("Abschicken Button wurde geklickt");
		if(checkForm()==true)
			{
			e.preventDefault(); /** cancel form submit **/
			var jsObj = $registrieren.serializeObject(), ajaxObj = {};
			
			//console.log(jsObj);
			
			ajaxObj = {  
				type: "POST",																	/**RESTful-Methode POST**/
				url: "http://pizzabutlerentwbak.krihi.com/entwicklung/rest/user/regUser", 										/**Webadresse, welche das Anlegen eines neuen Benutzers ermöglicht**/
				data: JSON.stringify(jsObj), 													/**Datei, die im HTTP-Body mitgegeben wird**/
				contentType:"application/json",  												/**Dateityp der Datei im HTTP-Body**/
				error: function(jqXHR, textStatus, errorThrown) {								/**Ermittlung von Fehlern**/
					console.log("Error " + jqXHR.getAllResponseHeaders() + " " + errorThrown);
					$('#div_ajaxResponse').text( "Fehler aufgetreten" );
				},
				success: function(data) { 														/**Ermittlung von Erfolgreicher übertragung --> Das Backend sendet den HTTP-Code 200**/
					console.log(data);
					if(data ==0) {
						//$('#div_ajaxResponse').text( data[0].MSG );
						$('#div_ajaxResponse').text( "Alles in Ordnung" );
						console.log("if-Abschnitt durchlaufen");
						$('#container').hide('slow', 
				                 function() {
				                      $('#overlay').fadeOut();          
				                 }    
				            );
					}
					else if(data == -2) {
						//$('#div_ajaxResponse').text( data[0].MSG );
						$('#div_ajaxResponse').text( "Die Email-Adresse wird bereits verwendet" );
						console.log("if-Abschnitt durchlaufen");
					}
					//window.location.href = "../views/login_kunde.php";	
				},
				complete: function(XMLHttpRequest) {
					console.log( XMLHttpRequest.getAllResponseHeaders() );
				}, 
				dataType: "json" //request JSON
			};
			
			$.ajax(ajaxObj);
			}
	});
	
    $('#open').click(
        function() {
            $('#overlay').show('slow', 
                function() {
                    $('#container').fadeIn('slow');
                    $('#changeText').html('Dynamischer Inhalt');
                }
            );
        }
    );
    
     $('#close').click(
        function() {
            $('#container').hide('slow', 
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



