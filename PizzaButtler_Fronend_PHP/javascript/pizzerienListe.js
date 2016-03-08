var rest;
$(document).ready(function(){
	// GET-Parameter
	var plzOrt = parse("plz-ort");
	
	// Rest-Aufruf vorbereiten
	rest = new RestInterface();
	rest.setParameters("GET", "pizzeria?q=" + plzOrt , null, buildPizzerienListe);
	
	if(plzOrt != ""){
		// Rest-Aufruf durchf�hren und Liste bef�llen
		rest.fakeSend("./mock/getPizzerien.json");
	}
	else {
		rest.fakeSend("./mock/null.json");
	}
});

var buildPizzerienListe = function(data){
	if(data == 0) {
		$("#pizzerienContainer").html("<h1>Es gibt in deiner N&auml;he leider keine teilnehmende Pizzeria, tut uns leid!</h1>");
	}
	else {
		// Tabelle an sich
		var table = $("<table class='pizzerienuebersicht'></table>");
		
		// Empfangene Daten durchgehen
		for(var i = 0; i < data.length; i++){
			var offen = hatOffen(data[i].oeffnungszeiten);
			offen = offen ? "Geöffnet" : "Geschlossen";

			var bewertung = "" + Math.round(2*data[i].bewertung)/2;
			if(bewertung.length == 1){
				bewertung += ".0";
			}
			
			// Eine Zeile
			var a = $("<a href='./pizzeria?id=" + data[i].restaurantID + "'></a>");
			var tr = $("<tr data-href='./pizzeria.php?id=" + data[i].restaurantID + "'></tr>");
			tr.addClass ("line");
			// Spalte mit Bild
			var td1 = $("<td></td>");
			td1.addClass("iconspalte");
			var img = "<img class='pizzeriaIcon' id='samplePizzeria1' src='data:image/jpg;base64," + data[i].bild + "' alt='Pizzeria1'>";
			// Spalte mit Textinfos
			var td2 = $("<td></td>");
			var content = "<p class='listParagraph' id='pizzeriaName'>" + data[i].name + "</p>\
					<p class='listParagraph'>" + data[i].strasse + " " + data[i].hausnummer + "</p>\
					<p class='listParagraph'>" + data[i].plz + " " + data[i].ort + "</p>\
					<p class='listParagraph'></p>\
					<p class='listParagraph'>Lieferkosten: " + data[i].lieferkosten + "&#8364</p>\
					<p class='listParagraph'>Mindestbestellwert: " + data[i].mindestbestellwert + "&#8364</p>\
					<p class='listParagraph'></p>\
					<p class='listParagraph'>" + offen + "</p>";
						//Spalte mit Bewertung
            var td3 = $("<td></td>");
            td3.addClass("bewertung");
            var bewertung = "<img class='sterne' src='./images/" + bewertung + "Sterne.png'>";
            
            //Spalte mit Bezahlung
            var td4 = $("<td></td>");
            td4.addClass("bezahlung");
            var bezahlung = "<img class='bezahlart' id='bezahlart1' src='./images/bezahlart1.png'>";
            var bezahlung2 = "<img class='bezahlart' id='bezahlart2' src='./images/bezahlart2.png'>";
            
            
			td1.append(img);
			td2.append(content);
			td3.append(bewertung);
            td4.append(bezahlung);
            td4.append(bezahlung2);
			tr.append(td1);
			tr.append(td2);
            tr.append(td3);
            tr.append(td4);
			table.append(tr);
        }
		$("#pizzerienContainer").html(table);
		
		$(".line").click(function() {
			window.document.location = $(this).data("href");
		});
	}
}

function hatOffen(oeffnungszeiten){
	var date = new Date();
	var day = date.getDay();
	
	var time;
	var hours = date.getHours();
	var minutes = date.getMinutes();
	if(minutes < 10){
		time = hours + "0" + minutes;
	} else {
		time = hours + "" + minutes;
	}
	
	if(time > oeffnungszeiten[day].von &&
		time < oeffnungszeiten[day].bis){
			return true;
		}
	else {
		return false;
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