var rest;
var speisekarte;
var warenkorb = [];
var aktuellePizza;

$(document).ready(function(){
	// GET-Parameter
	var pizzeriaId = parse("id");
	
	// rest-Aufruf vorbereiten
	rest = new RestInterface();
	rest.setParameters("GET", "restaurant/" + pizzeriaId , null, buildpizzeriaSeite);
	
	if(pizzeriaId !== ""){
		// rest-Aufruf durchfuehren und Liste befuellen
		rest.send("./mock/getRestaurant.json");
		
		// Abrufen der Speisekarte
		rest.setParameters("GET", "restaurant/" + pizzeriaId + "/speisekarte", null, buildSpeisekarte);
		rest.send("./mock/getSpeisekarte.json");
	}
	else {
		rest.fakeSend("./mock/null.json");
	}
	
	showWarenkorb();


});


document.onscroll = function () {
	var pos = window.pageYOffset;
	var inf = document.getElementById('infoContainer').offsetHeight;
	//console.log(pos + "   " + inf);
	pos = pos - inf - 160;
	if (pos > 0)
		document.getElementById('rechterBereich').style.top = pos + 'px';
	else
		document.getElementById('rechterBereich').style.top = '0px';
};


var buildpizzeriaSeite = function(data){
	var date = new Date();
	var day = date.getDay();
	var oeffnungszeit_von = data.oeffnungszeiten[day].von + "";
	oeffnungszeit_von = oeffnungszeit_von.slice(0,2) + ":" + oeffnungszeit_von.slice(2,4);
	var oeffnungszeit_bis = data.oeffnungszeiten[day].bis + "";
	oeffnungszeit_bis = oeffnungszeit_bis.slice(0,2) + ":" + oeffnungszeit_bis.slice(2,4);
	var oeffnungszeit = oeffnungszeit_von + " - " + oeffnungszeit_bis;
	
	if(data == 0) {
		$("#infoContainer").html("<h1>Es konnten leider keine Daten zur Pizzeria geladen werden</h1>");
	}
	else {
		$("#infoContainer").html("<img id='pizzarienlogo' src='data:image/jpg;base64," + data.bild + "'><br>\
		<input type='hidden' value='" + data.restaurantID + "'/>" + "<p id='containertitel'>" + data.name + "</p>" + "\
		<img id='haus' src='./images/Haus_-_Vector-Icon.png'/>"  + "<p class='containerinhalt'>" + data.strasse + " " + data.hausnummer + "<br>" + data.plz + " " + data.ort + "</p>" +"\
		<img id='uhr' src='./images/Uhr_-_Vector-Icon.png'/> " + "<p class='containerinhalt'>" + " " + " Heute geöffnet von " +  oeffnungszeit + "<br>"  + "</p>" + "\
		<img id='schein' src='./images/bezahlart2.png'/> " + "<p class='containerinhalt'>" + "\ Mindestbestellwert: " + data.mindestbestellwert + " €" + "<br>\
		Lieferkosten: " + " " + data.lieferkosten + " €" + "</p>");
	}
	Cookies.set("restaurantID", data.restaurantID);
	Cookies.set("restaurantName", data.name);
	Cookies.set("restaurantStrasse", data.strasse);
	Cookies.set("restaurantHausnummer", data.hausnummer);
	Cookies.set("restaurantPLZ", data.plz);
	Cookies.set("restaurantOrt", data.ort);
	Cookies.set("restaurantOeffnungszeit", data.oeffnungszeit);
	Cookies.set("restaurantMindestbestellwert", data.mindestbestellwert);
	Cookies.set("restaurantLieferkosten", data.lieferkosten);
	
};

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
		speisekarte = data.kategorien;
		
		var container = $("#pizzerienContainer");
		
		var ul = $("<ul></ul>");
		for(var i = 0; i<speisekarte.length; i++){
			var li = $("<li><a href='#tabs-" + i + "'>"+ speisekarte[i].name + "</a></li>");
			ul.append(li);
		}
		container.append(ul);		
		
		for(var i = 0; i<speisekarte.length; i++){
			var div = $("<div id='tabs-" + i + "'></div>");
				
			var list;
			if(speisekarte[i].variante.length == 3)
					list = $("<table id='pizzeriatabelle'> <tr> <th class='pspalte'> </th> <th class='pspalte'> <img id='groesses' src='./images/s.png'/> </th> <th class='pspalte'> <img id='groessem' src='./images/m.png'/> </th> <th class='pspalte'> <img id='groessel' src='./images/l.png'/> </th> </tr>");
			else if(speisekarte[i].variante.length == 2)
				list = $("<table id='pizzeriatabelle'> <tr> <th class='pspalte'></th> <th class='pspalte'> <img id='groessem' src='./images/m.png'/> </th> <th class='pspalte'> <img id='groessel' src='./images/l.png'/> </th> <th class='pspalte'> </th> </tr>");
			else if(speisekarte[i].variante.length == 1)
				list = $("<table id='pizzeriatabelle'> <tr> <th class='pspalte'></th> <th class='pspalte'> <img id='groessem' src='./images/m.png'/> </th> <th class='pspalte'> </th> <th class='pspalte'> </th>  </tr>");
			for(var j = 0; j<speisekarte[i].produkte.length; j++){
				var li;
				if(speisekarte[i].variante.length == 3)
					li = $("<tr> <td> <div class='spaltenname'> " + speisekarte[i].produkte[j].name + "</div> \
							<div class='spaltenbezeichnung'> " + speisekarte[i].produkte[j].beschreibung + " </div> </td> \
							<td> <button groesse='klein' produktID='"+ speisekarte[i].produkte[j].produktID + "' class='preisbutton'>  "+ speisekarte[i].produkte[j].preis[0] + " € </button> </td> \
							<td> <button groesse='mittel' produktID='"+ speisekarte[i].produkte[j].produktID + "' class='preisbutton'> "+ speisekarte[i].produkte[j].preis[1] +" € </button> </td> \
							<td> <button groesse='groß' produktID='"+ speisekarte[i].produkte[j].produktID + "' class='preisbutton'> "+ speisekarte[i].produkte[j].preis[2] +" € </button> </td> </tr>");
				else if(speisekarte[i].variante.length == 2)
					li = $("<tr> <td> <div class='spaltenname'> " + speisekarte[i].produkte[j].name + " </div> \
							<div class='spaltenbezeichnung'>" + speisekarte[i].produkte[j].beschreibung + " </div> </td> \
							<td> <button groesse='mittel' produktID='"+ speisekarte[i].produkte[j].produktID + "' class='preisbutton'> "+ speisekarte[i].produkte[j].preis[0] + " € </button> </td> \
							<td> <button groesse='groß' produktID='"+ speisekarte[i].produkte[j].produktID + "' class='preisbutton'> "+ speisekarte[i].produkte[j].preis[1] +" € </button> </td> </tr>");
				else if(speisekarte[i].variante.length == 1)
					li = $("<tr> <td> <div class='spaltenname'> " + speisekarte[i].produkte[j].name + "</div> \
							<div class='spaltenbezeichnung'> " + speisekarte[i].produkte[j].beschreibung + " </div> </td> \
							<td> <button groesse='mittel' produktID='"+ speisekarte[i].produkte[j].produktID + "' class='preisbutton'> "+ speisekarte[i].produkte[j].preis[0] + " € </button> </td> </tr>");

				list.append(li);
				div.append(list);
			}
			div.append("</table>");
			container.append(div);
		}		
		
		$("#pizzerienContainer").tabs({active: 2});
		
		extraslisten(speisekarte[0].zusatzbelaege);
				
		$(".preisbutton").click(function(){

			$('#overlay').show('slow',	function() {
				$('#extrazutaten_container').fadeIn('slow');
				$('#changeText').html('Dynamischer Inhalt');
			});
			
			aktuellePizza = this;			
		});
	}
}

