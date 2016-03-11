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
	zeiten = zeiten + "\n" + "Sonntag: " + datumAngabe(0, data);
	$('#oeffnungszeiten_data_anz_so').text(zeiten).val(zeiten);
	zeiten = "";
	zeiten = zeiten + "\n" + "Montag: " + datumAngabe(1, data);
	$('#oeffnungszeiten_data_anz_mo').text(zeiten).val(zeiten);
	zeiten = "";
	zeiten = zeiten + "\n" + "Dienstag: " + datumAngabe(2, data);
	$('#oeffnungszeiten_data_anz_di').text(zeiten).val(zeiten);
	zeiten = "";
	zeiten = zeiten + "\n" + "Mittwoch: " + datumAngabe(3, data);
	$('#oeffnungszeiten_data_anz_mi').text(zeiten).val(zeiten);
	zeiten = "";
	zeiten = zeiten + "\n" + "Donnerstag: "+ datumAngabe(4, data);
	$('#oeffnungszeiten_data_anz_do').text(zeiten).val(zeiten);
	zeiten = "";
	zeiten = zeiten + "\n" + "Freitag: " + datumAngabe(5, data);
	$('#oeffnungszeiten_data_anz_fr').text(zeiten).val(zeiten);
	zeiten = "";
	zeiten = zeiten + "\n" + "Samstag: " + datumAngabe(6, data);
	$('#oeffnungszeiten_data_anz_sa').text(zeiten).val(zeiten);
	
	$('#mindestbestellwert_data_anz').text(data.mindestbestellwert + " €").val(data.mindestbestellwert + " €");
	$('#strasse_data_anz').text(data.strasse).val(data.strasse);
	$('#hausnummer_data_anz').text(data.hausnummer).val(data.hausnummer);
	console.log(data);
	$('#plz_data_anz').text(data.plz).val(data.plz);
	$('#ort_data_anz').text(data.ort).val(data.ort);	
	
	$('#lieferkosten_data_anz').text(data.lieferkosten + " €").val(data.lieferkosten + " €");	
	$('#pizzeriaTelefon').text(data.telefonnummer).val(data.telefonnummer);
	
	$('#name_piz_aend').val(data.name);
	$('#strasse_piz_aend').val(data.strasse);
	$('#hausnummer_piz_aend').val(data.hausnummer);
	$('#plz_piz_aend').val(data.plz);
	$('#ort_piz_aend').val(data.ort);
	$('#sonntag_piz_aend').val((data.oeffnungszeiten[0].von + "").slice(0,2) + ":" + (data.oeffnungszeiten[0].von + "").slice(2,4));
	$('#sonntag_piz_aend_bis').val((data.oeffnungszeiten[0].bis + "").slice(0,2) + ":" + (data.oeffnungszeiten[0].bis + "").slice(2,4));
	$('#montag_piz_aend').val((data.oeffnungszeiten[1].von + "").slice(0,2) + ":" + (data.oeffnungszeiten[1].von + "").slice(2,4));
	$('#montag_piz_aend_bis').val((data.oeffnungszeiten[1].bis + "").slice(0,2) + ":" + (data.oeffnungszeiten[1].bis + "").slice(2,4));
	$('#dienstag_piz_aend').val((data.oeffnungszeiten[2].von + "").slice(0,2) + ":" + (data.oeffnungszeiten[2].von + "").slice(2,4));
	$('#dienstag_piz_aend_bis').val((data.oeffnungszeiten[2].bis + "").slice(0,2) + ":" + (data.oeffnungszeiten[2].bis + "").slice(2,4));
	$('#mittwoch_piz_aend').val((data.oeffnungszeiten[3].von + "").slice(0,2) + ":" + (data.oeffnungszeiten[3].von + "").slice(2,4));
	$('#mittwoch_piz_aend_bis').val((data.oeffnungszeiten[3].bis + "").slice(0,2) + ":" + (data.oeffnungszeiten[3].bis + "").slice(2,4));
	$('#donnerstag_piz_aend').val((data.oeffnungszeiten[4].von + "").slice(0,2) + ":" + (data.oeffnungszeiten[4].von + "").slice(2,4));
	$('#donnerstag_piz_aend_bis').val((data.oeffnungszeiten[4].bis + "").slice(0,2) + ":" + (data.oeffnungszeiten[4].bis + "").slice(2,4));
	$('#freitag_piz_aend').val((data.oeffnungszeiten[5].von + "").slice(0,2) + ":" + (data.oeffnungszeiten[5].von + "").slice(2,4));
	$('#freitag_piz_aend_bis').val((data.oeffnungszeiten[5].bis + "").slice(0,2) + ":" + (data.oeffnungszeiten[5].bis + "").slice(2,4));
	$('#samstag_piz_aend').val((data.oeffnungszeiten[6].von + "").slice(0,2) + ":" + (data.oeffnungszeiten[6].von + "").slice(2,4));
	$('#samstag_piz_aend_bis').val((data.oeffnungszeiten[6].bis + "").slice(0,2) + ":" + (data.oeffnungszeiten[6].bis + "").slice(2,4));
	$('#mindestbestellwert_piz_aend').val(data.mindestbestellwert + " €");
	$('#lieferkosten_piz_aend').val(data.lieferkosten + " €");
	$('#telefon_piz_aend').val(data.telefonnummer);
	$('#email_piz_aend').val(data.email);
};

