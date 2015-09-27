/**
 * @author Isabelle Klein, Dominik Terlau
 * @Version 1.3
 */

function checkForm() 
{ 
    var strFehler='';
    
    strFehler += anredePruefen();
    strFehler += vornamePruefen();
    strFehler += nachnamePruefen();
    strFehler += strassePruefen();
    strFehler += hausnummerPruefen();
    strFehler += wohnortPruefen();
    strFehler += plzPruefen();
    strFehler += telefonnummerPruefen();
    strFehler += mailPruefen();
    strFehler += passwortPruefen();
    strFehler += agbPruefen();
    
    /** Ausgabe falls min 1 Fehler aufgetreten ist  **/
    if (strFehler.length>0) {
  	  alert("Folgende Probleme wurden festgestellt: \n\n"+strFehler);
  	  return(false);
    }
    else{return(true)}
}

function anredePruefen()
{
	/**Pruefen der Anredde **/
	var anrede = document.getElementById("status").value;  
    if(anrede=="keine")
	{
		return "Das Feld 'Anrede' ist nicht ausgewählt\n";
	}
    return "";
}

function vornamePruefen1()
{
	var msg = '';
	msg += vornamePruefen();
	if (msg.length>0) 
	  alert(msg + "");
}

function vornamePruefen()
{
/** Pruefen des Vornamens  **/

      var vorname=document.getElementById("vorname").value;
      if (vorname=="")
      {
    	  document.getElementById('vorname').style.borderColor = "red";
    	  return  "Das Feld 'Vorname' ist leer\n";
      }
      else
	  {
    	  var strRegVor = "^[A-Za-zÀ-Üß-ü_]{2,32}$";
          var regexVor = new RegExp(strRegVor);
          if(regexVor.test(vorname)==false)
          	return "Das Feld 'Vorname' entspricht nicht der typischen Form! Form: nur Buchstaben, mindestens 2 maximal 32 Buchstaben, Umlaute möglich\n";

	  }
      return "";
}

function nachnamePruefen1()
{
	var msg = '';
	msg += nachnamePruefen();
	if (msg.length>0) 
	  alert(msg + "");
}

function nachnamePruefen()
{
/** Pruefen des Nachnamens  **/

    var name=document.getElementById("name").value;
      if (name=="")
    	  return "Das Feld 'Name' ist leer\n";

      else
	  {
    	  var strRegNam = "^[A-Za-zÀ-Üß-ü_]{3,32}$";
          var regexNam = new RegExp(strRegNam);
          if(regexNam.test(name)==false)
          	return "Das Feld 'Name' entspricht nicht der typischen Form! Form: nur Buchstaben, mindestens 3 maximal 32 Buchstaben, Umlaute möglich\n";
	  }
      return "";
}

function strassePruefen1()
{
	var msg = '';
	msg += strassePruefen();
	if (msg.length>0) 
	  alert(msg + "");
}

function strassePruefen()
{
/** Pruefen der Strasse und der Hausnummer **/   
	var strasse=document.getElementById("strasse").value;
      if (strasse=="")
    	  return "Das Feld 'Straße' ist leer\n";
      else
	  {
    	  var strRegStr = "^[A-Za-zÀ-Üß-ü_]{2,50}[ ]{0,1}[A-Za-zÀ-Üß-ü_]{0,50}[ ]{0,1}[A-Za-zÀ-Üß-ü_]{0,50}$";
          var regexStr = new RegExp(strRegStr);
          if(regexStr.test(strasse)==false)
          	return "Das Feld 'Strasse' entspricht nicht der typischen Form! Form: nur Buchstaben, maximal 2 Leerzeichen\n";
	  }
      return"";
}

function hausnummerPruefen1()
{
	var msg = '';
	msg += hausnummerPruefen();
	if (msg.length>0) 
	  alert(msg + "");
}

function hausnummerPruefen()
{
  	var hnr=document.getElementById("hnr").value;
      if (hnr=="")
    	  return "Das Feld 'Hausnummer' ist leer\n";
      else
	  {
    	  var strRegHnr = "^[0-9-_\.]{1,10}[a-zA-Z]{0,1}$";
          var regexHnr = new RegExp(strRegHnr);
          if(regexHnr.test(hnr)==false)
          	return "Das Feld 'Hausnummer' entspricht nicht der typischen Form! Form:1-10 Ziffern, 1 Buchstabe\n";
	  }
      return "";
}

