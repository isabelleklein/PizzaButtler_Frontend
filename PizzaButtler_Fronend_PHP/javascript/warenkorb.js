var rest;
$(document).ready(function(){
	warenkorbAnzeigen();
	lieferadresseAnzeigen();
    $(".bestellen").click(function(){
		var bestellung = {};
		
		/*
		bestellung.warenkorb = warenkorb;
		bestellung.zeitpunkt = ...
		...
		
		*/
		rest = new RestInterface();
		rest.setParameters("POST", "bestellung/", bestellung, verarbeiteBestellung, bestellungNichtErfolgreich);
		rest.send();
	});
});



function warenkorbAnzeigen(){
	var zeit = Cookies.get("zeit");
	var q = ("Warenkorb zur Bestellung vom " + zeit);
	$("#bestellzeit").html(q);
	
	var warenkorb = Cookies.getJSON("Warenkorb");
	
	var ul = $("<ul style='padding-left:15px'></ul>");
	
	for (var i=0; i<warenkorb.length; i++){
		var name = warenkorb[i].name;
		var groesse = warenkorb[i].groesse;
		var preis = warenkorb[i].preis;
		var anzahl = warenkorb[i].anzahl;
		
		// Zusatzbelägestring + Preis für die Zusatzbeläge
		var zusatz = "";
		warenkorb[i].zusatzbelaege.forEach(function(belag){
			zusatz += belag.name+ ", ";
			preis += belag.preis;
		});		
		zusatz = zusatz.substr(0, zusatz.length - 2); // Letztes ", " entfernen
	
		var li = $("<li>" + anzahl + " " + name + " Größe: " + groesse + " Preis: " + preis + "€\
					<div>" + zusatz + "</div></li>");
		ul.append(li);
	}
	
	var summe = 0;

	for(var i = 0; i < warenkorb.length; i++){
		summe += warenkorb[i].preis * warenkorb[i].anzahl;
		warenkorb[i].zusatzbelaege.forEach(function(belag){
			summe += belag.preis * warenkorb[i].anzahl;
		});
	}
	
	ul.append("<p style='margin:0px'><br>" + "Gesamtpreis: " + summe.toFixed(2) + "€</p>");
	
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
		
	$("#lieferadresseAnzeigen").html("Bestellung per " + lieferart + ".<br>");
	
	// Bei lieferung die Lieferadresse anzeigen
	if (lieferart == "Lieferung"){
		$("#lieferadresseAnzeigen").append("Lieferadresse:<br><br>" + "Name: " + vorname + " " + nachname + "<br>" +
				"Straße: " + strasse + " " + hausnummer + "<br>" + "PLZ/Ort: " + plz + " " + ort + "<br>" + 
				"Telefon: " + telefon + "<br>Mail: " + email);
	}
	
	$("#lieferadresseAnzeigen").append("<br><br><br><button class='userbutton' id='warenkorb_back'> zurück </button> <button class='userbutton' id='warenkorb_next'> Bestellen </button>");
}


function verarbeiteBestellung(data){
	console.log("Erfolgreich");
	console.log(data);
	window.location.href = "./finish.php";
}

function bestellungNichtErfolgreich(){
	console.log("Fehler, Bestellungsserver ist nicht erreichbar");
}

