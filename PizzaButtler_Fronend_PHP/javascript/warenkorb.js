$(document).ready(function(){
	warenkorbAnzeigen();
	lieferadresseAnzeigen();
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
		var name = warenkorb[i].name;
		var groesse = warenkorb[i].groesse;
		var preis = warenkorb[i].preis;
		var anzahl = warenkorb[i].anzahl;
	
		var li = $("<li>" + anzahl + " " + name + " Größe: " + groesse + " Preis: " + preis + "€</li>");
		ul.append(li);
	}
	
	var summe = 0;
	var p ="";
	for(var i = 0; i < warenkorb.length; i++){
		summe += warenkorb[i].preis * warenkorb[i].anzahl;
	}
	p = $("<p style='margin:0px'><br>" + "Gesamtpreis: " + summe.toFixed(2) + "€</p>");
	ul.append(p);
	
	$("#warenkorbAnzeigen").html(ul);
    
}

function lieferadresseAnzeigen(){
	var vorname = Cookies.get("vorname");
	var nachname = Cookies.get("nachname");
	var strasse = Cookies.get("strasse");
	var hausnummer = Cookies.get("hausnummer");
	var plz = Cookies.get("plz");
	var ort = Cookies.get("ort");
	var telefon = Cookies.get("telefon");
	var email = Cookies.get("email");
	var lieferart = Cookies.get("lieferart");
	var p = ("Bestellung per " + lieferart + ".<br>");
		$("#lieferadresseAnzeigen").html(p);
	
	if (lieferart == "Lieferung"){
		var j = ("Lieferadresse:<br><br>" + "Name: " + vorname + " " + nachname + "<br>"
				+"Straße: " + strasse + " " + hausnummer + "<br>"
				+"PLZ/Ort: " + plz + " " + ort + "<br>"
				+"Telefon: " + telefon + "<br>Mail: " + email );
				$("#lieferadresseAnzeigen").append(j);
	}
	
	$("#lieferadresseAnzeigen").append("<br><br><br><button class = 'bestellen' > Bestellen </button>");
}



