var rest;
$(document).ready(function(){
	// GET-Parameter
	var pizzeriaId = parse("id");
	
	// rest-Aufruf vorbereiten
	rest = new RestInterface();
	rest.setParameters("GET", "pizzeria/" + pizzeriaId , null, buildpizzeriaSeite);
	
	if(pizzeriaId != ""){
		// rest-Aufruf durchführen und Liste befüllen
		rest.fakeSend("http://localhost/mock/getPizzeria.json");
		
		// Abrufen der Speisekarte
		rest.setParameters("GET", "pizzeria/" + pizzeriaId + "/speisekarte", null, buildSpeisekarte);
		rest.fakeSend("http://localhost/mock/getSpeisekarte.json");
	}
	else {
		rest.fakeSend("http://localhost/mock/null.json");
	}
});

var buildpizzeriaSeite = function(data){
	if(data == 0) {
		$("#infoContainer").html("<h1>Es konnten leider keine Daten zur Pizzeria geladen werden</h1>");
	}
	else {

		$("#infoContainer").html("Daten:<br>\
		ID: " + data.restaurantID + "<br>\
		Name: " + data.name + "<br>\
		Beschreibung: " + data.beschreibung + "<br>\
		Ã–ffnungszeiten: " + data.oeffnungszeiten + "<br>\
		Mindestbestellwert: " + data.mindestbestellwert + "<br>\
		StraÃŸe: " + data.strasse + "<br>\
		Hausnummer: " + data.hausnummer + "<br>\
		PLZ: " + data.plz + "<br>\
		Ort: " + data.ort + "<br>\
		Lieferkosten: " + data.lieferkosten + "<br>\
		E-Mail: " + data.email);
		
	}
}

var buildSpeisekarte = function(data){
	var groessen = data["groessen"];
	var pizzaArray = data["pizza"];
	
	console.log(groessen);
	console.log(pizzaArray);
}

function parse(val) {
    var result = "",
        tmp = [];
    location.search
    //.replace ( "?", "" ) 
    // this is better, there might be a question mark inside
    .substr(1)
        .split("&")
        .forEach(function (item) {
        tmp = item.split("=");
        if (tmp[0] === val) result = decodeURIComponent(tmp[1]);
    });
    return result;
}