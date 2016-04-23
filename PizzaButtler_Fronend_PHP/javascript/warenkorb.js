var rest;
var warenkorb;
$(document).ready(function(){
	warenkorbAnzeigen();
	lieferadresseAnzeigen();
    $("#warenkorb_next").click(function(){
		var bestellung = {};
		if(Boolean(Cookies.get("userID"))){
			bestellung.userID = parseInt(Cookies.get("userID"));
			bestellung.gastID = 0;
		} else {
			bestellung.userID = 0;
			bestellung.gastID = parseInt(Cookies.get("gastID"));
		}
		bestellung.restaurantID = parseInt(Cookies.get("restaurantIdBestellung"));
		bestellung.email = Cookies.get("email");
		bestellung.bestellzeitpunkt = Cookies.get("zeit2");
		bestellung.rechnungsbetrag = parseFloat(Cookies.get("warenkorbGesamtsumme"));
		bestellung.strasse = Cookies.get("strasse");
		bestellung.hausnummer = Cookies.get("hausnummer");
		bestellung.plz = Cookies.get("plz");
		bestellung.ort = Cookies.get("ort");
		bestellung.bestellinfo = ""; // Wird noch benötigt!
		bestellung.lieferung = Cookies.get("lieferart") == "Lieferung" ? true : false;
		
		bestellung.bestellpositionen = [];
		
		for(var i = 0; i<warenkorb.length; i++){
			bestellung.bestellpositionen[i] = {};
			bestellung.bestellpositionen[i].bestellpositionID = i;
			bestellung.bestellpositionen[i].anzahl = warenkorb[i].anzahl;
			
			var bestellpositionpreis = 0;
			bestellpositionpreis += warenkorb[i].preis * warenkorb[i].anzahl;
			warenkorb[i].zusatzbelaege.forEach(function(belag){
				bestellpositionpreis += belag.preis * warenkorb[i].anzahl;
			});
			
			bestellung.bestellpositionen[i].preis = bestellpositionpreis;
			
			bestellung.bestellpositionen[i].produkt = {};
			bestellung.bestellpositionen[i].produkt.produktID = warenkorb[i].produktID;
			bestellung.bestellpositionen[i].produkt.bezeichnung = warenkorb[i].name;
			bestellung.bestellpositionen[i].produkt.beschreibung = warenkorb[i].beschreibung;
			bestellung.bestellpositionen[i].produkt.varianten = [];
			
			var variante = {};
			if(warenkorb[i].groesse == "klein") variante.varianteID = 1;
			else if(warenkorb[i].groesse == "mittel") variante.varianteID = 2;
			else if(warenkorb[i].groesse == "groß") variante.varianteID = 3;
			variante.bezeichnung = "";
			
			bestellung.bestellpositionen[i].variante = variante;
			
			bestellung.bestellpositionen[i].zusatzbelag = warenkorb[i].zusatzbelaege = [];
		}
		
		rest = new RestInterface();
		rest.setParameters("POST", "bestellung/send", bestellung, bestellungSuccess);
		

		if(document.getElementById('paypal').checked || document.getElementById('bar').checked){
			if(checkMinBestellwert()){
				rest.send();
				window.location = document.getElementById('paypal').checked ? 'finish_paypal.php' : 'finish_bar.php';
			} else {
				alert("Bestellung konnte nicht abgesendet werden, da der Mindestbestellwert nicht erreicht wurde");
			}
		} else {
			window.alert("Bitte geben Sie eine Bezahlart an");
		}
	});
});


function checkMinBestellwert() {
	return (parseFloat(Cookies.get("warenkorbGesamtsumme")) - parseFloat(Cookies.get("restaurantLieferkosten"))) > parseFloat(Cookies.get("restaurantMindestbestellwert"));
}

function bestellungSuccess(){
	Cookies.remove("Warenkorb");
}


function warenkorbAnzeigen(){
	var zeit = Cookies.get("zeit");
	var q = ("Warenkorb zur Bestellung vom " + zeit);
	$("#bestellzeit").html(q);
	
	warenkorb = Cookies.getJSON("Warenkorb");
	
	var ul = $("<ul style='padding-left:15px;margin-left: -30%;'></ul>");
	
	for (var i=0; i<warenkorb.length; i++){
		var name = warenkorb[i].name;
		var groesse = warenkorb[i].groesse;
		var preis = warenkorb[i].preis;
		var anzahl = warenkorb[i].anzahl;
		
		if (groesse == "groß"){
			kurzgroesse = "L";
		}	else if (groesse == "mittel"){
			kurzgroesse = "M";
		}	else if (groesse == "klein"){
			kurzgroesse = "S";
		}
		
		// Zusatzbelägestring + Preis für die Zusatzbeläge
		var zusatz = "";
		warenkorb[i].zusatzbelaege.forEach(function(belag){
			zusatz += belag.name+ ", ";
			preis += parseFloat(belag.preis);
		});		
		zusatz = zusatz.substr(0, zusatz.length - 2); // Letztes ", " entfernen
	
	//	var li = $("<li>" + anzahl + " " + name + " Größe: " + groesse + " Preis: " + preis + "€\
	//				<div>" + zusatz + "</div></li>");
		var li = $("<li class='warenkorbelement'>" + name + ", " + kurzgroesse + ",\
                    <span class='warenkorbpreis'>" + preis.toFixed(2) + "€</span>\
					<button class='hinzufuegen_button' onclick='hinzufuegen(" + i + ")'><img class='hinzufuegen' src='./images/plus.jpg' alt='+'></button>                           <a class='warenkorb_anzahl'>" + anzahl + "</a>\                                                                                                                 <button class='hinzufuegen_button' onclick='hinzufuegen(" + i + ")'><img class='reduzieren' src='./images/minus.jpg' alt='-'></button>          				  <div class='zusatz'>" + zusatz + "</li></div>");
		ul.append(li);
	}
	
	if(Cookies.get("lieferart") === "Lieferung"){
		ul.append("<li class='warenkorbelement'>Lieferkosten: " + Cookies.get("restaurantLieferkosten") + "€ </li>");
	}
	
	
	var summe = 0;

	for(var i = 0; i < warenkorb.length; i++){
		summe += warenkorb[i].preis * warenkorb[i].anzahl;
		warenkorb[i].zusatzbelaege.forEach(function(belag){
			summe += belag.preis * warenkorb[i].anzahl;
		});
	}
	
	if(Cookies.get("lieferart") === "Lieferung"){
		summe += parseFloat(Cookies.get("restaurantLieferkosten"));
	}
	
	Cookies.set("warenkorbGesamtsumme", summe);
	
	ul.append("<p style='margin:0px'><br>" + "Gesamtpreis: " + summe.toFixed(2) + "€</p>");
	
	$("#warenkorbAnzeigen").html(ul);
    
}

function hinzufuegen(i){
	warenkorb[i].anzahl++;
	Cookies.set("Warenkorb",warenkorb);
	warenkorbAnzeigen();
}

function reduzieren(i){
	warenkorb[i].anzahl--;
	if (warenkorb[i].anzahl == 0){
		warenkorb.splice(i,1);
	}
	Cookies.set("Warenkorb",warenkorb);
	warenkorbAnzeigen();
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

	// Zurück-Button
	$("#warenkorb_back").attr("onclick", "location.href='delivery.php'");
}