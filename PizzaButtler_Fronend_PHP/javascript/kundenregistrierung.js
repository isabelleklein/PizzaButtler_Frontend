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
    	document.getElementById("fehlerAnrede").style.display="inline";
    	document.getElementById("fehlerAnrede_2").style.display="inline";
    	document.getElementById("anrede").style.borderColor="blue";
    	document.getElementById("container").style.height="320";
		return "Das Feld 'Anrede' ist nicht ausgewählt\n";
	}
    document.getElementById("fehlerAnrede").style.display="none";
	document.getElementById("fehlerAnrede_2").style.display="none";
	document.getElementById("anrede").style.borderColor="#852002";
	document.getElementById("container").style.height="300";
    return "";
}

function vornamePruefen()
{
/** Pruefen des Vornamens  **/

      var vorname=document.getElementById("vorname").value;
	  var strRegVor = "^[A-Za-zÀ-Üß-ü_]{2,25}$";
      var regexVor = new RegExp(strRegVor);
      if(regexVor.test(vorname)==false)
    	  {
        	document.getElementById("fehlerName").style.display="inline";
          	document.getElementById("fehlerVorname_2").style.display="inline";
          	document.getElementById("vorname").style.borderColor="blue";
          	document.getElementById("container").style.height="320";
      		return "Das Feld 'Vorname' entspricht nicht der typischen Form! Form: nur Buchstaben, mindestens 2 maximal 32 Buchstaben, Umlaute möglich\n";
    	  }
      document.getElementById("fehlerName").style.display="none";
	  document.getElementById("fehlerVorname_2").style.display="none";
	  document.getElementById("vorname").style.borderColor="#852002";
	  document.getElementById("container").style.height="300";
      return "";
}

function nachnamePruefen()
{
/** Pruefen des Nachnamens  **/

    var nachname=document.getElementById("nachname").value;
    	  var strRegNam = "^[A-Za-zÀ-Üß-ü_]{3,25}$";
          var regexNam = new RegExp(strRegNam);
          if(regexNam.test(nachname)==false)
    	  {
    	  	document.getElementById("fehlerName").style.display="inline";
          	document.getElementById("fehlerName_2").style.display="inline";
          	document.getElementById("nachname").style.borderColor="blue";
          	document.getElementById("container").style.height="320";
          	return "Das Feld 'Nachname' entspricht nicht der typischen Form! Form: nur Buchstaben, mindestens 3 maximal 32 Buchstaben, Umlaute möglich\n";
    	  }
      document.getElementById("fehlerName").style.display="none";
	  document.getElementById("fehlerName_2").style.display="none";
	  document.getElementById("nachname").style.borderColor="#852002";
	  document.getElementById("container").style.height="300";
      return "";
}

function strassePruefen()
{
/** Pruefen der Strasse und der Hausnummer **/   
	var strasse=document.getElementById("strasse").value;
	  var strRegStr = "^[A-Za-zÀ-Üß-ü_]{2,25}[ ]{0,1}[A-Za-zÀ-Üß-ü_]{0,25}[ ]{0,1}[A-Za-zÀ-Üß-ü_]{0,25}$";
	  var regexStr = new RegExp(strRegStr);
	  if(regexStr.test(strasse)==false)
		  {
		  	document.getElementById("fehlerStrasse").style.display="inline";
	      	document.getElementById("fehlerStrasse_2").style.display="inline";
	      	document.getElementById("strasse").style.borderColor="blue";
	      	document.getElementById("container").style.height="320";
	      	return "Das Feld 'Strasse' entspricht nicht der typischen Form! Form: nur Buchstaben, maximal 2 Leerzeichen\n";
		  }
      document.getElementById("fehlerStrasse").style.display="none";
	  document.getElementById("fehlerStrasse_2").style.display="none";
	  document.getElementById("strasse").style.borderColor="#852002";
	  document.getElementById("container").style.height="300";
      return"";
}

