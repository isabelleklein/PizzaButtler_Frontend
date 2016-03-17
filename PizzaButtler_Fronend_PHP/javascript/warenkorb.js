

$(document).ready(function(){
<<<<<<< HEAD
=======
	console.log("Test");
>>>>>>> origin/PHP-branch
	warenkorbAnzeigen();
});

function warenkorbAnzeigen(){
	var warenkorb = new Array();
<<<<<<< HEAD
	warenkorb = Cookies.getJSON("Warenkorb");
	
	var ul = $("<ul style='padding-left:15px'></ul>");
	
	for (var i=0; i<warenkorb.length; i++){
		var bezeichnung = warenkorb[i].bezeichnung;
		var groesse = warenkorb[i].groesse;
		var preis = warenkorb[i].preis;
	
		var li = $("<li>" + bezeichnung + " Größe: " + groesse + " Preis: " + preis + "€</li>");
		ul.append(li);
	}
	
	var summe = 0;
	var p ="";
	for(var i = 0; i < warenkorb.length; i++){
		summe += warenkorb[i].preis;
	}
	p = $("<p style='margin:0px'><br>" + "Gesamtpreis: " + summe.toFixed(2) + "€</p>");
	ul.append(p);
	
	$("#warenkorbAnzeigen").html(ul);

=======
	warenkorb[0] = Cookies.get("Warenkorb");
	$("#warenkorbAnzeigen").html("Warenkorb: " +  warenkorb[0]);
>>>>>>> origin/PHP-branch
}