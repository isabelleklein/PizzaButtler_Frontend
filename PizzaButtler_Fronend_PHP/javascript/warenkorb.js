$(document).ready(function(){
	warenkorbAnzeigen();
        $(".bestellen").click(function(){
			window.location.href = "./finish.php";
		});
});



function warenkorbAnzeigen(){
	var zeit = Cookies.get("zeit");
	var q = ("Warenkorb zur Bestellung vom " + zeit);
	$("#bestellzeit").html(q);
	
	var warenkorb = new Array();
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
    
}



