/** Javascript für die Funktionalitäten der Statistikseite **/
var rest;

if(typeof Cookies.get("restaurantID") === "undefined" && window.location.href.contains("statistik.php"))
	window.location = "index.php";

$(document).ready(function() {
	var restaurantID = Cookies.get('restaurantID');
	rest = new RestInterface();
	rest.setParameters("GET", "statistik/" + restaurantID , null, statistikAufrufen);
	rest.send();
	
});

var statistikAufrufen = function(data){
	var brutto = data.umsatzSUM;
	var bestellungen = data.bestellungSUM;
	var anzKunden = data.kundenSUM;
	var umsavg = data.umsatzAVG;
	
	$("#anzahlKunden").html(anzKunden + " Kunden");
	$("#anzahlBestellungen").html(bestellungen + " Bestellungen im aktuellen Monat");
	$("#monUmsBrt").html(brutto.toFixed(2) + "€ im aktuellen Monat");
	/** aktuell wird davon ausgegangen, dass einfach bei jeder Bestellung 19% Mehrwertsteuer fällig ist. 
	 * Künftig muss die Berechnung durch das Backend vorgenommen werden, um den korrekten Wert zu ermitteln
	 */
	var netto = brutto/1.19
	$("#monUmsNet").html(netto.toFixed(2) + "€ im aktuellen Monat"); 
	$("#schnittBestWert").html(umsavg.toFixed(2) + "€ pro Bestellung")
	if(brutto < 500){
		$("#gebuehren").html((brutto*0.125).toFixed(2) + "€");
	}
	else if(brutto < 2000){
		$("#gebuehren").html((brutto*0.1).toFixed(2) + "€");
	}
	else if(brutto < 5000){
		$("#gebuehren").html((brutto*0.09).toFixed(2) + "€");
	}
	else{
		$("#gebuehren").html((brutto*0.08).toFixed(2) + "€");
	}
}