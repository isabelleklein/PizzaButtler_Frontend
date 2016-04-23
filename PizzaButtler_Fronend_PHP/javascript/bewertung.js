/**
 * @author Dominik Terlau
 * @Version 2.1
 */
var rest;

/** Übermittlung der eingegebenen Daten an das Backend **/
$(document).ready(function() {
	var restaurantID = parse("Pizzeria");
	var bestellungID = parse("Bestellung");
	var bewUserID = parse("User");
	
	rest = new RestInterface();
	rest.setParameters("GET", "restaurant/" + restaurantID, null, getRestaurant);
	rest.send("./mock/postUser.json");
	
	
	// Wenn man die Maus auf einem Stern hat, diesen und alle Sterne davor erhellen
    $(".stern").mouseover(function(){
        // Nummer des aktuellen Sterns herausfinden (in der id gespeichert)
        var nummer = parseInt($(this).attr('id'));

        // Alle Sterne bis zum aktuellen hell machen
        for(var i = nummer; i > 0; i--){
            $("#"+ i).attr('src', "./images/hellerStern.png");
        }
    })

    // Maus vom Stern herunter genommen
    .mouseout(function(){
        // Alle Sterne wieder verdunkeln
        for(var i = 1; i < $(".stern").length + 1; i++){
            $("#" + i).attr('src', "./images/dunklerStern.png");
        }
    })

    // Angeklickt -> Bewertung abgeben
    .click(function(){
        // Nummer = Bewertung des aktuellen Sterns herausfinden (in der id gespeichert)
        var bewertung = parseInt($(this).attr('id'));

		var post = {};
		post.restaurantID = parseInt(restaurantID);
		post.wertung = parseInt(bewertung);
		post.bestellungID = parseInt(bestellungID);
		post.userID = parseInt(bewUserID);
		post.beschreibung = "";
	
        rest = new RestInterface();
		rest.setParameters("POST", "bewertung", post, bewertungErfolgreich);
		rest.send();
    });
});

function bewertungErfolgreich(){
	alert("Danke für deine Bewertung!");
    window.location = "./index.php";
}

function getRestaurant(data){
	$("#pizzeria").html(data.name);
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