function hausnummerPruefen()
{
  	var hnr=document.getElementById("hausnummer").value;
      
	  var strRegHnr = "^[0-9-_\.]{1,4}[a-zA-Z]{0,1}$";
      var regexHnr = new RegExp(strRegHnr);
      if(regexHnr.test(hnr)==false)
    	  {
    	  	document.getElementById("fehlerStrasse").style.display="inline";
        	document.getElementById("fehlerHnr_2").style.display="inline";
        	document.getElementById("hausnummer").style.borderColor="blue";
        	document.getElementById("container").style.height="320";
        	return "Das Feld 'Hausnummer' entspricht nicht der typischen Form! Form:1-10 Ziffern, 1 Buchstabe\n";
    	  }
      document.getElementById("fehlerStrasse").style.display="none";
	  document.getElementById("fehlerHnr_2").style.display="none";
	  document.getElementById("hausnummer").style.borderColor="#852002";
	  document.getElementById("container").style.height="300";
      return "";
}

function wohnortPruefen()
{

	var wohnort=document.getElementById("ort").value;
/** Pruefen des Ortes und der Postleitzahl **/
          var strRegWoh = "^[A-Za-zÀ-Üß-ü_]{2,35}[ ]{0,1}[A-Za-zÀ-Üß-ü_]{0,35}[ ]{0,1}[A-Za-zÀ-Üß-ü_]{0,35}$";
          var regexWoh = new RegExp(strRegWoh); 
          if(regexWoh.test(wohnort)==false)
        	  {
	        	  document.getElementById("fehlerPlz").style.display="inline";
		          document.getElementById("fehlerOrt_2").style.display="inline";
		          document.getElementById("ort").style.borderColor="blue";
		          document.getElementById("container").style.height="320";
	        	  return "Das Feld 'Wohnort' entspricht nicht der typischen Form! \n";
        	  }
          document.getElementById("fehlerPlz").style.display="none";
    	  document.getElementById("fehlerOrt_2").style.display="none";
    	  document.getElementById("ort").style.borderColor="#852002";
    	  document.getElementById("container").style.height="300";
      return "";
}

function plzPruefen()
{
  	var plz=document.getElementById("plz").value;
      
	  /** Pruefung, dass nur Zahlen in der PLZ enthalten sind **/
      var strRegPLZ = "^[0-9]{5,5}$";
      var regexPLZ = new RegExp(strRegPLZ); 
      if(regexPLZ.test(plz)==false)
    	  {
	    	  document.getElementById("fehlerPlz").style.display="inline";
	          document.getElementById("fehlerPlz_2").style.display="inline";
	          document.getElementById("plz").style.borderColor="blue";
	          document.getElementById("container").style.height="320";
	          return "Das Feld 'plz' entspricht nicht der typischen Form! Form: 5 Ziffern \n";
    	  }
      document.getElementById("fehlerPlz").style.display="none";
	  document.getElementById("fehlerPlz_2").style.display="none";
	  document.getElementById("plz").style.borderColor="#852002";
	  document.getElementById("container").style.height="300";	  
      return "";
}

function telefonnummerPruefen()
{
/** Pruefe der Telefonnummer  **/       
    var tel=document.getElementById("telefonnummer").value;
	  /** Pruefung, dass nur Zahlen in der Tel enthalten sind **/
      var strRegTel = "^[0-9-_\.]{5,20}$";
      var regexTel = new RegExp(strRegTel); 
      if(regexTel.test(tel)==false)
    	  {
	    	  document.getElementById("fehlerEmail").style.display="inline";
	          document.getElementById("fehlerTel_2").style.display="inline";
	          document.getElementById("telefonnummer").style.borderColor="blue";
	          document.getElementById("container").style.height="320";
	          return "Das Feld 'Telefonnummer' entspricht nicht der typischen Form! Form: mindestens 5 maximal 20 Ziffern \n";
    	  }
      document.getElementById("fehlerEmail").style.display="none";
	  document.getElementById("fehlerTel_2").style.display="none";
	  document.getElementById("telefonnummer").style.borderColor="#852002";
	  document.getElementById("container").style.height="300";	  
      return "";
}


