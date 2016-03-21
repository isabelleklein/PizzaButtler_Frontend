$(document).ready(function(){
	var userID = Cookies.get('userID');
    if(typeof userID != 'undefined') {
        document.getElementById("eingeloggt").style.display = "none";
    } else {
         document.getElementById("eingeloggt").style.display = "";
    }
});

$(function() {
    $("#delivery_next").click(function(){
			window.location.href = "./warenkorb.php";
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

//Prüfung der Eingabeinformationen
//wird ausschließlich bei klicken des Absenden-Buttons aufgerufen
function checkForm() 
{ 
	//return true; // NUR DEBUG!!!!!
    var strFehler='';
    
  //Eingabefehler werden nacheinander geprueft. 
  //Dies ist in Ordnung, da bei Fuellung der Felder eine eigene Pruefung gestartet wird.
  //Das Pop-Up-Fenster wird damit bei auftreten einer Vielzahl von Fehlern nicht zu groß

    	strFehler += vornamePruefen();
        if(strFehler.length==0){
        	strFehler += nachnamePruefen();
        	//Wird nach Vorgabe der Fachlichkeit aktuell nicht in der Registrierung benötigt.
        	//if(strFehler.length==0){
	        //	strFehler += datumPruefen();
	        if(strFehler.length==0){
                strFehler += strassePruefen();
                if(strFehler.length==0){
	            	strFehler += hausnummerPruefen();
	                if(strFehler.length==0){
	                   	strFehler += plzPruefen();
                        if(strFehler.length==0){
                            strFehler += wohnortPruefen();
	                        if(strFehler.length==0){
                                strFehler += mailPruefen();
	                            if(strFehler.length==0){
	                               	strFehler += telefonnummerPruefen();
	                                if(strFehler.length==0){
                                        strFehler += passwortPruefen1();
                                        if(strFehler.length==0){
	                                     	strFehler += passwortPruefen2();
		                                    if(strFehler.length==0)
		                                    	strFehler += agbPruefen();
	                                   		}
                                        }
                                 }
                             }
                         }
                     }
                 }
         	}
    		//}
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

/** Pruefen des Vornamens  **/
function vornamePruefen_delivery()
{
      var vorname=document.getElementById("userVorname").value;
      if(checkGrammatik("^[A-Za-zÀ-Üß-ü_]{2,25}$", vorname)==false)
    	  {
    	  fehlerAusgeben_delivery("fehleruserVorname", "userVorname");
          return "Das Feld 'Vorname' entspricht nicht der typischen Form! Form: nur Buchstaben, mindestens 2 maximal 32 Buchstaben, Umlaute möglich\n";
    	  }
      hinweisVerbergen_delivery("fehleruserVorname", "userVorname");
      return "";
}

/** Pruefen des Nachnamens  **/
function nachnamePruefen_delivery()
{
      var nachname=document.getElementById("userNachname").value;
      if(checkGrammatik("^[A-Za-zÀ-Üß-ü_]{3,25}$", nachname)==false)
	  {
    	fehlerAusgeben_delivery("fehleruserName", "userNachname");
      	return "Das Feld 'Nachname' entspricht nicht der typischen Form! Form: nur Buchstaben, mindestens 3 maximal 32 Buchstaben, Umlaute möglich\n";
	  }
      hinweisVerbergen_delivery("fehleruserName", "userNachname");
      return "";
}

/** Pruefung der Strasse **/
function strassePruefen_delivery()
{
	  var strasse=document.getElementById("userStrasse").value;
	  if(checkGrammatik("^([Ss]{1}[t]{1}[r]{1}[\.]{0,1}[ ]{0,1}){0,1}[A-Za-zÀ-Üß-ü_]{2,25}[ ]{0,1}[A-Za-zÀ-Üß-ü_]{0,25}[ ]{0,1}[A-Za-zÀ-Üß-ü_]{0,25}$", strasse)==false)
		  {
		  fehlerAusgeben_delivery("fehleruserStrasse", "userStrasse");
	      	return "Das Feld 'Strasse' entspricht nicht der typischen Form! Form: nur Buchstaben, maximal 2 Leerzeichen\n";
		  }
	  hinweisVerbergen_delivery("fehleruserStrasse", "userStrasse");
      return"";
}

/** Pruefung der hausnummer **/
function hausnummerPruefen_delivery()
{
	  var hnr=document.getElementById("userHausnummer").value;
	  if(checkGrammatik("^[0-9-_\.]{1,4}[a-zA-Z]{0,1}$", hnr)==false)
		  {
		    fehlerAusgeben_delivery("fehleruserHnr", "userHausnummer");
	    	return "Das Feld 'Hausnummer' entspricht nicht der typischen Form! Form:1-10 Ziffern, 1 Buchstabe\n";
		  }
	  hinweisVerbergen_delivery("fehleruserHnr", "userHausnummer");
	  return "";
}

/** Pruefung des Wohnorts **/
function wohnortPruefen_delivery()
{

	var wohnort=document.getElementById("userOrt").value;
          if(checkGrammatik("^[A-Za-zÀ-Üß-ü_]{2,35}[ ]{0,1}[A-Za-zÀ-Üß-ü_]{0,35}[ ]{0,1}[A-Za-zÀ-Üß-ü_]{0,35}$", wohnort)==false)
        	  {
        	  	  fehlerAusgeben_delivery("fehleruserOrt", "userOrt");
	        	  return "Das Feld 'Wohnort' entspricht nicht der typischen Form! \n";
        	  }
          hinweisVerbergen_delivery("fehleruserOrt", "userOrt");
      return "";
}

/** Pruefung der PLZ **/
function plzPruefen_delivery()
{
  	var plz=document.getElementById("userPlz").value;
      
	  /** Pruefung, dass nur Zahlen in der PLZ enthalten sind **/
      if(checkGrammatik("^[0-9]{5,5}$", plz)==false)
    	  {
    	  	  fehlerAusgeben_delivery("fehleruserPlz", "userPlz");
	          return "Das Feld 'plz' entspricht nicht der typischen Form! Form: 5 Ziffern \n";
    	  }
      hinweisVerbergen_delivery("fehleruserPlz", "userPlz"); 
      return "";
}

/** Pruefen der Telefonnummer  **/ 
function telefonPruefen_delivery()
{
    var tel=document.getElementById("userTelefon").value;
	  /** Pruefung, dass nur Zahlen in der Tel enthalten sind **/
      if(checkGrammatik("^[0-9-_\.]{5,20}$", tel)==false)
    	  {
    	      fehlerAusgeben_delivery("fehleruserTel", "userTelefon");
	          return "Das Feld 'Telefonnummer' entspricht nicht der typischen Form! Form: mindestens 5 maximal 20 Ziffern \n";
    	  }
      hinweisVerbergen_delivery("fehleruserTel", "userTelefon"); 
      return "";
}

/** Pruefen der Mail-Adresse  **/
function mailPruefen_delivery()
{
    var email=document.getElementById("userEmail").value;
	  /**  Pruefung ob eine gueltige Mail-Adresse eingegeben wurde **/
      if(checkGrammatik("^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@"+"[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$", email)==false)
    	  {
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