$(document).ready(function(){
	// GET-Parameter
	var pizzeriaId = parse("id");
	
	// Rest-Aufruf vorbereiten
	var rest = RestInterface;
	rest.setParameters("GET", "pizzeria/" + pizzeriaId , null, buildpizzeriaSeite);
	
	if(pizzeriaId != ""){
		// Rest-Aufruf durchf�hren und Liste bef�llen
		rest.fakeSend("http://localhost/mock/getPizzeria.json");
	}
	else {
		rest.fakeSend("http://localhost/mock/null.json");
	}
});

var buildpizzeriaSeite = function(data){
	if(data == 0) {
		$("#pizzerienContainer").html("<h1>Die gew&uuml;nschte Pizzeria konnte leider nicht gefunden werden</h1>");
	}
	else {

		$("#pizzerienContainer").html("Daten:<br>\
		ID: " + data.restaurantID + "<br>\
		Name: " + data.name + "<br>\
		Beschreibung: " + data.beschreibung + "<br>\
		�ffnungszeiten: " + data.oeffnungszeiten + "<br>\
		Mindestbestellwert: " + data.mindestbestellwert + "<br>\
		Stra�e: " + data.strasse + "<br>\
		Hausnummer: " + data.hausnummer + "<br>\
		PLZ: " + data.plz + "<br>\
		Ort: " + data.ort + "<br>\
		Lieferkosten: " + data.lieferkosten + "<br>\
		E-Mail: " + data.email);
		
	}
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