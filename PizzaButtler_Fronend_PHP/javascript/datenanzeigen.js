/** Userdaten zum User mit best. ID holen **/
$("head").append('<script type="text/javascript" src="../javascript/RestInterface.js"></script>');

$(document).ready(getDaten(function(daten) {
	console.log("Von der REST-Schnittstelle empfangene Userdaten:\n");
	console.log(daten);
	if($('#anrede').prop("tagName") == "SELECT") {
		$('#anrede').val(daten.anrede);
	}
	else {
		$('#anrede').text(daten.anrede);
	}
	$('#vorname').text(daten.vorname).val(daten.vorname);
	$('#nachname').text(daten.nachname).val(daten.nachname);
	$('#strasse').text(daten.strasse).val(daten.strasse);
	$('#hausnummer').text(daten.hausnummer).val(daten.hausnummer);
	$('#plz').text(daten.plz).val(daten.plz);
	$('#ort').text(daten.ort).val(daten.ort);
	$('#email').text(daten.email).val(daten.email);
	$('#geburtsdatum').text(daten.geburtsdatum).val(daten.geburtsdatum);
}));

function getDaten(callback) {
	var rest = RestInterface;
	var userID = localStorage.getItem("userID");
	//if(userID != null) {
		rest.setParameters("GET", "user/" + userID, null, callback);
		rest.fakeSend("http://localhost:63342/PizzaButtler_Frontend/PizzaButtler_Fronend_PHP/mock/getUser.json");
	//}
}