function waehleExtras(pizza){
	
}

function extraslisten(data){
	var statement = ("<p id='anmerkungenue'> Bitte wähle Deine Extrabeilagen </p> <table>");
	for(var i = 0; i<data.length; i++){
		statement = statement + ("<div class='extra'> <tr> <td> <input type='checkbox' zusatzbelagID='" + data[i].zusatzbelagID + "' \
								name='" + data[i].name + "' preis='" + data[i].preis + "'\
								id='extracheckbox' class='extratabelle'> " + data[i].name + " " + data[i].preis + " € </td> ");
		if(i+1<data.length){
			i++;
			statement = statement +("<td> <input type='checkbox' id='extracheckbox' zusatzbelagID='" + data[i].zusatzbelagID + "' \
									name='" + data[i].name + "' preis='" + data[i].preis + "'\
									class='extratabelle'> " + data[i].name + " " + data[i].preis + " € </td>");
		}
		statement = statement + ("</tr> </div>");
	}
	
	statement = statement + ("</table> <p id='anmerkungentext'> Anmerkungen </p> <textarea id='anmerkungen'> </textarea>");
	
	$('#extrazutaten').html(statement);	
}

function schliessen(){	
	var extraTabelle = $()
	var extras = [];
	
	$(".extratabelle").each(function(x,y){
		if($(this).prop("checked")){
			var extra = {};
			extra.zusatzbelagID = $(this).attr("zusatzbelagID");
			extra.name = $(this).prop("name");
			extra.preis = $(this).attr("preis");
			extras.add(extra);
		}
	});
		
	$('#extrazutaten_container').hide('slow', function() {
	    $('#overlay').fadeOut();          
	});
	
	addToWarenkorb(aktuellePizza, extras);
	aktuellePizza = "";
}	    

