/**
 * @author Dominik Terlau
 * @Version 2.1
 */


/** Übermittlung der eingegebenen Daten an das Backend **/

	
	function getDaten(callback) {
			var ajaxObj = {};
			
			//console.log(jsObj);
			
			ajaxObj = {  
				type: "GET",																	/**RESTful-Methode POST**/
				url: "http://pizzabutlerentwbak.krihi.com/entwicklung/rest/user/1", 										/**Webadresse, welche das Anlegen eines neuen Benutzers ermöglicht**/
				error: function(jqXHR, textStatus, errorThrown) {								/**Ermittlung von Fehlern**/
					console.log("Error " + jqXHR.getAllResponseHeaders() + " " + errorThrown);
				},
				success: function(data) { 														/**Ermittlung von Erfolgreicher übertragung --> Das Backend sendet den HTTP-Code 200**/
					callback(data);
					
					
				},
				complete: function(XMLHttpRequest) {
					console.log( XMLHttpRequest.getAllResponseHeaders() );
				}, 
				dataType: "json" //request JSON
			};
			
			$.ajax(ajaxObj);
	}
	
	$(function() {
	    $( '#datepicker' ).datepicker({
	      changeMonth: true,
	      changeYear: true
	    });
	 });
	
