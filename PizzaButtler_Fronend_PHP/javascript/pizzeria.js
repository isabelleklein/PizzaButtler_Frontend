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
		rest.fakeSend("./mock/getRestaurant.json");
		
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
		$("#infoContainer").html("<img height='120px' width='350px' src='data:image/jpg;base64," + data.bild + "'><br>\
		<input type='hidden' value='" + data.restaurantID + "'/>\
		Name: " + data.name + "<br>\
		Öffnungszeiten: " + data.oeffnungszeiten + "<br>\
		Mindestbestellwert: " + data.mindestbestellwert + "<br>\
		Adresse: " + data.strasse + " " + data.hausnummer + "<br>\
		PLZ: " + data.plz + " " + data.ort + "<br>\
		Lieferkosten: " + data.lieferkosten);
	}
}

var buildSpeisekarte = function(data){
	if(data == 0) {
		$("#pizzerienContainer").html("<h1>Es konnten leider keine Daten zur Pizzeria geladen werden</h1>");
	}
	else {
		speisekarte = data;
		
		var container = $("#pizzerienContainer");
		
		var ul = $("<ul></ul>");
		for(var i = 0; i<speisekarte.length; i++){
			var li = $("<li><a href='#tabs-" + i + "'>"+ speisekarte[i].bezeichnung + "</a></li>");
			ul.append(li);
		}
		container.append(ul);		
		
		for(var i = 0; i<speisekarte.length; i++){
			var div = $("<div id='tabs-" + i + "'></div>");
			var list = $("<ul></ul>");
			for(var j = 0; j<speisekarte[i].produkte.length; j++){
				var li = $("<li></li>");
				var content = speisekarte[i].produkte[j].bezeichnung;
				li.append(content);
				list.append(li);
				div.append(list);
			}
			container.append(div);
		}
		
		
		$("#pizzerienContainer").tabs();
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