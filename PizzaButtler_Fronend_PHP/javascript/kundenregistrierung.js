/**
 * @author Isabelle Klein, Dominik Terlau
 * @Version 1.3
 */

function checkForm() 
{ 
    var strFehler='';
    
    strFehler += anredePruefen();
    if(strFehler.length==0){
    	strFehler += vornamePruefen();
        if(strFehler.length==0){
        	strFehler += nachnamePruefen();
        	if(strFehler.length==0){
	        	strFehler += datumPruefen();
	            if(strFehler.length==0){
	            	strFehler += strassePruefen();
	                if(strFehler.length==0){
	                	strFehler += hausnummerPruefen();
	                    if(strFehler.length==0){
	                    	strFehler += wohnortPruefen();
	                        if(strFehler.length==0){
	                        	strFehler += plzPruefen();
	                            if(strFehler.length==0){
	                            	strFehler += telefonnummerPruefen();
	                                if(strFehler.length==0){
	                                	strFehler += mailPruefen();
	                                    if(strFehler.length==0){
	                                    	strFehler += passwortPruefen();
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
        	}
    	}
    	
    
    /** Ausgabe falls min 1 Fehler aufgetreten ist  **/
    if (strFehler.length>0) {
    	console.log("Folgendes Problem wurde festgestellt: \n\n"+strFehler);
  	  return(false);
    }
    else{return(true)}
}

function anredePruefen()
{
	/**Pruefen der Anredde **/
	var anrede = document.getElementById("anrede").value;  
    if(anrede=="keine")
	{
    	fehlerAusgeben("fehlerAnrede", "anrede");
		return "Das Feld 'Anrede' ist nicht ausgewählt\n";
	}
    hinweisVerbergen("fehlerAnrede", "anrede");
    return "";
}

function vornamePruefen()
{
/** Pruefen des Vornamens  **/

      var vorname=document.getElementById("vorname").value;
      if(checkGrammatik("^[A-Za-zÀ-Üß-ü_]{2,25}$", vorname)==false)
    	  {
    	  fehlerAusgeben("fehlerVorname", "vorname");
          return "Das Feld 'Vorname' entspricht nicht der typischen Form! Form: nur Buchstaben, mindestens 2 maximal 32 Buchstaben, Umlaute möglich\n";
    	  }
      hinweisVerbergen("fehlerVorname", "vorname");
      return "";
}

function nachnamePruefen()
{
/** Pruefen des Nachnamens  **/

      var nachname=document.getElementById("nachname").value;
      if(checkGrammatik("^[A-Za-zÀ-Üß-ü_]{3,25}$", nachname)==false)
	  {
    	fehlerAusgeben("fehlerName", "nachname");
      	return "Das Feld 'Nachname' entspricht nicht der typischen Form! Form: nur Buchstaben, mindestens 3 maximal 32 Buchstaben, Umlaute möglich\n";
	  }
      hinweisVerbergen("fehlerName", "nachname");
      return "";
}

function strassePruefen()
{
/** Pruefen der Strasse und der Hausnummer **/   
	  var strasse=document.getElementById("strasse").value;
	  if(checkGrammatik("^[A-Za-zÀ-Üß-ü_]{2,25}[ ]{0,1}[A-Za-zÀ-Üß-ü_]{0,25}[ ]{0,1}[A-Za-zÀ-Üß-ü_]{0,25}$", strasse)==false)
		  {
		  fehlerAusgeben("fehlerStrasse", "strasse");
	      	return "Das Feld 'Strasse' entspricht nicht der typischen Form! Form: nur Buchstaben, maximal 2 Leerzeichen\n";
		  }
	  hinweisVerbergen("fehlerStrasse", "strasse");
      return"";
}

function hausnummerPruefen()
{
	  var hnr=document.getElementById("hausnummer").value;
	  if(checkGrammatik("^[0-9-_\.]{1,4}[a-zA-Z]{0,1}$", hnr)==false)
		  {
		    fehlerAusgeben("fehlerHnr", "hausnummer");
	    	return "Das Feld 'Hausnummer' entspricht nicht der typischen Form! Form:1-10 Ziffern, 1 Buchstabe\n";
		  }
	  hinweisVerbergen("fehlerHnr", "hausnummer");
	  return "";
}

function wohnortPruefen()
{

	var wohnort=document.getElementById("ort").value;
/** Pruefen des Ortes und der Postleitzahl **/
          if(checkGrammatik("^[A-Za-zÀ-Üß-ü_]{2,35}[ ]{0,1}[A-Za-zÀ-Üß-ü_]{0,35}[ ]{0,1}[A-Za-zÀ-Üß-ü_]{0,35}$", wohnort)==false)
        	  {
        	  	  fehlerAusgeben("fehlerOrt", "ort");
	        	  return "Das Feld 'Wohnort' entspricht nicht der typischen Form! \n";
        	  }
          hinweisVerbergen("fehlerOrt", "ort");
      return "";
}

function plzPruefen()
{
  	var plz=document.getElementById("plz").value;
      
	  /** Pruefung, dass nur Zahlen in der PLZ enthalten sind **/
      if(checkGrammatik("^[0-9]{5,5}$", plz)==false)
    	  {
    	  	  fehlerAusgeben("fehlerPlz", "plz");
	          return "Das Feld 'plz' entspricht nicht der typischen Form! Form: 5 Ziffern \n";
    	  }
      hinweisVerbergen("fehlerPlz", "plz"); 
      return "";
}

function telefonnummerPruefen()
{
/** Pruefe der Telefonnummer  **/       
    var tel=document.getElementById("telefonnummer").value;
	  /** Pruefung, dass nur Zahlen in der Tel enthalten sind **/
      if(checkGrammatik("^[0-9-_\.]{5,20}$", tel)==false)
    	  {
    	      fehlerAusgeben("fehlerTel", "telefonnummer");
	          return "Das Feld 'Telefonnummer' entspricht nicht der typischen Form! Form: mindestens 5 maximal 20 Ziffern \n";
    	  }
      hinweisVerbergen("fehlerTel", "telefonnummer"); 
      return "";
}


function mailPruefen()
{
/** Pruefen der Mail-Adresse  **/
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

function datumPruefen()
{
	var datum=document.getElementById("datepicker").value;
	if(checkGrammatik("^[0-9]{2,2}[-]{1,1}[0-9]{2,2}[-]{1,1}[0-9]{4,4}$", datum)==false)
	{
		fehlerAusgeben("fehlerDat", "datepicker");
	 return "Das Feld Datum wurde nicht korrekt ausgefüllt!";
	}
	hinweisVerbergen("fehlerDat", "datepicker");
	return"";
}
      
function passwortPruefen()
{
    var pw1=document.getElementById("passwort").value;  
    var pw2=document.getElementById("pw2").value;
	  /**  Pruefung ob sicheres Passwort eingegeben wurde **/
      if(checkGrammatik("^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,30}$", pw1)==false)
    	  {
    	  fehlerAusgeben("fehlerPw_1", "passwort");
          return "Das Feld 'Passwort' hat nicht die erforderliche Sicherheit! Bitte mind. 8 stelliges Passwort mit Kleinbuchstaben, Großbuchstaben und Zahlen verwenden\n";
    	  }
      

      else if(pw2!=pw1)
	  {
    	hinweisVerbergen("fehlerPw_1", "passwort"); 
    	fehlerAusgeben("fehlerPw_2", "pw2");
	  	return "Die Passwörter stimmen nicht überein!\n";
	  }
      hinweisVerbergen("fehlerPw_1", "passwort");  	
      hinweisVerbergen("fehlerPw_2", "pw2"); 
      return "";
}

function agbPruefen()
{
	if(document.getElementById("agb").checked == false)
		{
			fehlerAusgeben("fehlerAgb", "agb");
			return "Sie müssen die AGB und die Datenschutzbestimmungen akzeptieren"
		}
	hinweisVerbergen("fehlerAgb", "agb");
	return ""
}

function fehlerAusgeben(fehl, feld)
{
    document.getElementById("" + fehl).style.display="inline";
    document.getElementById("" + feld).style.borderColor="blue";
    document.getElementById("container").style.height="320";
	}
function hinweisVerbergen(fehl, feld)
{
	  document.getElementById("" + fehl).style.display="none";
	  document.getElementById("" + feld).style.borderColor="#852002";
	  document.getElementById("container").style.height="300";
	}

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

