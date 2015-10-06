$(document).ready(function() {
	getDaten(1, function(daten) {
		console.log(daten);
		$('#anrede').val(daten.anrede);
		$('#vorname').val(daten.vorname);
		$('#nachname').val(daten.nachname);
		$('#strasse').val(daten.strasse);
		$('#hausnummer').val(daten.hausnummer);
		$('#plz').val(daten.plz);
		$('#ort').val(daten.ort);
		$('#email').val(daten.email);
		$('#telefonnummer').val(daten.telefonnummer);
		
	});
});
