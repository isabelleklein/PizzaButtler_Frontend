/** Pruefen der Mail-Adresse  **/
function mailPruefen()
{
    var email=document.getElementById("email").value;
	  /**  Pruefung ob eine gueltige Mail-Adresse eingegeben wurde **/
      if(checkGrammatik("^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@"+"[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$", email)==false)
    	  {
    	      fehlerAusgeben("fehlerEmail", "email");
	          return "Das Feld 'Email' entspricht nicht der typischen Form einer Email!\n";
    	  }
      hinweisVerbergen("fehlerEmail", "email");
 
      return ""
}


/** Ausgabe eines Fehlerhinweises je nach betroffenem Feld
 * Parameter fehl: Gibt die ID des Feldes zum entsprechenden Fehlerhinweises mit
 * Parameter feld: Gibt die ID des fehlerhaften Feldes mit.
 *  **/
function fehlerAusgeben(fehl, feld)
{
    document.getElementById("" + fehl).style.display="inline"; //Fehlerhinweis wird angezeigt
    document.getElementById("" + feld).style.background="#852002"; //Fehlerhaftes Feld wird markiert
    document.getElementById("" + feld).style.color="#ffffff"; //Schriftfarbe des fehlerhaften Feldes wird dem neuen Hintergrund angepasst
    document.getElementById("container").style.height="320"; //Pop-Up wird zur Angabe des Fehlers vergrößert
	}

function textEinblenden(fehl)
{
    document.getElementById("" + fehl).style.display="inline"; //Fehlerhinweis wird angezeigt
	}

function textTauschen(fehl1, fehl2)
{
    document.getElementById("" + fehl1).style.display="none"; //Fehlerhinweis wird angezeigt
    document.getElementById("" + fehl2).style.display="inline"; //Fehlerhinweis wird angezeigt
	}

function hinweisVerbergen(fehl, feld)
{
	  document.getElementById("" + fehl).style.display="none"; //Fehlerhinweis wird ausgeblendet
	  document.getElementById("" + feld).style.background="#ffffff"; //Fehlerhaftes Feld wird farblich in Ausgangszustand gebracht
	  document.getElementById("" + feld).style.color="#852002"; //Schriftfarbe wird farblich in Ausgangszustand gebracht
	  document.getElementById("container").style.height="300"; //Die Größe des Pop-Ups wird in Ausgangszustand gebracht
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