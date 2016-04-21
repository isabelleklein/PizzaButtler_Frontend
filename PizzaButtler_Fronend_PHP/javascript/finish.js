$(document).ready(function(){
	
	var gesamtsumme = parseFloat(Cookies.get("warenkorbGesamtsumme"));
	
	$("#gesamtsumme").html(gesamtsumme.toFixed(2));
	
});