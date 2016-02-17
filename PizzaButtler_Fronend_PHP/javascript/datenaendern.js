$(document).ready(function() {
	var $daten = $('#datenaendern');
	var id = 1;

	var rest = RestInterface;
	/** Aktionsinformationen f�r den Absenden-Button **/
	
	$('#datenspeichern').click(function(e) {
		console.log("Abschicken Button wurde geklickt");
		if(true){ //Prüfung, ob Daten so korrekt sind und versendet werden dürfen
			e.preventDefault(); /** cancel form submit **/

			var daten = $daten.serializeObject();
			var userID = localStorage.getItem("userID");

			console.log("Eingegebene Userdaten:");
			console.log(daten);
			console.log(userID);

			if(userID != null) {
				rest.setParameters("PUT", "user/" + userID, daten, null);
				rest.fakeSend("http://localhost/mock/putUser.json");
			}
		}
	});
});



