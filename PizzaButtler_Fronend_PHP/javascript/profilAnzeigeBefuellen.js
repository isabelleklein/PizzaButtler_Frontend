$(document).ready(function() {
	getDaten(1, function(daten) {
		console.log(daten);
		$('#anrede').text(daten.anrede);
		$('#vorname').text(daten.vorname);
		$('#nachname').text(daten.nachname);
		$('#strasse').text(daten.strasse);
		$('#hausnummer').text(daten.hausnummer);
		$('#plz').text(daten.plz);
		$('#ort').text(daten.ort);
		$('#email').text(daten.email);
		$('#geburtsdatum').text(daten.geburtsdatum);
	});
});