/** Userdata zum User mit best. pizzerien ID holen **/
var rest;
$(document).ready(function(){	
	loadData();
	$('#datenaendern').click(function(e) {
		$('.maincontent').load("./views/changepizzeriendata.tpl", function(){
			loadData();
			setClickListener();
		});
	});
    $('#pwaendern').click(function(e) {
		$('.maincontent').load("./views/changepizzeriapassword.tpl", function(){
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
		rest.fakeSend("./mock/getRestaurant.json");
	}
}

var callback = function(data){
	$('#name_data_anz').text(data.name).val(data.name);
	$('#beschreibung_data_anz').text(data.beschreibung).val(data.beschreibung);
	var zeiten = "";
	zeiten = zeiten + "\n" + data.oeffnungszeiten[0].tag + " " + data.oeffnungszeiten[0].von + " - " + data.oeffnungszeiten[0].bis;
	$('#oeffnungszeiten_data_anz_so').text(zeiten).val(zeiten);
	zeiten = "";
	zeiten = zeiten + "\n" + data.oeffnungszeiten[1].tag + " " + data.oeffnungszeiten[1].von + " - " + data.oeffnungszeiten[1].bis;
	$('#oeffnungszeiten_data_anz_mo').text(zeiten).val(zeiten);
	zeiten = "";
	zeiten = zeiten + "\n" + data.oeffnungszeiten[2].tag + " " + data.oeffnungszeiten[2].von + " - " + data.oeffnungszeiten[2].bis;
	$('#oeffnungszeiten_data_anz_di').text(zeiten).val(zeiten);
	zeiten = "";
	zeiten = zeiten + "\n" + data.oeffnungszeiten[3].tag + " " + data.oeffnungszeiten[3].von + " - " + data.oeffnungszeiten[3].bis;
	$('#oeffnungszeiten_data_anz_mi').text(zeiten).val(zeiten);
	zeiten = "";
	zeiten = zeiten + "\n" + data.oeffnungszeiten[4].tag + " " + data.oeffnungszeiten[4].von + " - " + data.oeffnungszeiten[4].bis;
	$('#oeffnungszeiten_data_anz_do').text(zeiten).val(zeiten);
	zeiten = "";
	zeiten = zeiten + "\n" + data.oeffnungszeiten[5].tag + " " + data.oeffnungszeiten[5].von + " - " + data.oeffnungszeiten[5].bis;
	$('#oeffnungszeiten_data_anz_fr').text(zeiten).val(zeiten);
	zeiten = "";
	zeiten = zeiten + "\n" + data.oeffnungszeiten[6].tag + " " + data.oeffnungszeiten[6].von + " - " + data.oeffnungszeiten[6].bis;
	$('#oeffnungszeiten_data_anz_sa').text(zeiten).val(zeiten);
	
	$('#mindestbestellwert_data_anz').text(data.mindestbestellwert + " €").val(data.mindestbestellwert + " €");
	$('#strasse_data_anz').text(data.strasse).val(data.strasse);
	$('#hausnummer_data_anz').text(data.hausnummer).val(data.hausnummer);
	console.log(data);
	$('#plz_data_anz').text(data.plz).val(data.plz);
	$('#ort_data_anz').text(data.ort).val(data.ort);	
	
	$('#lieferkosten_data_anz').text(data.lieferkosten + " €").val(data.lieferkosten + " €");	
	$('#pizzeriaTelefon').text(data.telefonnummer).val(data.telefonnummer);	
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