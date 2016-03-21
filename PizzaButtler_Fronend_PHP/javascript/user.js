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
    $('#userpwaendern').click(function(e) {
		$('.maincontent').load("./views/changeuserpassword.tpl", function(){
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
	/** Aktionsinformationen fuer den Absenden-Button **/
	
	$('#userdatenspeichern').click(function(e) {
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
				rest.fakeSend("./mock/putUser.json");
			}
		}
	});
}

//Prüfung der Eingabeinformationen
//wird ausschließlich bei klicken des Absenden-Buttons aufgerufen
function checkForm() 
{ 
	//return true; // NUR DEBUG!!!!!
    var strFehler='';
    
  //Eingabefehler werden nacheinander geprueft. 
  //Dies ist in Ordnung, da bei Fuellung der Felder eine eigene Pruefung gestartet wird.
  //Das Pop-Up-Fenster wird damit bei auftreten einer Vielzahl von Fehlern nicht zu groß
    strFehler += anredePruefen_user();
    if(strFehler.length==0){
    	strFehler += vornamePruefen_user();
        if(strFehler.length==0){
        	strFehler += nachnamePruefen_user();
        	//Wird nach Vorgabe der Fachlichkeit aktuell nicht in der Registrierung benötigt.
        	//if(strFehler.length==0){
	        //	strFehler += datumPruefen();
	            if(strFehler.length==0){
	            	strFehler += strassePruefen_user();
	                if(strFehler.length==0){
	                	strFehler += hausnummerPruefen_user();
	                    if(strFehler.length==0){
	                    	strFehler += plzPruefen_user();
	                        if(strFehler.length==0){
	                        	strFehler += wohnortPruefen_user();
	                            if(strFehler.length==0){
	                            	strFehler += mailPruefen_user();
	                                if(strFehler.length==0){
	                                	strFehler += telefonPruefen_user();
	                                }
	                            }
	                        }
	                    }
	            	}
        		//}
        	}
    	}
    	
    
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
function anredePruefen_user()
{
	var anrede = document.getElementById("userAnrede").value;  
    if(anrede=="keine") //Der Wert bei Vorbelegung "Anrede" entspricht "keine"
	{
    	fehlerAusgeben_user("fehleruserAnrede", "userAnrede");
		return "Das Feld 'Anrede' ist nicht ausgewählt\n";
	}
    hinweisVerbergen_user("fehleruserAnrede", "userAnrede");
    return "";
}

/** Pruefen des Vornamens  **/
function vornamePruefen_user()
{
      var vorname=document.getElementById("userVorname").value;
      if(checkGrammatik("^[A-Za-zÀ-Üß-ü_]{2,25}$", vorname)==false)
    	  {
    	  fehlerAusgeben_user("fehleruserVorname", "userVorname");
          return "Das Feld 'Vorname' entspricht nicht der typischen Form! Form: nur Buchstaben, mindestens 2 maximal 32 Buchstaben, Umlaute möglich\n";
    	  }
      hinweisVerbergen_user("fehleruserVorname", "userVorname");
      return "";
}

/** Pruefen des Nachnamens  **/
function nachnamePruefen_user()
{
      var nachname=document.getElementById("userNachname").value;
      if(checkGrammatik("^[A-Za-zÀ-Üß-ü_]{3,25}$", nachname)==false)
	  {
    	fehlerAusgeben_user("fehleruserName", "userNachname");
      	return "Das Feld 'Nachname' entspricht nicht der typischen Form! Form: nur Buchstaben, mindestens 3 maximal 32 Buchstaben, Umlaute möglich\n";
	  }
      hinweisVerbergen_user("fehleruserName", "userNachname");
      return "";
}

/** Pruefung der Strasse **/
function strassePruefen_user()
{
	  var strasse=document.getElementById("userStrasse").value;
	  if(checkGrammatik("^([Ss]{1}[t]{1}[r]{1}[\.]{0,1}[ ]{0,1}){0,1}[A-Za-zÀ-Üß-ü_]{2,25}[ ]{0,1}[A-Za-zÀ-Üß-ü_]{0,25}[ ]{0,1}[A-Za-zÀ-Üß-ü_]{0,25}$", strasse)==false)
		  {
		  fehlerAusgeben_user("fehleruserStrasse", "userStrasse");
	      	return "Das Feld 'Strasse' entspricht nicht der typischen Form! Form: nur Buchstaben, maximal 2 Leerzeichen\n";
		  }
	  hinweisVerbergen_user("fehleruserStrasse", "userStrasse");
      return"";
}

/** Pruefung der hausnummer **/
function hausnummerPruefen_user()
{
	  var hnr=document.getElementById("userHausnummer").value;
	  if(checkGrammatik("^[0-9-_\.]{1,4}[a-zA-Z]{0,1}$", hnr)==false)
		  {
		    fehlerAusgeben_user("fehleruserHnr", "userHausnummer");
	    	return "Das Feld 'Hausnummer' entspricht nicht der typischen Form! Form:1-10 Ziffern, 1 Buchstabe\n";
		  }
	  hinweisVerbergen_user("fehleruserHnr", "userHausnummer");
	  return "";
}

/** Pruefung des Wohnorts **/
function wohnortPruefen_user()
{

	var wohnort=document.getElementById("userOrt").value;
          if(checkGrammatik("^[A-Za-zÀ-Üß-ü_]{2,35}[ ]{0,1}[A-Za-zÀ-Üß-ü_]{0,35}[ ]{0,1}[A-Za-zÀ-Üß-ü_]{0,35}$", wohnort)==false)
        	  {
        	  	  fehlerAusgeben_user("fehleruserOrt", "userOrt");
	        	  return "Das Feld 'Wohnort' entspricht nicht der typischen Form! \n";
        	  }
          hinweisVerbergen_user("fehleruserOrt", "userOrt");
      return "";
}

/** Pruefung der PLZ **/
function plzPruefen_user()
{
  	var plz=document.getElementById("userPlz").value;
      
	  /** Pruefung, dass nur Zahlen in der PLZ enthalten sind **/
      if(checkGrammatik("^[0-9]{5,5}$", plz)==false)
    	  {
    	  	  fehlerAusgeben_user("fehleruserPlz", "userPlz");
	          return "Das Feld 'plz' entspricht nicht der typischen Form! Form: 5 Ziffern \n";
    	  }
      hinweisVerbergen_user("fehleruserPlz", "userPlz"); 
      return "";
}

/** Pruefen der Telefonnummer  **/ 
function telefonPruefen_user()
{
    var tel=document.getElementById("userTelefon").value;
	  /** Pruefung, dass nur Zahlen in der Tel enthalten sind **/
      if(checkGrammatik("^[0-9-_\.]{5,20}$", tel)==false)
    	  {
    	      fehlerAusgeben_user("fehleruserTel", "userTelefon");
	          return "Das Feld 'Telefonnummer' entspricht nicht der typischen Form! Form: mindestens 5 maximal 20 Ziffern \n";
    	  }
      hinweisVerbergen_user("fehleruserTel", "userTelefon"); 
      return "";
}

/** Pruefen der Mail-Adresse  **/
function mailPruefen_user()
{
    var email=document.getElementById("userEmail").value;
	  /**  Pruefung ob eine gueltige Mail-Adresse eingegeben wurde **/
      if(checkGrammatik("^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@"+"[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$", email)==false)
    	  {
    	      fehlerAusgeben_user("fehleruserEmail", "userEmail");
	          return "Das Feld 'Email' entspricht nicht der typischen Form einer Email!\n";
    	  }
      hinweisVerbergen_user("fehleruserEmail", "userEmail");
 
      return ""
}

/** Ausgabe eines Fehlerhinweises je nach betroffenem Feld
 * Parameter fehl: Gibt die ID des Feldes zum entsprechenden Fehlerhinweises mit
 * Parameter feld: Gibt die ID des fehlerhaften Feldes mit.
 *  **/
function fehlerAusgeben_user(fehl, feld)
{
    document.getElementById("" + fehl).style.display="inline"; //Fehlerhinweis wird angezeigt
    document.getElementById("" + feld).style.background="#842002"; //Fehlerhaftes Feld wird markiert
    document.getElementById("" + feld).style.color="#ffffff"; //Schriftfarbe des fehlerhaften Feldes wird dem neuen Hintergrund angepasst
    //document.getElementById("container").style.height="320"; //Pop-Up wird zur Angabe des Fehlers vergrößert
	}
function hinweisVerbergen_user(fehl, feld)
{
	  document.getElementById("" + fehl).style.display="none"; //Fehlerhinweis wird ausgeblendet
	  document.getElementById("" + feld).style.background="#ffffff"; //Fehlerhaftes Feld wird farblich in Ausgangszustand gebracht
	  document.getElementById("" + feld).style.color="#842002"; //Schriftfarbe wird farblich in Ausgangszustand gebracht
	 // document.getElementById("container").style.height="300"; //Die Größe des Pop-Ups wird in Ausgangszustand gebracht
	}

/** Pruefung auf korrektheit nach der Gramattik, welche fuer die Eingabefelder gueltig ist  
 *  Wird bei jeder Pruefung (Vorname, Nachname, Geburtstag, Strasse, Hausnummer, PLZ, Ort, Email, Telefonnummer, Passwort) ausgefuehrt**/
//Die jeweilige Gramattik wird als Parameter uebergeben
//"feld" liefert das zu ueberpruefende feld mit
function checkGrammatik(patter, feld)
{
	var strReg = "" + patter;
	var regex = new RegExp(strReg);
	if(regex.test(feld)==false)
	{
	    return false;
	}
	return true;
}