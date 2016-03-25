/** Userdata zum User mit best. ID holen **/
var rest;
var standorte;
$(document).ready(function(){	
	rest = new RestInterface();
	rest.setParameters("GET", "standorte", null, function(data){
		standorte = data.standorte;
		$.formUtils.suggest($('#pizzerienSucheGross input'), standorte);
		$.formUtils.suggest($('.umkreissuche_header'), standorte);
	});
	
	rest.send();
});