$(document).ready(function() {
	getDaten(function(daten) {
		console.log(daten);
		document.getElementById('vorname').innerHTML = $('#vorname').val(daten.vorname);
		
	});
});