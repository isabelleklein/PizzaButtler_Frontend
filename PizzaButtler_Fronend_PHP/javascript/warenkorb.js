

$(document).ready(function(){
	console.log("Test");
	warenkorbAnzeigen();
});

function warenkorbAnzeigen(){
	var warenkorb = new Array();
	warenkorb[0] = Cookies.get("Warenkorb");
	$("#warenkorbAnzeigen").html("Warenkorb: " +  warenkorb[0]);
}