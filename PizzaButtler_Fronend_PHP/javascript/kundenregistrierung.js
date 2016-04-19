/**
 * @author Dominik Terlau, Isabelle Klein
 * @Version 2.1
 */

//Prüfung der Eingabeinformationen
//wird ausschließlich bei klicken des Absenden-Buttons aufgerufen
function checkForm(){ 
	var pruefungen = [anredePruefen, vornamePruefen, nachnamePruefen, strassePruefen, hausnummerPruefen, plzPruefen, 
						wohnortPruefen, mailPruefen, telefonnummerPruefen, passwortPruefen1, passwortPruefen2, agbPruefen];
    var strFehler='';

	try{
		pruefungen.forEach(function(func){
			strFehler += func();
			if(strFehler !== '') throw {};
		});
	} catch(e){}
			
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
function anredePruefen(){
	var anrede = document.getElementById("anrede").value.trim();  
    if(anrede === "keine" || anrede === ""){
    	fehlerAusgeben("fehlerAnrede", "anrede");
		return "Das Feld 'Anrede' ist nicht ausgewählt\n";
	}
    hinweisVerbergen("fehlerAnrede", "anrede");
    return "";
}

/** Pruefen des Vornamens  **/
function vornamePruefen(){
	var vorname = document.getElementById("vorname").value.trim();
    if(!new RegExp(/^([A-Za-zÄÖÜäöüß\-\ ]){2,25}$/).test(vorname)){
		fehlerAusgeben("fehlerVorname", "vorname");
		return "Das Feld 'Vorname' entspricht nicht der typischen Form! Form: nur Buchstaben, mindestens 2 maximal 32 Buchstaben, Umlaute möglich\n";
	}
	hinweisVerbergen("fehlerVorname", "vorname");
	return "";
}

/** Pruefen des Nachnamens  **/
function nachnamePruefen(){
	var nachname=document.getElementById("nachname").value.trim();
	if(!new RegExp(/^([A-Za-zÄÖÜäöüß\-\ ]){2,25}$/).test(nachname)){
		fehlerAusgeben("fehlerName", "nachname");
      	return "Das Feld 'Nachname' entspricht nicht der typischen Form! Form: nur Buchstaben, mindestens 3 maximal 32 Buchstaben, Umlaute möglich\n";
	}
	hinweisVerbergen("fehlerName", "nachname");
	return "";
}

/** Pruefung der Strasse **/
function strassePruefen(){
	var strasse=document.getElementById("strasse").value.trim();
	if(!new RegExp(/^([A-Za-zÄÖÜäöüß]|[- ]){3,60}$/).test(strasse)){
		fehlerAusgeben("fehlerStrasse", "strasse");
		return "Das Feld 'Strasse' entspricht nicht der typischen Form! Form: nur Buchstaben, maximal 2 Leerzeichen\n";
	}
	hinweisVerbergen("fehlerStrasse", "strasse");
	return"";
}

/** Pruefung der hausnummer **/
function hausnummerPruefen(){
	var hnr=document.getElementById("hausnummer").value.trim();
	if(!new RegExp(/^[0-9-_\.]{1,10}[A-Za-zÄÖÜäöüß]?$/).test(hnr)){
		fehlerAusgeben("fehlerHnr", "hausnummer");
		return "Das Feld 'Hausnummer' entspricht nicht der typischen Form! Form:1-10 Ziffern, 1 Buchstabe\n";
	}
	hinweisVerbergen("fehlerHnr", "hausnummer");
	return "";
}

/** Pruefung des Wohnorts **/
function wohnortPruefen(){
	var wohnort=document.getElementById("ort").value.trim();
	if(!new RegExp(/^([A-Za-zÄÖÜäöüß-]){2,60}$/).test(wohnort)){
		fehlerAusgeben("fehlerOrt", "ort");
		return "Das Feld 'Wohnort' entspricht nicht der typischen Form! \n";
	}
	hinweisVerbergen("fehlerOrt", "ort");
	return "";
}

/** Pruefung der PLZ **/
function plzPruefen(){
  	var plz=document.getElementById("plz").value.trim();
      
	/** Pruefung, dass nur Zahlen in der PLZ enthalten sind **/
	if(!new RegExp(/^\d{5}$/).test(plz)){
		fehlerAusgeben("fehlerPlz", "plz");
		return "Das Feld 'plz' entspricht nicht der typischen Form! Form: 5 Ziffern \n";
	}
	hinweisVerbergen("fehlerPlz", "plz"); 
	return "";
}

/** Pruefen der Telefonnummer  **/ 
function telefonnummerPruefen(){
    var tel=document.getElementById("telefonnummer").value.trim();
	/** Pruefung, dass nur Zahlen in der Tel enthalten sind **/
	if(!new RegExp(/^[0-9-_/\\\.]{5,20}$/).test(tel)){
		fehlerAusgeben("fehlerTel", "telefonnummer");
		return "Das Feld 'Telefonnummer' entspricht nicht der typischen Form! Form: mindestens 5 maximal 20 Ziffern \n";
	}
	hinweisVerbergen("fehlerTel", "telefonnummer"); 
	return "";
}	

/** Pruefen der Mail-Adresse  **/
function mailPruefen(){
    var email=document.getElementById("email").value.trim();
	/**  Pruefung ob eine gueltige Mail-Adresse eingegeben wurde **/
    if(!new RegExp(/^[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?$/).test(email)){
		fehlerAusgeben("fehlerEmail", "email");
		return "Das Feld 'Email' entspricht nicht der typischen Form einer Email!\n";
	}
	hinweisVerbergen("fehlerEmail", "email");
	return ""
}

/** Pruefung des angegebenen Datums 
 * Wird nach der Vorgabe durch die Fachlichkeit bei der Registrierung nicht vom Anwender verlangt**/
/**
function datumPruefen()
{
	var datum=document.getElementById("datepicker").value.trim();
	if(!new RegExp("^[0-9]{2,2}[-]{1,1}[0-9]{2,2}[-]{1,1}[0-9]{4,4}$").test(datum))
	{
		fehlerAusgeben("fehlerDat", "datepicker");
	 return "Das Feld Datum wurde nicht korrekt ausgefuellt!";
	}
	hinweisVerbergen("fehlerDat", "datepicker");
	return"";
}
**/

/** Pruefung, ob das erste Passworter den Vorgaben entspricht**/      
function passwortPruefen1(){
    var pw1=document.getElementById("passwort").value;
	/**  Pruefung ob sicheres Passwort eingegeben wurde **/
	if(!new RegExp(/^.{8,12}$/).test(pw1)){
		fehlerAusgeben("fehlerPw_1", "passwort");
		return "Das Feld 'Passwort' hat nicht die erforderliche Sicherheit! Bitte mind. 8 stelliges Passwort verwenden\n";
	}
	hinweisVerbergen("fehlerPw_1", "passwort");
	return "";
}
/** Pruefung, ob das zweite Passwort mit dem ersten ueberreinstimmt **/      
function passwortPruefen2(){
    var pw1 = document.getElementById("passwort").value;  
    var pw2 = document.getElementById("pw2").value;
	if(pw2 != pw1){
    	hinweisVerbergen("fehlerPw_1", "passwort"); 
    	fehlerAusgeben("fehlerPw_2", "pw2");
	  	return "Die Passwörter stimmen nicht ueberein!\n";
	}
	hinweisVerbergen("fehlerPw_1", "passwort");  	
	hinweisVerbergen("fehlerPw_2", "pw2"); 
	return "";
}

/** Pruefung ob AGBs angenommen wurden **/
function agbPruefen(){
	if(document.getElementById("agb").checked == false){
		fehlerAusgeben("fehlerAgb", "agb");
		return "Sie muessen die AGB und die Datenschutzbestimmungen akzeptieren"
	}
	hinweisVerbergen("fehlerAgb", "agb");
	return "";
}

/** Ausgabe eines Fehlerhinweises je nach betroffenem Feld
 * Parameter fehl: Gibt die ID des Feldes zum entsprechenden Fehlerhinweises mit
 * Parameter feld: Gibt die ID des fehlerhaften Feldes mit.
 *  **/
function fehlerAusgeben(fehl, feld){
    document.getElementById("" + fehl).style.display="inline"; //Fehlerhinweis wird angezeigt
    document.getElementById("" + feld).style.background="#842002"; //Fehlerhaftes Feld wird markiert
    document.getElementById("" + feld).style.color="#ffffff"; //Schriftfarbe des fehlerhaften Feldes wird dem neuen Hintergrund angepasst
    //document.getElementById("container").style.height="320"; //Pop-Up wird zur Angabe des Fehlers vergrößert
}

function hinweisVerbergen(fehl, feld){
	  document.getElementById("" + fehl).style.display="none"; //Fehlerhinweis wird ausgeblendet
	  document.getElementById("" + feld).style.background="#ffffff"; //Fehlerhaftes Feld wird farblich in Ausgangszustand gebracht
	  document.getElementById("" + feld).style.color="#842002"; //Schriftfarbe wird farblich in Ausgangszustand gebracht
	 // document.getElementById("container").style.height="300"; //Die Größe des Pop-Ups wird in Ausgangszustand gebracht
}