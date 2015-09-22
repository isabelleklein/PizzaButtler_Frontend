
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
				url: "http://pizzabuttler.com/reg/new/", 										/**Webadresse, welche das Anlegen eines neuen Benutzers ermöglicht**/
				data: JSON.stringify(jsObj), 													/**Datei, die im HTTP-Body mitgegeben wird**/
				contentType:"application/json",  												/**Dateityp der Datei im HTTP-Body**/
				error: function(jqXHR, textStatus, errorThrown) {								/**Ermittlung von Fehlern**/
					console.log("Error " + jqXHR.getAllResponseHeaders() + " " + errorThrown);
					$('#div_ajaxResponse').text( "Fehler" );
				},
				success: function(data) { 														/**Ermittlung von Erfolgreicher übertragung --> Das Backend sendet den HTTP-Code 200**/
					//console.log(data);
					if(data[0].HTTP_CODE == 200) {
						$('#div_ajaxResponse').text( data[0].MSG );
					}
				},
				complete: function(XMLHttpRequest) {
					//console.log( XMLHttpRequest.getAllResponseHeaders() );
				}, 
				dataType: "json" //request JSON
			};
			
			$.ajax(ajaxObj);
			}
	});
});



