$(document).ready(function(){
	// GET-Parameter
	var plzOrt = parse("plz-ort");
	
	// Rest-Aufruf vorbereiten
	var rest = RestInterface;
	rest.setParameters("GET", "pizzeria?q=" + plzOrt , null, buildPizzerienListe);

	// Rest-Aufruf durchführen und Liste befüllen
	rest.fakeSend("http://localhost/mock/getPizzerien.json");
});

var buildPizzerienListe = function(data){
	// Tabelle an sich
	var table = $("<table></table>");
	
	// Empfangene Daten durchgehen
	for(var i = 0; i < data.length; i++){
		// Eine Zeile
		var a = $("<a href='./pizzeria?id=" + data[i].restaurantID + "'></a>");
		var tr = $("<tr data-href='./pizzeria?id=" + data[i].restaurantID + "'></tr>");
		tr.addClass ("line");
		// Spalte mit Bild
		var td1 = $("<td></td>");
		td1.addClass("iconspalte");
		var img = "<img class='pizzeriaIcon' id='samplePizzeria1' src='./images/samplePizzeria1.jpg' alt='Pizzeria1'>";
		// Spalte mit Textinfos
		var td2 = $("<td></td>");
		var content = "<p class='listParagraph' id='pizzeriaName'>" + data[i].name + "</p>\
		    	<p class='listParagraph'>" + data[i].strasse + " " + data[i].hausnummer + "</p>\
		    	<p class='listParagraph'>" + data[i].plz + " " + data[i].ort + "</p>\
		    	<p class='listParagraph'></p>\
		    	<p class='listParagraph'>Lieferkosten: " + data[i].lieferkosten + "&#8364</p>\
		    	<p class='listParagraph'>Mindestbestellwert: " + data[i].mindestbestellwert + "&#8364</p>\
		    	<p class='listParagraph'></p>\
		    	<p class='listParagraph'>" + data[i].oeffnungszeiten + "</p>";
				
		td1.append(img);
		td2.append(content);
		tr.append(td1);
		tr.append(td2);
		table.append(tr);
	}
	$("#pizzerienContainer").html(table);
	
	$(".line").click(function() {
        window.document.location = $(this).data("href");
    });
}

function parse(val) {
    var result = "Not found",
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