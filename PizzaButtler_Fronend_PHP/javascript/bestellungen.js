/** Javascript für die Funktionalitäten der Statistikseite **/
var rest;

$(document).ready(function() {
	var restaurantID = Cookies.get('restaurantID');
	rest = new RestInterface();
	rest.setParameters("GET", "bestellung/" + restaurantID + "/listrestaurant", null, bestellungenAufrufen);
	rest.send();
	
});

function bestellungenAufrufen(bestellungen){
	bestellungen = bestellungen.bestellung;
	var html = $("<table>\
				<tr>\
					<th>Lieferart</th>\
					<th>Lieferzeitpunkt</th>\
					<th>Name</th>\
					<th>Adresse</th>\
					<th>Rechnungsbetrag</th>\
					<th>Bestellpositionen</th>\
				</tr>\
			</table>");

	var bestellungenHeute = [];
	bestellungen.forEach(function(bestellung){
		if(isToday(bestellung.bestellzeitpunkt)){
			// Namen holen
			var id;
			
			if(bestellung.userID > 0){
				id = bestellung.userID;
				$.getJSON("http://pizzabutlerentwbak.krihi.com/entwicklung/rest/user/" + id, setName);

			}
			else{
				id = bestellung.gastID;
				$.getJSON("http://pizzabutlerentwbak.krihi.com/entwicklung/rest/gast/" + id, setName);

			}


			var tr = $("<tr></tr>");
			var lieferart = $("<td>" + (bestellung.lieferung ? "Lieferung" : "Abholung") + "</td>")
			var lieferzeitpunkt = $("<td>" + bestellung.bestellzeitpunkt.substr(9) + "</td>")
			var name = $("<td><span class='" + id + "'>" + name + "</span></td>")
			var adresse = $("<td>" + bestellung.strasse + " " +
									bestellung.hausnummer + "<br>" +
									bestellung.plz + " " +
									bestellung.ort + "</td>");
			var rechnungsbetrag = $("<td>" + bestellung.rechnungsbetrag + " €" + "</td>")
			var bestellpositionen = $("<td></td>");
			
			tr.append(lieferart);
			tr.append(lieferzeitpunkt);
			tr.append(name);
			tr.append(adresse);
			tr.append(rechnungsbetrag);
			tr.append(bestellpositionen);
			html.append(tr);
		}
	});
	
	$("#bestellungen").html(html);
}

function setName(data){
	if (data.userID > 0)
		id = data.userID;
	else
		id = data.gastID;
		
	$('.' + id).html(data.anrede + " " + data.vorname + " " + data.nachname);
}

function isToday(dateTimeString){
	var date = new Date();
	var todayString = "";
	todayString += date.getFullYear();
	var month = date.getMonth() + 1;
	todayString += (month.toString().length > 1 ? month : "0" + month);
	todayString += (date.getDate().toString().length > 1 ? date.getDate() : "0" + date.getDate());
	
	if(dateTimeString.startsWith(todayString))
		return true;
	return false;
}