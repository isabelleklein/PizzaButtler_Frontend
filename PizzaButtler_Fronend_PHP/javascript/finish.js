$(document).ready(function(){	
	$("#gesamtsumme").html(parseFloat(Cookies.get("warenkorbGesamtsumme")).toFixed(2));
});