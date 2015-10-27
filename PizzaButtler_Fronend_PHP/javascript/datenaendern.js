$(document).ready(function() {
	var $daten = $('#datenaendern');
	/** Aktionsinformationen für den Absenden-Button **/
	
	$('#datenspeichern').click(function(e) {
		console.log("Abschicken Button wurde geklickt");
		if(true){
			e.preventDefault(); /** cancel form submit **/
			var jsObj = $daten.serializeObject(), ajaxObj = {};
			
			console.log(jsObj);
			
			ajaxObj = {  
				type: "PUT",																	/**RESTful-Methode POST**/
				url: "http://pizzabutlerentwbak.krihi.com/entwicklung/rest/user/1", 										/**Webadresse, welche das Anlegen eines neuen Benutzers ermöglicht**/
				data: JSON.stringify(jsObj), 													/**Datei, die im HTTP-Body mitgegeben wird**/
				contentType:"application/json",  												/**Dateityp der Datei im HTTP-Body**/
				error: function(jqXHR, textStatus, errorThrown) {								/**Ermittlung von Fehlern**/
					console.log("Error " + jqXHR.getAllResponseHeaders() + " " + errorThrown);
				},
				success: function(data) { 														/**Ermittlung von Erfolgreicher übertragung --> Das Backend sendet den HTTP-Code 200**/
					console.log(data);
				},
				complete: function(XMLHttpRequest) {
					console.log( XMLHttpRequest.getAllResponseHeaders() );
				}, 
				dataType: "json" //request JSON
			};
			
			$.ajax(ajaxObj);
		}
	});
});



