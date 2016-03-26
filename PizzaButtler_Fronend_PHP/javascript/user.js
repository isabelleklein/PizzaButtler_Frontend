/** Userdata zum User mit best. ID holen **/
var rest;
$(document).ready(function(){	
	var userID = Cookies.get('userID');
	if(typeof userID != 'undefined'){
		loadData();
		$('#userdatenaendern').click(function(e) {
			$('.maincontent').load("./views/changeuserdata.tpl", function(){
				loadData();
				setClickListener();
			});
		});
		$('#userpwaendern').click(function(e) {
			$('.maincontent').load("./views/changeuserpassword.tpl", function(){
				loadData();
				setClickListener();
			});
		});
	}
	
});


var loadData = function(){
	var userID = Cookies.get("userID");
	if(typeof userID != 'undefined') {
		rest = new RestInterface();
		rest.setParameters("GET", "user/" + userID, null, callback_user);
		rest.send("./mock/getUser.json");
	}
}

var callback_user = function(data){
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
	$('#userTelefon').text(data.telefonnummer).val(data.telefonnummer);
	//$('#userGeburtsdatum').text(data.geburtsdatum).val(data.geburtsdatum);	
};

function setClickListener(){
	/** Aktionsinformationen fuer den Absenden-Button **/
	console.log("setClickListener");
	
	$('#userdatenspeichern').click(function(e) {
		e.preventDefault(); /** cancel form submit **/
		//Prüfung, ob Daten so korrekt sind und versendet werden dürfen
		if(checkForm_user()){ 
			var daten = $('#datenaendern').serializeObject();
			var userID = Cookies.get("userID");

			if(typeof userID != 'undefined') {
				rest = new RestInterface()
				rest.setParameters("PUT", "user/" + userID, daten, function(data){
					window.location.href = "./user.php"; 
				});
				rest.send("./mock/putUser.json");
			}
		}
	});
    $('#userpwspeichern').click(function(e) {
		if(true){ //Prüfung, ob Daten so korrekt sind und versendet werden dürfen
			e.preventDefault(); /** cancel form submit **/

			var daten = $('#userpwaendern').serializeObject();
			var userID = Cookies.get("userID");

			if(typeof userID != 'undefined') {
				rest = new RestInterface()
				rest.setParameters("PUT", "user/" + userID, daten, function(data){
					window.location.href = "./user.php"; 
				});
				rest.send("./mock/putUser.json");
			}
		}
	});
}

//Prüfung der Eingabeinformationen
//wird ausschließlich bei klicken des Absenden-Buttons aufgerufen
function checkForm_user(){ 
	var pruefungen = [anredePruefen_user, vornamePruefen_user, nachnamePruefen_user, strassePruefen_user, hausnummerPruefen_user,
					  plzPruefen_user, wohnortPruefen_user, mailPruefen_user, telefonPruefen_user];
    var strFehler='';

	pruefungen.forEach(function(func){
		strFehler += func();
    });
	
    /** Ausgabe/Rueckgabe falls min 1 Fehler aufgetreten ist. 
     * Der Text wird in der Konsole des Browsers ausgegeben. Ansonsten ist er nicht sichtbar
     *   **/
    if (strFehler.length>0) {
    	//Der Text wird fuer entwicklungszwecke in der Konsole des Browsers ausgegeben. Ansonsten ist er nicht sichtbar.
    	console.log("Folgendes Problem wurde festgestellt: \n\n"+strFehler);
    	//Rueckgabe=false, wenn die Pruefung einen Fehler ermittelt hat
		return(false);
    }
    else{
		return(true);
	}
}

/**Pruefen der Anrede **/
function anredePruefen_user(){
	var anrede = document.getElementById("userAnrede").value.trim();  
    if(anrede === "keine" || anrede === ""){
		console.log("anredefehler");
    	fehlerAusgeben_user("fehleruserAnrede", "userAnrede");
		return "Das Feld 'Anrede' ist nicht ausgewählt\n";
	}
    hinweisVerbergen_user("fehleruserAnrede", "userAnrede");
    return "";
}

/** Pruefen des Vornamens  **/
function vornamePruefen_user(){
    var vorname=document.getElementById("userVorname").value.trim();
    if(!new RegExp(/^([A-Za-zÄÖÜäöüß-]){2,25}$/).test(vorname)){
    	fehlerAusgeben_user("fehleruserVorname", "userVorname");
        return "Das Feld 'Vorname' entspricht nicht der typischen Form! Form: nur Buchstaben, mindestens 2 maximal 32 Buchstaben, Umlaute möglich\n";
    }
    hinweisVerbergen_user("fehleruserVorname", "userVorname");
    return "";
}

/** Pruefen des Nachnamens  **/
function nachnamePruefen_user(){
    var nachname = document.getElementById("userNachname").value.trim();
    if(!new RegExp(/^([A-Za-zÄÖÜäöüß-]){3,25}$/).test(nachname)){
		fehlerAusgeben_user("fehleruserName", "userNachname");
      	return "Das Feld 'Nachname' entspricht nicht der typischen Form! Form: nur Buchstaben, mindestens 3 maximal 32 Buchstaben, Umlaute möglich\n";
	}
    hinweisVerbergen_user("fehleruserName", "userNachname");
    return "";
}

