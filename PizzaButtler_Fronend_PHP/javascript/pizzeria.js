﻿var rest;
var speisekarte;
var test;
var warenkorb = new Array();
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


document.onscroll = function () {
var pos = window.pageYOffset;
var inf = document.getElementById('infoContainer').offsetHeight;
console.log(pos + "   " + inf);
pos = pos - inf - 160;
if (pos > 0)
document.getElementById('rechterBereich').style.top = pos + 'px';
else
document.getElementById('rechterBereich').style.top = '0px';
}


var buildpizzeriaSeite = function(data){
	if(data == 0) {
		$("#infoContainer").html("<h1>Es konnten leider keine Daten zur Pizzeria geladen werden</h1>");
	}
	else {
		$("#infoContainer").html("<img id='pizzarienlogo' src='data:image/jpg;base64," + data.bild + "'><br>\
		<input type='hidden' value='" + data.restaurantID + "'/>" + "<p id='containertitel'>" + data.name + "</p>" + "\
		<img id='haus' src='./images/Haus_-_Vector-Icon.png'/>"  + data.strasse + " " + data.hausnummer + "<br>" + data.plz + " " + data.ort + "<br>\
		<img id='uhr' src='./images/Uhr_-_Vector-Icon.png'/>" + data.oeffnungszeiten[0].tag + " " + data.oeffnungszeiten[0].von + " " + data.oeffnungszeiten[0].bis + "<br>"  + "<br>\
		<img id='schein' src='./images/bezahlart2.png'/> " + "\ Mindestbestellwert: " + data.mindestbestellwert + "<br>\
		Lieferkosten: " + " " + data.lieferkosten);
	}
}
var buildpizzaeriaSeite = function(data){
	if (data == 0) {
		$("#warenkorbContainer").html("<h1>Es konnten leider keine Daten zur Pizzeria geladen werden</h1>");
	}
	else {
		$("#warenkorbContainer").html("Warenkorb");
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
			
		var list;
		if(speisekarte[i].groessen.length == 3)
				list = $("<table id='pizzeriatabelle'> <tr> <th class='pspalte'> </th> <th class='pspalte'> <img id='groesses' src='./images/s.png'/> </th> <th class='pspalte'> <img id='groessem' src='./images/m.png'/> </th> <th class='pspalte'> <img id='groessel' src='./images/l.png'/> </th> </tr>");
		else if(speisekarte[i].groessen.length == 2)
			list = $("<table id='pizzeriatabelle'> <tr> <th class='pspalte'></th> <th class='pspalte'> <img id='groessem' src='./images/m.png'/> </th> <th class='pspalte'> <img id='groessel' src='./images/l.png'/> </th> <th class='pspalte'> </th> </tr>");
		else if(speisekarte[i].groessen.length == 1)
			list = $("<table id='pizzeriatabelle'> <tr> <th class='pspalte'></th> <th class='pspalte'> <img id='groessem' src='./images/m.png'/> </th> <th class='pspalte'> </th> <th class='pspalte'> </th>  </tr>");
		for(var j = 0; j<speisekarte[i].produkte.length; j++){
			var li;
			if(speisekarte[i].groessen.length == 3)
				li = $("<tr> <td> <div class='spaltenname'> " + speisekarte[i].produkte[j].bezeichnung + "</div> \
						<div class='spaltenbezeichnung'> " + speisekarte[i].produkte[j].beschreibung + " </div> </td> \
						<td> <button groesse='klein' produktID='"+ speisekarte[i].produkte[j].produktID + "' class='preisbutton'>  "+ speisekarte[i].produkte[j].preis[0] + " € </button> </td> \
						<td> <button groesse='mittel' produktID='"+ speisekarte[i].produkte[j].produktID + "' class='preisbutton'> "+ speisekarte[i].produkte[j].preis[1] +" € </button> </td> \
						<td> <button groesse='groß' produktID='"+ speisekarte[i].produkte[j].produktID + "' class='preisbutton'> "+ speisekarte[i].produkte[j].preis[2] +" € </button> </td> </tr>");
			else if(speisekarte[i].groessen.length == 2)
				li = $("<tr> <td> <div class='spaltenname'> " + speisekarte[i].produkte[j].bezeichnung + " </div> \
						<div class='spaltenbezeichnung'>" + speisekarte[i].produkte[j].beschreibung + " </div> </td> \
						<td> <button groesse='mittel' produktID='"+ speisekarte[i].produkte[j].produktID + "' class='preisbutton'> "+ speisekarte[i].produkte[j].preis[0] + " € </button> </td> \
						<td> <button groesse='groß' produktID='"+ speisekarte[i].produkte[j].produktID + "' class='preisbutton'> "+ speisekarte[i].produkte[j].preis[1] +" € </button> </td> </tr>");
			else if(speisekarte[i].groessen.length == 1)
				li = $("<tr> <td> <div class='spaltenname'> " + speisekarte[i].produkte[j].bezeichnung + "</div> \
						<div class='spaltenbezeichnung'> " + speisekarte[i].produkte[j].beschreibung + " </div> </td> \
						<td> <button groesse='mittel' produktID='"+ speisekarte[i].produkte[j].produktID + "' class='preisbutton'> "+ speisekarte[i].produkte[j].preis[0] + " € </button> </td> </tr>");

			list.append(li);
			div.append(list);
			}
			div.append("</table>");
			container.append(div);
		}		
		
		$("#pizzerienContainer").tabs();
		
		$(".preisbutton").click(function(){
			addToWarenkorb(this);			
		});
	}
}

function addToWarenkorb(data){
	var produkt;
	
	var preis = data.innerHTML;
	var groesse = data.getAttribute("groesse");
	var produktID = data.getAttribute("produktID");
	for(var i = 0; i<speisekarte.length; i++){
		for(var j = 0; j<speisekarte[i].produkte.length; j++){
			if(speisekarte[i].produkte[j].produktID == produktID){
				produkt = speisekarte[i].produkte[j];
				produkt.preis = preis;
				produkt.groesse = groesse;
				break;
			}
		}
	}
	
	warenkorb.push(produkt);
	showWarenkorb();
}

function showWarenkorb(){

	var ul = $("<ul></ul>");
	
	for(var i = 0; i < warenkorb.length; i++){
		var bezeichnung = warenkorb[i].bezeichnung;
		var groesse = warenkorb[i].groesse;
		var preis = warenkorb[i].preis;
		
		var li = $("<li>" + bezeichnung + " Größe: " + groesse + " Preis: " + preis + "</li>");
		ul.append(li);
	}
		
	$("#showwarenkorb").html(ul);
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