function datumAngabe(tagId, data){
	var oeffnungszeit_von = data.oeffnungszeiten[tagId].von + "";
	oeffnungszeit_von = oeffnungszeit_von.slice(0,2) + ":" + oeffnungszeit_von.slice(2,4);
	var oeffnungszeit_bis = data.oeffnungszeiten[tagId].bis + "";
	oeffnungszeit_bis = oeffnungszeit_bis.slice(0,2) + ":" + oeffnungszeit_bis.slice(2,4);
	var oeffnungszeit = oeffnungszeit_von + " - " + oeffnungszeit_bis;
	return oeffnungszeit;
}

var setClickListener = function(){
	/** Aktionsinformationen f�r den Absenden-Button **/
	
	$('#datenspeichern').click(function(e) {
		if(true){ //Prüfung, ob Daten so korrekt sind und versendet werden dürfen
			e.preventDefault(); /** cancel form submit **/
			var json = JSON.parse(jsonErzeugen());
			//var daten = $('#datenaendern_daten').serializeObject();
			console.log(json);
			var restaurantID = Cookies.get("restaurantID");
			console.log(restaurantID + "");
			if(typeof restaurantID != 'undefined') {
				rest = new RestInterface();
				rest.setParameters("PUT", "pizzeria/" + restaurantID, json, function(json){
					window.location.href = "./user_pizzeria.php"; 
				});
				rest.fakeSend("./mock/putRestaurant.json");
				console.log("durchlaufen");
			}
			else{
				console.log("undefined ID");
			}
		}
	});	
	
function jsonErzeugen(){
	var jsonString = "{";
	jsonString = jsonString.concat("\"name\":\"" + document.getElementById('name_piz_aend').value + "\",");
	jsonString = jsonString.concat("\"oeffnungszeiten\" :[");
	jsonString = jsonString.concat("{\"tag\": \"so\", \"von\": " + document.getElementById('sonntag_piz_aend').value.replace(":","") + ", \"bis\":" + document.getElementById('sonntag_piz_aend_bis').value.replace(":","") + "},");
	jsonString = jsonString.concat("{\"tag\": \"mo\", \"von\": " + document.getElementById('montag_piz_aend').value.replace(":","") + ", \"bis\":" + document.getElementById('montag_piz_aend_bis').value.replace(":","") + "},");
	jsonString = jsonString.concat("{\"tag\": \"di\", \"von\": " + document.getElementById('dienstag_piz_aend').value.replace(":","") + ", \"bis\":" + document.getElementById('dienstag_piz_aend_bis').value.replace(":","") + "},");
	jsonString = jsonString.concat("{\"tag\": \"mi\", \"von\": " + document.getElementById('mittwoch_piz_aend').value.replace(":","") + ", \"bis\":" + document.getElementById('mittwoch_piz_aend_bis').value.replace(":","") + "},");
	jsonString = jsonString.concat("{\"tag\": \"do\", \"von\": " + document.getElementById('donnerstag_piz_aend').value.replace(":","") + ", \"bis\":" + document.getElementById('donnerstag_piz_aend_bis').value.replace(":","") + "},");
	jsonString = jsonString.concat("{\"tag\": \"fr\", \"von\": " + document.getElementById('freitag_piz_aend').value.replace(":","") + ", \"bis\":" + document.getElementById('freitag_piz_aend_bis').value.replace(":","") + "},");
	jsonString = jsonString.concat("{\"tag\": \"sa\", \"von\": " + document.getElementById('samstag_piz_aend').value.replace(":","") + ", \"bis\":" + document.getElementById('samstag_piz_aend_bis').value.replace(":","") + "}");
	jsonString = jsonString.concat("],");
	jsonString = jsonString.concat("\"mindestbestellwert\":\"" + parseFloat(document.getElementById('mindestbestellwert_piz_aend').value)+ "\",");
	jsonString = jsonString.concat("\"strasse\":\"" + document.getElementById('strasse_piz_aend').value+ "\",");
	jsonString = jsonString.concat("\"hausnummer\":\"" + document.getElementById('hausnummer_piz_aend').value+ "\",");
	jsonString = jsonString.concat("\"plz\":\"" + document.getElementById('plz_piz_aend').value+ "\",");
	jsonString = jsonString.concat("\"ort\":\"" + document.getElementById('ort_piz_aend').value+ "\",");
	jsonString = jsonString.concat("\"telefonnummer\":\"" + document.getElementById('telefon_piz_aend').value+ "\",");
	jsonString = jsonString.concat("\"lieferkosten\":\"" + parseFloat(document.getElementById('mindestbestellwert_piz_aend').value));
	jsonString = jsonString.concat("\"}");
	//console.log(jsonString);
	return jsonString;
}
}