/** Userdata zum User mit best. ID holen **/
$(document).ready(function(){
	var rest = RestInterface;
	var userID = Cookies.get("userID");
	if(userID !== 'undefined') {
		rest.setParameters("GET", "user/" + userID, null, callback);
		rest.fakeSend("http://localhost/mock/getUser.json");
	}
});


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