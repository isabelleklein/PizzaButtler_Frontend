/** Userdata zum User mit best. ID holen **/
var rest;
$(document).ready(function(){	
	loadData();
	$('#userdatenaendern').click(function(e) {
		$('.maincontent').load("./views/changeuserdata.tpl", function(){
			loadData();
			setClickListener();
		});
	});
});


var loadData = function(){
	var userID = Cookies.get("userID");
	if(typeof userID != 'undefined') {
		rest = new RestInterface();
		rest.setParameters("GET", "user/" + userID, null, callback);
		rest.fakeSend("./mock/getUser.json");
	}
}

var callback = function(data){
	if($('#userAnrede').prop("tagName") == "SELECT") {
		$('#userAnrede').val(data.anrede);
	}
	else {
		$('#userAnrede').text(data.anrede);
	}
	$('#userVorname').text(data.vorname).val(data.vorname);
	$('#userNachname').text(data.nachname).val(data.nachname);
	$('#userStrasse').text(data.strasse).val(data.strasse);
	$('#userHausnummer').text(data.hausnummer).val(data.hausnummer);
	$('#userPlz').text(data.plz).val(data.plz);
	$('#userOrt').text(data.ort).val(data.ort);
	$('#userEmail').text(data.email).val(data.email);
    $('#userTelefon').text(data.telefon).val(data.telefon);
	$('#userGeburtsdatum').text(data.geburtsdatum).val(data.geburtsdatum);	
};

var setClickListener = function(){
	/** Aktionsinformationen f�r den Absenden-Button **/
	
	$('#datenspeichern').click(function(e) {
		if(true){ //Prüfung, ob Daten so korrekt sind und versendet werden dürfen
			e.preventDefault(); /** cancel form submit **/

			var daten = $('#datenaendern').serializeObject();
			var userID = Cookies.get("userID");

			if(typeof userID != 'undefined') {
				rest = new RestInterface()
				rest.setParameters("PUT", "user/" + userID, daten, function(data){
					window.location.href = "./user.php"; 
				});
				rest.fakeSend("./mock/putUser.json");
			}
		}
	});	
}