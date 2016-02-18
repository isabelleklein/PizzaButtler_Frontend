$(document).ready(function() {
	var restInterface = RestInterface;
	/** Aktionsinformationen f�r den Absenden-Button **/
	
	$('#datenspeichern').click(function(e) {
		if(true){ //Prüfung, ob Daten so korrekt sind und versendet werden dürfen
			e.preventDefault(); /** cancel form submit **/

			var daten = $('#datenaendern').serializeObject();
			var userID = Cookies.get("userID");

			if(typeof userID != 'undefined') {
				restInterface.setParameters("PUT", "user/" + userID, daten, function(data){
					console.log(data);
					window.location.href = "."; // TODO: Funktioniert akt. noch nicht!
				});
				restInterface.fakeSend("http://localhost/mock/putUser.json");
			}
		}
	});	
});