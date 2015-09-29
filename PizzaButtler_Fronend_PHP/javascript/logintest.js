
/** Übermittlung der eingegebenen Daten an das Backend **/

$(document).ready(function() {
	var $login = $('#login');
	/** Aktionsinformationen für den Absenden-Button **/
	
	$('#login').click(function(e) {
		console.log("Login Button wurde geklickt");
		if(checkForm()==true)
			{
			e.preventDefault(); /** cancel form submit **/
			var jsObj = $login.serializeObject(), ajaxObj = {};
			
			//console.log(jsObj);
			
			ajaxObj = {  
				type: "POST",																	/**RESTful-Methode POST**/
                                                                        /**Webadresse, welche das Anlegen eines neuen Benutzers ermöglicht**/
				url: "http://pizzabutlerentwbak.krihi.com/entwicklung/rest/user/login", 		
				data: JSON.stringify(jsObj), 													/**Datei, die im HTTP-Body mitgegeben wird**/
				contentType:"application/json",  												/**Dateityp der Datei im HTTP-Body**/
				error: function(jqXHR, textStatus, errorThrown) {								/**Ermittlung von Fehlern**/
					console.log("Error " + jqXHR.getAllResponseHeaders() + " " + errorThrown);
					$('#div_ajaxResponse').text( "Alles in Ordnung" );
				},
				success: function(data) { 														/**Ermittlung von Erfolgreicher übertragung --> Das Backend sendet den HTTP-Code 200**/
					//console.log(data);
					if(data[0].HTTP_CODE == 200) {
						$('#div_ajaxResponse').text( data[0].MSG );
						window.location.href = "login_intro.php";								/** neue Seite öffnen **/
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