/** Pruefung der Strasse **/
function strassePruefen_user(){
	var strasse = document.getElementById("userStrasse").value.trim();
	if(!new RegExp(/^([A-Za-zÄÖÜäöüß]|[- ]){3,60}$/).test(strasse)){
		fehlerAusgeben_user("fehleruserStrasse", "userStrasse");
		return "Das Feld 'Strasse' entspricht nicht der typischen Form!\n";
	}
	hinweisVerbergen_user("fehleruserStrasse", "userStrasse");
	return"";
}

/** Pruefung der hausnummer **/
function hausnummerPruefen_user(){
	var hnr = document.getElementById("userHausnummer").value.trim();
	if(!new RegExp(/^[0-9-_\.]{1,10}[A-Za-z]?$/).test(hnr)){
		fehlerAusgeben_user("fehleruserHnr", "userHausnummer");
	    return "Das Feld 'Hausnummer' entspricht nicht der typischen Form! Form:1-10 Ziffern, 1 Buchstabe\n";
	}
	hinweisVerbergen_user("fehleruserHnr", "userHausnummer");
	return "";
}

/** Pruefung des Wohnorts **/
function wohnortPruefen_user(){
	var wohnort = document.getElementById("userOrt").value.trim();
    if(!new RegExp(/^([A-Za-zÄÖÜäöüß-]){2,60}$/).test(wohnort)){
        fehlerAusgeben_user("fehleruserOrt", "userOrt");
	    return "Das Feld 'Wohnort' entspricht nicht der typischen Form! \n";
    }
    hinweisVerbergen_user("fehleruserOrt", "userOrt");
    return "";
}

/** Pruefung der PLZ **/
function plzPruefen_user(){
  	var plz = document.getElementById("userPlz").value.trim();
      
	/** Pruefung, dass nur Zahlen in der PLZ enthalten sind **/
    if(!new RegExp(/^\d{5}$/).test(plz)){
    	fehlerAusgeben_user("fehleruserPlz", "userPlz");
	    return "Das Feld 'plz' entspricht nicht der typischen Form! Form: 5 Ziffern \n";
    }
    hinweisVerbergen_user("fehleruserPlz", "userPlz"); 
    return "";
}

/** Pruefen der Telefonnummer  **/ 
function telefonPruefen_user(){
	var tel=document.getElementById("userTelefon").value.trim();
	/** Pruefung, dass nur Zahlen in der Tel enthalten sind **/
    if(!new RegExp(/^[0-9-_/\\\.]{5,20}$/).test(tel)){
    	fehlerAusgeben_user("fehleruserTel", "userTelefon");
	    return "Das Feld 'Telefonnummer' entspricht nicht der typischen Form! Form: mindestens 5 maximal 20 Ziffern \n";
    }
    hinweisVerbergen_user("fehleruserTel", "userTelefon"); 
    return "";
}

/** Pruefen der Mail-Adresse  **/
function mailPruefen_user(){
    var email=document.getElementById("userEmail").value.trim();
	/**  Pruefung ob eine gueltige Mail-Adresse eingegeben wurde **/
	// Regex ist der von Stackoverflow, der vorherige hat nicht immer funktioniert
    if(!new RegExp(/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/).test(email)){
    	fehlerAusgeben_user("fehleruserEmail", "userEmail");
	    return "Das Feld 'Email' entspricht nicht der typischen Form einer Email!\n";
    }
    hinweisVerbergen_user("fehleruserEmail", "userEmail");
	return "";
}

/** Ausgabe eines Fehlerhinweises je nach betroffenem Feld
 * Parameter fehl: Gibt die ID des Feldes zum entsprechenden Fehlerhinweises mit
 * Parameter feld: Gibt die ID des fehlerhaften Feldes mit.
 *  **/
function fehlerAusgeben_user(fehl, feld){
    document.getElementById("" + fehl).style.display="inline"; //Fehlerhinweis wird angezeigt
    document.getElementById("" + feld).style.background="#842002"; //Fehlerhaftes Feld wird markiert
    document.getElementById("" + feld).style.color="#ffffff"; //Schriftfarbe des fehlerhaften Feldes wird dem neuen Hintergrund angepasst
    //document.getElementById("container").style.height="320"; //Pop-Up wird zur Angabe des Fehlers vergrößert
}

function hinweisVerbergen_user(fehl, feld){
	document.getElementById("" + fehl).style.display="none"; //Fehlerhinweis wird ausgeblendet
	document.getElementById("" + feld).style.background="#ffffff"; //Fehlerhaftes Feld wird farblich in Ausgangszustand gebracht
	document.getElementById("" + feld).style.color="#842002"; //Schriftfarbe wird farblich in Ausgangszustand gebracht
	// document.getElementById("container").style.height="300"; //Die Größe des Pop-Ups wird in Ausgangszustand gebracht
}

