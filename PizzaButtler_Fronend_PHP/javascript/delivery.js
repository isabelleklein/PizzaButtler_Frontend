$(document).ready(function(){
	var userID = Cookies.get('userID');
	var restaurantID = Cookies.get('restaurantID');
    if(typeof userID != 'undefined') {
        document.getElementById("eingeloggt").style.display = "none";
    } 
    else if(typeof restaurantID != 'undefined'){
    	alert("Sie sind als Pizzeria angemeldet. Bitte melden Sie sich mit ihrem Privatkundenaccount an, um die Funktion nutzen zu können.");
    }
    else {
         document.getElementById("eingeloggt").style.display = "";
    }
	
    if($("input[type='radio'][name='lieferart']:checked").val() == "abholung") {
        document.getElementById("delivery_data").style.display = "none";
        document.getElementById("eingeloggt").style.display = "none";
    } else {
        document.getElementById("delivery_data").style.display = "";
        document.getElementById("eingeloggt").style.display = "";
    }	
	
	$("#delivery_next").click(function(){		
		var lieferart ="";
		if($("input[type='radio'][name='lieferart']:checked").val() == "abholung") {
			lieferart = "Abholung";

			// Bei Abholung werden keine weiteren Daten benötigt (bis jetzt) = direkte weiterleitung
			if(checkForm_abholung()) weiterleiten(lieferart);
		} else {
			lieferart = "Lieferung";
			
			// Testen, ob korrekte Daten eingegeben wurden
			if(checkForm_delivery())
				weiterleiten(lieferart);
		}
	});
    
	$("input[type='radio'][name='lieferart']").change(
	    function() {
			if($("input[type='radio'][name='lieferart']:checked").val() == "abholung") {
				document.getElementById("delivery_data").style.display = "none";
				document.getElementById("eingeloggt").style.display = "none";
			} else {
				document.getElementById("delivery_data").style.display = "";
				document.getElementById("eingeloggt").style.display = "";
			}	
		}
   );  
});

function weiterleiten(lieferart){
	var vorname = document.getElementById('userVorname').value
	var nachname = document.getElementById('userNachname').value
	var strasse = document.getElementById('userStrasse').value
	var hausnummer = document.getElementById('userHausnummer').value
	var plz = document.getElementById('userPlz').value
	var ort = document.getElementById('userOrt').value
	var telefon = document.getElementById('userTelefon').value
	var email = document.getElementById('userEmail').value
	
	Cookies.set("lieferart", lieferart);
	Cookies.set("vorname", vorname);
	Cookies.set("nachname", nachname);
	Cookies.set("strasse", strasse);
	Cookies.set("hausnummer", hausnummer);
	Cookies.set("plz", plz);
	Cookies.set("ort", ort);
	Cookies.set("telefon", telefon);
	Cookies.set("email", email);
	
	window.location.href = "./warenkorb.php";	
}

