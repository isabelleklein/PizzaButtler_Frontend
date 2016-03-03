/** Userdata zum User mit best. pizzerien ID holen **/
var rest;
$(document).ready(function(){	
	loadData();
	$('#datenaendern').click(function(e) {
		$('.content').load("./views/changepizzeriendata.tpl", function(){
			loadData();
			setClickListener();
		});
	});
});


var loadData = function(){
	var restaurantID = Cookies.get("restaurantID");
	if(typeof restaurantID != 'undefined') {
		rest = new RestInterface();
		rest.setParameters("GET", "user/" + restaurantID, null, callback);
		rest.fakeSend("http://localhost/mock/getRestaurant.json");
	}
}

var callback = function(data){
	$('#name_data_anz').text(data.name).val(data.name);
	$('#beschreibung_data_anz').text(data.beschreibung).val(data.beschreibung);
	$('#oeffnungszeiten_data_anz').text(data.oeffnungszeiten.mo.von).val(data.oeffnungszeiten.mo.von);
	$('#mindestbestellwert_data_anz').text(data.mindestbestellwert).val(data.mindestbestellwert);
	$('#strasse_data_anz').text(data.strasse).val(data.strasse);
	$('#hausnummer_data_anz').text(data.hausnummer).val(data.hausnummer);
	console.log(data);
	$('#plz_data_anz').text(data.plz).val(data.plz);
	$('#ort_data_anz').text(data.ort).val(data.ort);	
	$('#lieferkosten_data_anz').text(data.lieferkosten).val(data.lieferkosten);	
	$('#email_data_anz').text(data.email).val(data.email);	
};

var setClickListener = function(){
	/** Aktionsinformationen f�r den Absenden-Button **/
	
	$('#datenspeichern').click(function(e) {
		if(true){ //Prüfung, ob Daten so korrekt sind und versendet werden dürfen
			e.preventDefault(); /** cancel form submit **/

			var daten = $('#datenaendern').serializeObject();
			var pizzeriaID = Cookies.get("pizzeriaID");

			if(typeof pizzeriaID != 'undefined') {
				rest = new RestInterface();
				rest.setParameters("PUT", "pizzeria/" + pizzeriaID, daten, function(data){
					window.location.href = "./user_pizzeria.php"; 
				});
				rest.fakeSend("./mock/putRestaurant.json");
			}
		}
	});	
}