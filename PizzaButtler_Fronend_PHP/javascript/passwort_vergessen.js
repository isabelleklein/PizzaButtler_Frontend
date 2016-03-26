/** Pruefen der Mail-Adresse  **/
function mailPruefen_pwvergessen(){
    var email=document.getElementById("email_pwvergessen").value;
	  /**  Pruefung ob eine gueltige Mail-Adresse eingegeben wurde **/
    if(!new RegExp(/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/).test(email)){
		fehlerAusgeben("fehlerEmail", "email_pwvergessen");
		return "Das Feld 'Email' entspricht nicht der typischen Form einer Email!\n";
	}
	hinweisVerbergen("fehlerEmail", "email_pwvergessen");
	return "";
}


/** Ausgabe eines Fehlerhinweises je nach betroffenem Feld
 * Parameter fehl: Gibt die ID des Feldes zum entsprechenden Fehlerhinweises mit
 * Parameter feld: Gibt die ID des fehlerhaften Feldes mit.
 *  **/
function fehlerAusgeben(fehl, feld){
    document.getElementById("" + fehl).style.display="inline"; //Fehlerhinweis wird angezeigt
    document.getElementById("" + feld).style.background="#852002"; //Fehlerhaftes Feld wird markiert
    document.getElementById("" + feld).style.color="#ffffff"; //Schriftfarbe des fehlerhaften Feldes wird dem neuen Hintergrund angepasst
    //document.getElementById("container_pwvergessen").style.height="320"; //Pop-Up wird zur Angabe des Fehlers vergrößert
}

function textEinblenden(fehl1, fehl2){
    document.getElementById("" + fehl1).style.display="none"; //Fehlerhinweis wird nicht angezeigt
    document.getElementById("" + fehl2).style.display="inline"; //Fehlerhinweis wird angezeigt
}

function textTauschen(fehl1, fehl2){
    document.getElementById("" + fehl1).style.display="none"; //Fehlerhinweis wird nicht angezeigt
    document.getElementById("" + fehl2).style.display="inline"; //Fehlerhinweis wird angezeigt
}

function hinweisVerbergen(fehl, feld){
	document.getElementById("" + fehl).style.display="none"; //Fehlerhinweis wird ausgeblendet
	document.getElementById("" + feld).style.background="#ffffff"; //Fehlerhaftes Feld wird farblich in Ausgangszustand gebracht
	document.getElementById("" + feld).style.color="#852002"; //Schriftfarbe wird farblich in Ausgangszustand gebracht
	//  document.getElementById("container_pwvergessen").style.height="300"; //Die Größe des Pop-Ups wird in Ausgangszustand gebracht
}
