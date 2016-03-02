var rest;
var speisekarte;
var test;
$(document).ready(function(){
	// GET-Parameter
	var pizzeriaId = parse("id");
	
	// rest-Aufruf vorbereiten
	rest = new RestInterface();
	rest.setParameters("GET", "pizzeria/" + pizzeriaId , null, buildpizzeriaSeite);
	
	if(pizzeriaId != ""){
		// rest-Aufruf durchf�hren und Liste bef�llen
		rest.fakeSend("./mock/getPizzeria.json");
		
		// Abrufen der Speisekarte
		rest.setParameters("GET", "pizzeria/" + pizzeriaId + "/speisekarte", null, buildSpeisekarte);
		rest.fakeSend("./mock/getSpeisekarte.json");
	}
	else {
		rest.fakeSend("./mock/null.json");
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
		Öffnungszeiten: " + data.oeffnungszeiten + "<br>\
		Mindestbestellwert: " + data.mindestbestellwert + "<br>\
		Straße: " + data.strasse + "<br>\
		Hausnummer: " + data.hausnummer + "<br>\
		PLZ: " + data.plz + "<br>\
		Ort: " + data.ort + "<br>\
		Lieferkosten: " + data.lieferkosten + "<br>\
		E-Mail: " + data.email);
		
	}
}

var buildSpeisekarte = function(data){
	if(data == 0) {
		$("#pizzerienContainer").html("<h1>Es konnten leider keine Daten zur Pizzeria geladen werden</h1>");
	}
	else {
		speisekarte = data;
		
		var container = $("#pizzerienContainer");
		
		for(var i = 0; i<speisekarte.length; i++){
			var list = $("<ul></ul>");
			var kategorie = "Kategorie: " + speisekarte[i].bezeichnung;
			list.append(kategorie);
			for(var j = 0; j<speisekarte[i].produkte.length; j++){
				var li = $("<li></li>");
				var content = "Bezeichnung: " + speisekarte[i].produkte[j].bezeichnung;
				li.append(content);
				list.append(li);
			}
			container.append(list);
		}
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