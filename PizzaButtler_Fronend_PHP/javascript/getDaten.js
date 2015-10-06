/** Userdaten zum User mit best. ID holen **/
function getDaten(id, callback) {
	var ajaxObj = {};
	ajaxObj = {  
		type: "GET",																
		url: "http://pizzabutlerentwbak.krihi.com/entwicklung/rest/user/" + id, 							
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
	
