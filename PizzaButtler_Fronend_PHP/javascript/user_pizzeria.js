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
};

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
	/** Aktionsinformationen fuer den Absenden-Button **/
	
	$('#datenspeichern').click(function(e) {
		if(checkForm_Aendern()){ //Prüfung, ob Daten so korrekt sind und versendet werden dürfen
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
}
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

function checkForm_Aendern()//Prüfung zum Ändern von Daten einer Pizzeria
{
	
	var pruefungen = [name_piz_pruefen, strasse_piz_pruefen, hausnummer_piz_pruefen, plz_piz_pruefen, ort_piz_pruefen,
					  uhrzeit_piz_pruefen("sonntag_piz_aend", "fehlerSonntag_piz_aend"), uhrzeit_piz_pruefen("sonntag_piz_aend_bis", "fehlerSonntag_piz_aend"),
					  uhrzeit_piz_pruefen("montag_piz_aend", "fehlerMontag_piz_aend"), uhrzeit_piz_pruefen("montag_piz_aend_bis", "fehlerMontag_piz_aend"),
					  uhrzeit_piz_pruefen("dienstag_piz_aend", "fehlerDienstag_piz_aend"), uhrzeit_piz_pruefen("dienstag_piz_aend_bis", "fehlerDienstag_piz_aend"),
					  uhrzeit_piz_pruefen("mittwoch_piz_aend", "fehlerMittwoch_piz_aend"), ("mittwoch_piz_aend_bis", "fehlerMittwoch_piz_aend"),
					  uhrzeit_piz_pruefen("donnerstag_piz_aend", "fehlerDonnerstag_piz_aend"), uhrzeit_piz_pruefen("donnerstag_piz_aend_bis", "fehlerDonnerstag_piz_aend"),
					  uhrzeit_piz_pruefen("freitag_piz_aend", "fehlerFreitag_piz_aend"), uhrzeit_piz_pruefen("freitag_piz_aend_bis", "fehlerFreitag_piz_aend"),
					  uhrzeit_piz_pruefen("samstag_piz_aend", "fehlerSamstag_piz_aend"), uhrzeit_piz_pruefen("samstag_piz_aend_bis", "fehlerSamstag_piz_aend"),
					  telefonnummer_piz_pruefen, mail_piz_pruefen];
					  
    var strFehler='';

	pruefungen.forEach(function(func){
		strFehler += func();
		if(!strFehler.empty())return;
    });
	
	
}

function name_piz_pruefen()
{
	var vorname=document.getElementById("name_piz_aend").value;
    if(!new RegExp(/[A-Za-zÀ-Üß-ü_ ]{2,40}/).test(vorname)){
		fehlerAusgeben("fehlerName_piz_aend", "name_piz_aend");
		return "Das Feld 'Pizzerienname' entspricht nicht der typischen Form! Form: nur Buchstaben oder Leerzeichen, mindestens 2 maximal 40 Zeichen, Umlaute möglich\n";
	}
    hinweisVerbergen("fehlerName_piz_aend", "name_piz_aend");
    return "";
}

function strasse_piz_pruefen()
{
	var strasse=document.getElementById("strasse_piz_aend").value;
	if(!new RegExp(/([Ss]{1}[t]{1}[r]{1}[\.]{0,1}[ ]{0,1}){0,1}[A-Za-zÀ-Üß-ü_]{2,25}[ ]{0,1}[A-Za-zÀ-Üß-ü_]{0,25}[ ]{0,1}[A-Za-zÀ-Üß-ü_]{0,25}/).test(strasse)){
		fehlerAusgeben("fehlerStrasse_piz_aend", "strasse_piz_aend");
		return "Das Feld 'Strasse' entspricht nicht der typischen Form! Form: nur Buchstaben, maximal 2 Leerzeichen\n";
	}
	hinweisVerbergen("fehlerStrasse_piz_aend", "strasse_piz_aend");
	return"";
}

function hausnummer_piz_pruefen()
{
	var hnr=document.getElementById("hausnummer_piz_aend").value;
	if(!new RegExp(/[0-9-_\.]{1,4}[a-zA-Z]{0,1}/).test(hnr)){
		fehlerAusgeben("fehlerHausnummer_piz_aend", "hausnummer_piz_aend");
		return "Das Feld 'Hausnummer' entspricht nicht der typischen Form! Form:1-10 Ziffern, 1 Buchstabe\n";
	}
	hinweisVerbergen("fehlerHausnummer_piz_aend", "hausnummer_piz_aend");
	return "";
}

function plz_piz_pruefen()
{
	var plz=document.getElementById("plz_piz_aend").value;
    
	  /** Pruefung, dass nur Zahlen in der PLZ enthalten sind **/
    if(!new RegExp(/[0-9]{5,5}/).test(plz)){
  	  	fehlerAusgeben("fehlerPlz_piz_aend", "plz_piz_aend");
	    return "Das Feld 'plz' entspricht nicht der typischen Form! Form: 5 Ziffern \n";
  	}
		hinweisVerbergen("fehlerPlz_piz_aend", "plz_piz_aend"); 
		return "";
	}

function ort_piz_pruefen()
{

	var wohnort=document.getElementById("ort_piz_aend").value;
    if(!new RegExp(/[A-Za-zÀ-Üß-ü_]{2,35}[ ]{0,1}[A-Za-zÀ-Üß-ü_]{0,35}[ ]{0,1}[A-Za-zÀ-Üß-ü_]{0,35}/).test(wohnort)) {
        fehlerAusgeben("fehlerOrt_piz_aend", "ort_piz_aend");
	    return "Das Feld 'Wohnort' entspricht nicht der typischen Form! \n";
    }
    hinweisVerbergen("fehlerOrt_piz_aend", "ort_piz_aend");
    return "";
}

function telefonnummer_piz_pruefen()
{
    var tel=document.getElementById("telefon_piz_aend").value;
	  /** Pruefung, dass nur Zahlen in der Tel enthalten sind **/
    if(!new RegExp(/[0-9-_\.]{5,20}/).test(tel)){
    	fehlerAusgeben("fehlerTel_piz_aend", "telefon_piz_aend");
	    return "Das Feld 'Telefonnummer' entspricht nicht der typischen Form! Form: mindestens 5 maximal 20 Ziffern \n";
	}
    hinweisVerbergen("fehlerTel_piz_aend", "telefon_piz_aend"); 
    return "";
}

function mail_piz_pruefen()
{
    var email=document.getElementById("email_piz_aend").value;
	/**  Pruefung ob eine gueltige Mail-Adresse eingegeben wurde **/
    if(!new RegExp(/[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@"+"[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})/).test(email)){
    	fehlerAusgeben("fehlerEmail_piz_aend", "email_piz_aend");
	    return "Das Feld 'Email' entspricht nicht der typischen Form einer Email!\n";
    }
    hinweisVerbergen("fehlerEmail_piz_aend", "email_piz_aend");
 
    return ""
}

function uhrzeit_piz_pruefen(tag, fehler_tag)
{
	var tage = "" + tag;
	var fehl = "" + fehler_tag;
	var zeit=document.getElementById(tage).value;
	  /**  Pruefung ob eine gueltige Mail-Adresse eingegeben wurde **/
    if(!new RegExp(/([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]/).test(zeit)){
  	    fehlerAusgeben(fehl, tage);
		return "Die Uhrzeit entspricht nicht der typischen Form einer Uhrzeit!\n";
  	}
    hinweisVerbergen(fehl, tage);

    return ""
}


function fehlerAusgeben(fehl, feld)
{
    document.getElementById("" + fehl).style.display="inline"; //Fehlerhinweis wird angezeigt
    document.getElementById("" + feld).style.background="#842002"; //Fehlerhaftes Feld wird markiert
    document.getElementById("" + feld).style.color="#ffffff"; //Schriftfarbe des fehlerhaften Feldes wird dem neuen Hintergrund angepasst
    //document.getElementById("container").style.height="320"; //Pop-Up wird zur Angabe des Fehlers vergrößert
}
function hinweisVerbergen(fehl, feld)
{
	  document.getElementById("" + fehl).style.display="none"; //Fehlerhinweis wird ausgeblendet
	  document.getElementById("" + feld).style.background="#ffffff"; //Fehlerhaftes Feld wird farblich in Ausgangszustand gebracht
	  document.getElementById("" + feld).style.color="#842002"; //Schriftfarbe wird farblich in Ausgangszustand gebracht
	 // document.getElementById("container").style.height="300"; //Die Größe des Pop-Ups wird in Ausgangszustand gebracht
	}
