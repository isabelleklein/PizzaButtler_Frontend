/**
 * @author Isabelle Klein, Dominik Terlau
 * @Version 1.1
 */

function checkForm() 
{
            
    var vorname=document.getElementById("vorname").value;
    var name=document.getElementById("name").value;
	var day=document.getElementById("day").value;
	var month=document.getElementById("month").value;
	var year=document.getElementById("year").value;
	var strasse=document.getElementById("strasse").value;
	var hnr=document.getElementById("hnr").value;
	var wohnort=document.getElementById("wohnort").value;
	var plz=document.getElementById("plz").value;
    var email=document.getElementById("email").value;
    var tel=document.getElementById("tel").value;

    var strFehler='';


/** Pruefen des Vornamens  **/
      if (vorname=="")

        strFehler += "Das Feld 'Vorname' ist leer\n";

          if (vorname.length<2)

        strFehler += "Dies ist kein gültiger Vorname\n";


/** Pruefen des Nachnamens  **/
          if (name=="")

        strFehler += "Das Feld 'Name' ist leer\n";

          if (name.length<3)

        strFehler += "Dies ist kein gültiger Nachname\n";


/** Pruefen des Datums, unterteilt in Tag / Monat / Jahr  **/   
          if (day=="")

        strFehler += "Das Feld 'Tag' ist leer\n";

              if (month=="")

        strFehler += "Das Feld 'Monat' ist leer\n";

              if (year=="")

        strFehler += "Das Feld 'Jahr' ist leer\n";

              if (day.length>2)

        strFehler += "Dies ist kein gültiger Tag\n";
              if (month.length>2)

        strFehler += "Dies ist kein gültiger Monat\n";
              if (year.length>4)

        strFehler += "Dies ist kein gültiges Jahr\n";

/**              if (!validTag(document.forms[0].day.value)) {

        strFehler += "Kein gültiger Tag - bitte nur Zahlen angeben\n";

            }
              if (!validMonat(document.forms[0].month.value)) {

        strFehler += "Kein gültiger Monat - bitte nur Zahlen angeben\n";

            }
              if (!validJahr(document.forms[0].year.value)) {

        strFehler += "Kein gültiges Jahr - bitte nur Zahlen angeben\n";

            }
    **/


/** Pruefen der Strasse und der Hausnummer **/   
          if (strasse=="")

        strFehler += "Das Feld 'Straße' ist leer\n";

          if (hnr=="")

        strFehler += "Das Feld 'Hausnummer' ist leer\n";


/** Pruefen des Ortes und der Postleitzahl **/         
          if (wohnort=="")

        strFehler += "Das Feld 'Wohnort' ist leer\n";

          if (plz=="")

        strFehler += "Das Feld 'PLZ' ist leer\n";

          if (plz.length<5)

        strFehler += "Die Postleitzahl ist zu kurz \n";

/**          if (!validPlz(document.forms[0].plz.value)) {

        strFehler += "Die Postleitzahl darf nur Zahlen enthalten! \n";

            }

**/

/** Pruefe der Telefonnummer  **/    
          if (tel=="")

        strFehler += "Das Feld 'Telefonnummer' ist leer\n";


/** Pruefen der Mail-Adresse  **/
          if (email=="")

        strFehler += "Das Feld 'Email' ist leer\n";

/**          if (!validEmail(document.forms[0].email.value)) {

        strFehler += "Bitte geben Sie eine gueltige Mail-Adresse an\n";

            }
**/

/** Ausgabe falls min 1 Fehler aufgetreten ist  **/
          if (strFehler.length>0) {

        alert("Folgende Probleme wurden festgestellt: \n\n"+strFehler);

        return(false);

            }


}

/** Pruefung, dass nur Zahlen enthalten sind in folgenden Feldern:
        - PLZ
**/
/**
 * Prüfung, ob es sich um ein Datum handelt ist aufgrund des Typs Datum nicht notwendig
 */

function validPlz(plz) {

    //var strReg = "([0-9])+([0-9])+([0-9])+([0-9])+([0-9])"; //Überprüfung, ob es sich um eine Zahlenfolge handelt ist aufgrund des Typs nicht notwendig

    var regex = new RegExp(strReg); //Was macht die Methode??

    return(regex.test(plz));

} 




/**  Pruefung ob eine gueltige Mail-Adresse eingegeben wurde **/

function validEmail(email) {

    var strReg = "^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$";

    var regex = new RegExp(strReg);

    return(regex.test(email));

}


/** Übermittlung der eingegebenen Daten an das Backend **/


var $registrieren = $('#registrieren');

/** Aktionsinformationen für den Abschicken-Button **/

$('#absenden').click(function(e) {
	console.log("Abschicken Button wurde geklickt");
	e.preventDefault(); /** cancel form submit **/
	
	var jsObj = $registrieren.serializeObject(), ajaxObj = {};
	
	//console.log(jsObj);
	
	ajaxObj = {  
		type: "POST",																	/**RESTful-Methode POST**/
		url: "http://pizzabuttler.com/reg/new/", 										/**Webadresse, welche das Anlegen eines neuen Benutzers ermöglicht**/
		data: JSON.stringify(jsObj), 													/**Datei, die im HTTP-Body mitgegeben wird**/
		contentType:"application/json",  												/**Dateityp der Datei im HTTP-Body**/
		error: function(jqXHR, textStatus, errorThrown) {								/**Ermittlung von Fehlern**/
			console.log("Error " + jqXHR.getAllResponseHeaders() + " " + errorThrown);
		},
		$('#div_ajaxResponse').text( "erfolgreich" );
		success: function(data) { 														/**Ermittlung von Erfolgreicher übertragung --> Das Backend sendet den HTTP-Code 200**/
			//console.log(data);
			if(data[0].HTTP_CODE == 200) {
				$('#div_ajaxResponse').text( data[0].MSG );
			}
		},
		complete: function(XMLHttpRequest) {
			//console.log( XMLHttpRequest.getAllResponseHeaders() );
		}, 
		dataType: "json" //request JSON
	};
	
	$.ajax(ajaxObj);
});