function wohnortPruefen1()
{
	var msg = '';
	msg += wohnortPruefen();
	if (msg.length>0) 
	  alert(msg + "");
}

function wohnortPruefen()
{

	var wohnort=document.getElementById("wohnort").value;
/** Pruefen des Ortes und der Postleitzahl **/         
      if (wohnort=="")
    	  return "Das Feld 'Wohnort' ist leer\n";
      else{
          var strRegWoh = "^[A-Za-zÀ-Üß-ü_]{1,50}[ ]{0,1}[A-Za-zÀ-Üß-ü_]{0,50}[ ]{0,1}[A-Za-zÀ-Üß-ü_]{0,50}$";
          var regexWoh = new RegExp(strRegWoh); 
          if(regexWoh.test(wohnort)==false)
        	  return "Das Feld 'Wohnort' entspricht nicht der typischen Form! \n";
      }
      return "";
}

function plzPruefen1()
{
	var msg = '';
	msg += plzPruefen();
	if (msg.length>0) 
	  alert(msg + "");
}

function plzPruefen()
{
  	var plz=document.getElementById("plz").value;
      if (plz=="")
    	  return "Das Feld 'PLZ' ist leer\n";

      else{
    	  /** Pruefung, dass nur Zahlen in der PLZ enthalten sind **/
          var strRegPLZ = "^[0-9]{5,5}$";
          var regexPLZ = new RegExp(strRegPLZ); 
          if(regexPLZ.test(plz)==false)
        	  return "Das Feld 'plz' entspricht nicht der typischen Form! Form: 5 Ziffern \n";
      }
      return "";
}

function telefonnummerPruefen1()
{
	var msg = '';
	msg += telefonnummerPruefen();
	if (msg.length>0) 
	  alert(msg + "");
}

function telefonnummerPruefen()
{
/** Pruefe der Telefonnummer  **/       
    var tel=document.getElementById("tel").value;
      if (tel=="")
    	  return "Das Feld 'Telefonnummer' ist leer\n";
      else{
    	  /** Pruefung, dass nur Zahlen in der Tel enthalten sind **/
          var strRegTel = "^[0-9-_\.]{5,20}$";
          var regexTel = new RegExp(strRegTel); 
          if(regexTel.test(tel)==false)
        	  return "Das Feld 'Telefonnummer' entspricht nicht der typischen Form! Form: mindestens 5 maximal 20 Ziffern \n";
      }
      return "";
}

function mailPruefen1()
{
	var msg = '';
	msg += mailPruefen();
	if (msg.length>0) 
	  alert(msg + "");
}

function mailPruefen()
{
/** Pruefen der Mail-Adresse  **/
    var email=document.getElementById("email").value;
      if (email=="")
    	  return "Das Feld 'Email' ist leer\n";
      else{
    	  /**  Pruefung ob eine gueltige Mail-Adresse eingegeben wurde **/
          var strRegMail = "^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@"+"[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$";
          var regexMail = new RegExp(strRegMail);
          if(regexMail.test(email)==false)
        	  return "Das Feld 'Email' entspricht nicht der typischen Form einer Email!\n";
      }
      return ""
}

function passwortPruefen1()
{
	var msg = '';
	msg += passwortPruefen();
	if (msg.length>0) 
	  alert(msg + "");
}
      
function passwortPruefen()
{
    var pw1=document.getElementById("pw1").value;  
    var pw2=document.getElementById("pw2").value;
      if (pw1=="")
    	  return "Das Feld 'Passwort' ist leer\n";
      else{
    	  /**  Pruefung ob sicheres Passwort eingegeben wurde **/
          var strRegPw = "^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,32}$";
          var regexPw = new RegExp(strRegPw);
          if(regexPw.test(pw1)==false)
        	  return "Das Feld 'Passwort' hat nicht die erforderliche Sicherheit! Bitte mind. 8 stelliges Passwort mit Kleinbuchstaben, Großbuchstaben und Zahlen verwenden\n";
      }
      if (pw2=="")
    	  return "Das Feld 'Passwort wiederholen' ist leer\n";
      else{
          if(pw2!=pw1)
        	  return "Die Passwörter stimmen nicht überein!\n";
      }
      return "";
}

function agbPruefen()
{
	if(document.getElementById("agb").checked == false)
		{
			return "Sie müssen die AGB und die Datenschutzbestimmungen akzeptieren"
		}
	return ""
	}
    
   