function mailPruefen()
{
/** Pruefen der Mail-Adresse  **/
    var email=document.getElementById("email").value;
	  /**  Pruefung ob eine gueltige Mail-Adresse eingegeben wurde **/
      var strRegMail = "^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@"+"[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$";
      var regexMail = new RegExp(strRegMail);
      if(regexMail.test(email)==false)
    	  {
	    	  document.getElementById("fehlerEmail").style.display="inline";
	          document.getElementById("fehlerEmail_2").style.display="inline";
	          document.getElementById("email").style.borderColor="blue";
	          document.getElementById("container").style.height="320";
	          return "Das Feld 'Email' entspricht nicht der typischen Form einer Email!\n";
    	  }
      document.getElementById("fehlerEmail").style.display="none";
	  document.getElementById("fehlerEmail_2").style.display="none";
	  document.getElementById("email").style.borderColor="#852002";
	  document.getElementById("container").style.height="300";
 
      return ""
}

function datumPruefen()
{
	var datum=document.getElementById("datepicker").value;
	var strRegDat = "^[0-9]{2,2}[-]{1,1}[0-9]{2,2}[-]{1,1}[0-9]{4,4}$";
	var regexDat = new RegExp(strRegDat);
	if(regexDat.test(datum)==false)
	{
		document.getElementById("fehlerDat").style.display="inline";
        document.getElementById("fehlerDat_2").style.display="inline";
        document.getElementById("datepicker").style.borderColor="blue";
        document.getElementById("container").style.height="320";
	 return "Das Feld Datum wurde nicht korrekt ausgefüllt!";
	}
	document.getElementById("fehlerDat").style.display="none";
	  document.getElementById("fehlerDat_2").style.display="none";
	  document.getElementById("datepicker").style.borderColor="#852002";
	  document.getElementById("container").style.height="300";
	return"";
}
      
function passwortPruefen()
{
    var pw1=document.getElementById("passwort").value;  
    var pw2=document.getElementById("pw2").value;
	  /**  Pruefung ob sicheres Passwort eingegeben wurde **/
      var strRegPw = "^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,30}$";
      var regexPw = new RegExp(strRegPw);
      if(regexPw.test(pw1)==false)
    	  {
    	  document.getElementById("fehlerPw").style.display="inline";
          document.getElementById("fehlerPw_1").style.display="inline";
          document.getElementById("passwort").style.borderColor="blue";
          document.getElementById("container").style.height="320";
          return "Das Feld 'Passwort' hat nicht die erforderliche Sicherheit! Bitte mind. 8 stelliges Passwort mit Kleinbuchstaben, Großbuchstaben und Zahlen verwenden\n";
    	  }
      

      else if(pw2!=pw1)
	  {
		document.getElementById("fehlerPw_1").style.display="none"
		document.getElementById("passwort").style.borderColor="#852002";
		document.getElementById("fehlerPw").style.display="inline";
	    document.getElementById("fehlerPw_2").style.display="inline";
	    document.getElementById("pw2").style.borderColor="blue";
        document.getElementById("container").style.height="320";
	  	return "Die Passwörter stimmen nicht überein!\n";
	  }
        	  
      document.getElementById("fehlerPw").style.display="none"
      document.getElementById("passwort").style.borderColor="#852002";
      document.getElementById("fehlerPw").style.display="none";
	  document.getElementById("fehlerPw_2").style.display="none";
	  document.getElementById("pw2").style.borderColor="#852002";
	  document.getElementById("container").style.height="300";
      return "";
}

function agbPruefen()
{
	if(document.getElementById("agb").checked == false)
		{
			document.getElementById("fehlerAgb").style.display="inline";
	        document.getElementById("fehlerAgb_2").style.display="inline";
	        document.getElementById("agb").style.borderColor="blue";
	        document.getElementById("container").style.height="320";
			return "Sie müssen die AGB und die Datenschutzbestimmungen akzeptieren"
		}
	document.getElementById("fehlerAgb").style.display="inline";
    document.getElementById("fehlerAgb_2").style.display="inline";
    document.getElementById("agb").style.borderColor="blue";
    document.getElementById("container").style.height="320";
	return ""
}