//Prüfung der Eingabeinformationen
//wird ausschließlich bei klicken des Absenden-Buttons aufgerufen
function checkForm_delivery() { 
	var pruefungen = [vornamePruefen_delivery, nachnamePruefen_delivery, strassePruefen_delivery, hausnummerPruefen_delivery,
						plzPruefen_delivery, wohnortPruefen_delivery, mailPruefen_delivery, telefonPruefen_delivery];
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

function checkForm_abholung() { 
	var pruefungen = [mailPruefen_delivery, telefonPruefen_delivery];
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



/** Pruefen des Vornamens  **/
function vornamePruefen_delivery(){
    var vorname = document.getElementById("userVorname").value.trim();
    if(!new RegExp(/^([A-Za-zÄÖÜäöüß-]){2,25}$/).test(vorname)){
		fehlerAusgeben_delivery("fehleruserVorname", "userVorname");
		return "Das Feld 'Vorname' entspricht nicht der typischen Form! Form: nur Buchstaben, mindestens 2 maximal 32 Buchstaben, Umlaute möglich\n";
	}
	hinweisVerbergen("fehlerVorname", "vorname");
	return "";
}

/** Pruefen des Nachnamens  **/
function nachnamePruefen_delivery(){
    var nachname = document.getElementById("userNachname").value.trim()
	if(!new RegExp(/^([A-Za-zÄÖÜäöüß-]){2,25}$/).test(nachname)){
    	fehlerAusgeben_delivery("fehleruserName", "userNachname");
      	return "Das Feld 'Nachname' entspricht nicht der typischen Form! Form: nur Buchstaben, mindestens 3 maximal 32 Buchstaben, Umlaute möglich\n";
	}
    hinweisVerbergen_delivery("fehleruserName", "userNachname");
    return "";
}

/** Pruefung der Strasse **/
function strassePruefen_delivery(){
	var strasse=document.getElementById("userStrasse").value.trim();
	if(!new RegExp(/^([A-Za-zÄÖÜäöüß]|[- ]){3,60}$/).test(strasse)){
		fehlerAusgeben_delivery("fehleruserStrasse", "userStrasse");
	    return "Das Feld 'Strasse' entspricht nicht der typischen Form! Form: nur Buchstaben, maximal 2 Leerzeichen\n";
	}
	hinweisVerbergen_delivery("fehleruserStrasse", "userStrasse");
    return"";
}

/** Pruefung der hausnummer **/
function hausnummerPruefen_delivery(){
	var hnr=document.getElementById("userHausnummer").value;
	if(!new RegExp(/^[0-9-_\.]{1,10}[A-Za-zÄÖÜäöüß]?$/).test(hnr)){
		fehlerAusgeben_delivery("fehleruserHnr", "userHausnummer");
	    return "Das Feld 'Hausnummer' entspricht nicht der typischen Form! Form:1-10 Ziffern, 1 Buchstabe\n";
	}
	hinweisVerbergen_delivery("fehleruserHnr", "userHausnummer");
	return "";
}

/** Pruefung des Wohnorts **/
function wohnortPruefen_delivery(){
	var wohnort=document.getElementById("userOrt").value.trim();
	if(!new RegExp(/^([A-Za-zÄÖÜäöüß-]){2,60}$/).test(wohnort)){
        fehlerAusgeben_delivery("fehleruserOrt", "userOrt");
	    return "Das Feld 'Wohnort' entspricht nicht der typischen Form! \n";
    }
    hinweisVerbergen_delivery("fehleruserOrt", "userOrt");
    return "";
}

/** Pruefung der PLZ **/
function plzPruefen_delivery(){
  	var plz=document.getElementById("userPlz").value.trim();
      
	  /** Pruefung, dass nur Zahlen in der PLZ enthalten sind **/
	if(!new RegExp(/^\d{5}$/).test(plz)){
    	fehlerAusgeben_delivery("fehleruserPlz", "userPlz");
	    return "Das Feld 'plz' entspricht nicht der typischen Form! Form: 5 Ziffern \n";
    }
    hinweisVerbergen_delivery("fehleruserPlz", "userPlz"); 
    return "";
}

/** Pruefen der Telefonnummer  **/ 
function telefonPruefen_delivery(){
    var tel=document.getElementById("userTelefon").value.trim();
	  /** Pruefung, dass nur Zahlen in der Tel enthalten sind **/
	if(!new RegExp(/^[0-9-_/\\\.]{5,20}$/).test(tel)){
    	fehlerAusgeben_delivery("fehleruserTel", "userTelefon");
	    return "Das Feld 'Telefonnummer' entspricht nicht der typischen Form! Form: mindestens 5 maximal 20 Ziffern \n";
    }
    hinweisVerbergen_delivery("fehleruserTel", "userTelefon"); 
    return "";
}

/** Pruefen der Mail-Adresse  **/
function mailPruefen_delivery(){
    var email=document.getElementById("userEmail").value.trim();
	  /**  Pruefung ob eine gueltige Mail-Adresse eingegeben wurde **/
    if(!new RegExp(/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/).test(email)){
    	fehlerAusgeben_delivery("fehleruserEmail", "userEmail");
	    return "Das Feld 'Email' entspricht nicht der typischen Form einer Email!\n";
    }
    hinweisVerbergen_delivery("fehleruserEmail", "userEmail");
	return ""
}

/** Ausgabe eines Fehlerhinweises je nach betroffenem Feld
 * Parameter fehl: Gibt die ID des Feldes zum entsprechenden Fehlerhinweises mit
 * Parameter feld: Gibt die ID des fehlerhaften Feldes mit.
 *  **/
function fehlerAusgeben_delivery(fehl, feld)
{
    document.getElementById("" + fehl).style.display="inline"; //Fehlerhinweis wird angezeigt
    document.getElementById("" + feld).style.background="#842002"; //Fehlerhaftes Feld wird markiert
    document.getElementById("" + feld).style.color="#ffffff"; //Schriftfarbe des fehlerhaften Feldes wird dem neuen Hintergrund angepasst
    //document.getElementById("container").style.height="320"; //Pop-Up wird zur Angabe des Fehlers vergrößert
	}
function hinweisVerbergen_delivery(fehl, feld)
{
	document.getElementById("" + fehl).style.display="none"; //Fehlerhinweis wird ausgeblendet
	document.getElementById("" + feld).style.background="#ffffff"; //Fehlerhaftes Feld wird farblich in Ausgangszustand gebracht
	document.getElementById("" + feld).style.color="#842002"; //Schriftfarbe wird farblich in Ausgangszustand gebracht
	// document.getElementById("container").style.height="300"; //Die Größe des Pop-Ups wird in Ausgangszustand gebracht
}