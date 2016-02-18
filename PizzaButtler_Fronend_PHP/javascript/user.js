/** Userdata zum User mit best. ID holen **/
$(document).ready(function(){	
	loadData();
	$('#datenaendern').click(function(e) {
		$('.content').load("./views/changeuserdata.tpl", function(){
			loadData();
			setClickListener();
		});
	});
});


var loadData = function(){
	var rest = RestInterface;
	var userID = Cookies.get("userID");
	if(typeof userID != 'undefined') {
		rest.setParameters("GET", "user/" + userID, null, callback);
		rest.fakeSend("http://localhost/mock/getUser.json");
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
	$('#userGeburtsdatum').text(data.geburtsdatum).val(data.geburtsdatum);	
};

var setClickListener = function(){
	var restInterface = RestInterface;
	/** Aktionsinformationen f�r den Absenden-Button **/
	
	$('#datenspeichern').click(function(e) {
		if(true){ //Prüfung, ob Daten so korrekt sind und versendet werden dürfen
			e.preventDefault(); /** cancel form submit **/

			var daten = $('#datenaendern').serializeObject();
			var userID = Cookies.get("userID");

			if(typeof userID != 'undefined') {
				restInterface.setParameters("PUT", "user/" + userID, daten, function(data){
					window.location.href = "./user.php"; 
				});
				restInterface.fakeSend("http://localhost/mock/putUser.json");
			}
		}
	});	
}