function addToWarenkorb(produktButton, zusatzbelaege){
	var produkt = null;
	
	var preis = parseFloat(produktButton.innerHTML);
	var groesse = produktButton.getAttribute("groesse");
	var produktID = produktButton.getAttribute("produktID");
	var vorhanden = false;
	
	// Prüfen, ob das Produkt mit entspr. Zusatzbelägen schon im Warenkorb ist
	warenkorb.forEach(function(produktImWarenkorb){		
		if (produktImWarenkorb.preis == preis && 
			produktImWarenkorb.groesse == groesse && 
			produktImWarenkorb.produktID == produktID &&
			JSON.stringify(produktImWarenkorb.zusatzbelaege) == JSON.stringify(zusatzbelaege)) {
				produktImWarenkorb.anzahl++;
				vorhanden = true;
		}
	});
	
	// Produkt neu zur Speisekarte hinzufügen
	if (!vorhanden){
		for(var i = 0; i<speisekarte.length; i++){
			for(var j = 0; j<speisekarte[i].produkte.length; j++){
				if(speisekarte[i].produkte[j].produktID == produktID){
					// Produkt aus der Speisekarte kopieren und anpassen
					produkt = jQuery.extend({}, speisekarte[i].produkte[j]);
					produkt.preis = preis;
					produkt.groesse = groesse;
					produkt.anzahl = 1;
					produkt.zusatzbelaege = zusatzbelaege;
					break;
				}
			}
		}	
		warenkorb.push(produkt);
	}
	showWarenkorb();
	summieren();
	zurKasse();
}

function showWarenkorb(){
	var ul = $("<ul style='padding-left:15px'></ul>");
	if (Cookies.get("warenkorb") != null) {
		warenkorb = Cookies.get("warenkorb");
		}
	
	for(var i = 0; i < warenkorb.length; i++){
		var name = warenkorb[i].name;
		var groesse = warenkorb[i].groesse;
		var preis = warenkorb[i].preis;
		var kurzgroesse = "";
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
		
		var li = $("<li class='warenkorbelement'>" + anzahl + " " + name + ", " + kurzgroesse + ", " + preis + "€ \
					<button class='hinzufuegen' onclick='hinzufuegen(" + i + ")'>+</button>\
					<button class='reduzieren' onclick='reduzieren(" + i + ")'>-</button>\
					<div class='zusatz'>" + zusatz + "</li></div>");
		ul.append(li);
	}
	
	$("#showwarenkorb").html(ul);
	
	// Kein Warenkorb = kein "Zur Kasse"-Button
	if(warenkorb.length === 0){
		$("#zurKasse").html("");
	}
}

function hinzufuegen(i){
	warenkorb[i].anzahl++;
	showWarenkorb();
	summieren();

}

function reduzieren(i){
	warenkorb[i].anzahl--;
	if (warenkorb[i].anzahl == 0){
		warenkorb.splice(i,1);
	}
	showWarenkorb();
	summieren();

}

function summieren()
{
	var summe = 0;
	for(var i = 0; i < warenkorb.length; i++){
		summe += warenkorb[i].preis * warenkorb[i].anzahl;
		warenkorb[i].zusatzbelaege.forEach(function(belag){
			summe += parseFloat(belag.preis) * warenkorb[i].anzahl;
		});
	}
	$("#summeWarenkorb").html("<p style='margin:0px'>" + "Gesamtpreis: " + summe.toFixed(2) + "€</p>");
}

function zurKasse()
{
	var q = $("<button class = 'zurKasseButton' > Zur Kasse </button>");
	$("#zurKasse").html(q);
	
	$(".zurKasseButton").click(function(){
		var jetzt = new Date();
		var tag = jetzt.getDate();
		if(tag < 10) tag = "0" + tag;
		var monat = jetzt.getMonth()+1;
		if(monat < 10) monat = "0" + monat;
		var jahr = jetzt.getFullYear();
		var stunde = jetzt.getHours();
		var minute = jetzt.getMinutes();
		if(minute < 10) minute = "0" + minute;
		var zeit = (tag + "." + monat + "." + jahr + ", " + stunde + ":" + minute);
		Cookies.set("zeit", zeit);
		Cookies.set("Warenkorb",warenkorb);
		window.location.href = "./delivery.php";
	});
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