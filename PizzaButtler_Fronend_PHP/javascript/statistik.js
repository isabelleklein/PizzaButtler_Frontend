/** Javascript für die Funktionalitäten der Statistikseite **/
var rest;

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
	
	$("#anzahlKunden").html(anzKunden + "Kunden");
	$("#anzahlBestellungen").html(bestellungen + " Bestellungen im aktuellen Monat");
	$("#monUmsBrt").html(brutto + "€ im aktuellen Monat");
	/** aktuell wird davon ausgegangen, dass einfach bei jeder Bestellung 19% Mehrwertsteuer fällig ist. 
	 * Künftig muss die Berechnung durch das Backend vorgenommen werden, um den korrekten Wert zu ermitteln
	 */
	var netto = brutto/1.19
	$("#monUmsNet").html(netto.toFixed(2) + "€ im aktuellen Monat"); 
	$("#schnittBestWert").html(umsavg + "€ pro Bestellung")
	if(brutto < 500){
		$("#gebuehren").html(brutto*0.125 + "€");
	}
	else if(brutto < 2000){
		$("#gebuehren").html(brutto*0.1 + "€");
	}
	else if(brutto < 5000){
		$("#gebuehren").html(brutto*0.09 + "€");
	}
	else{
		$("#gebuehren").html(brutto*0.08 + "€");
	}
}