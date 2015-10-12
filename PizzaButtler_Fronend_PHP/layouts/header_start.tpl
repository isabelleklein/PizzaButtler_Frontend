<html>
    <link href='http://fonts.googleapis.com/css?family=Open+Sans+Condensed:300|Open+Sans' rel='stylesheet' type='text/css'>
    <head>
         <meta http-equiv="Content-type" content="text/html; charset=utf-8" />
         <script type="text/javascript" src="./javascript/kundenregistrierung.js"></script>
 		 <script type="text/javascript" src="./javascript/jquery.js"></script>
 		 <script type="text/javascript" src="./javascript/jquery-ui.js"></script>
 	 	 <script type="text/javascript" src="./javascript/polyfill.js"></script>
 		 <script type="text/javascript" src="./javascript/absendentest.js"></script>
         <link href="./css/jquery-ui.css" rel="stylesheet" />
         <link href="./css/popupRegistrierung.css" rel="stylesheet" />
        
         <title>{$title|default:"Title"} | PizzaButler</title>
    </head>
    <body class="body">
     	<header>
            <link href="./css/header.css" rel="stylesheet" />
            
            <div id="header_nav">
                <div>
                    <span class="head_left">
                        <img src="./images/pizzabutler_logo_weiß.png" alt="PizzaButler Logo" height="180"/>
                    </span>
                    <span class="head_right">
                        <button class="header_button">Anmelden</button><br/>
                        <button class="header_button" id="open">Registrieren</button>
                    </span>
                </div>
            </div>
            <div id="header_bottom"></div>
     	</header>
     	<div id="container">
	        <form id='registrieren' name="registrieren" action="#">
	            <div class="fline">
					<select class="in2" name="anrede" id="anrede" size="1" onchange="anredePruefen()" required autofocus>
					    <option value="keine" selected disabled> Anrede </option>
					    <option value="Herr"> Herr </option>
					    <option value="Frau"> Frau </option>
					</select>
					<input type="button" id="close" value="X">
					
	            </div>
	            <label id="fehlerAnrede">Das Feld 'Anrede' ist nicht ausgew&aumlhlt</label>
				
	            <div class="fline">
	                <input type="text" class="in2" name="vorname" id="vorname" placeholder="Vorname"  
	                required title="Zwischen 3 und 25 Zeichen (Umlaute m&oumlglich)" onchange="vornamePruefen()"></input>
	    
	                <input type="text" class="in2" type="text" name="nachname" id="nachname" placeholder="Nachname" 
	                 required title="3 bis 25 Zeichen (Umlaute m&oumlglich)" onchange="nachnamePruefen()"/>
	            </div>
	            <label id="fehlerName">Bitte geben Sie einen g&uumlltigen Nachnamen an</label>
	            <label id="fehlerVorname">Bitte geben Sie einen g&uumlltigen Vornamen an</label>
	            <div class="fline">
	                <input class="in2" type="text" name="strasse" id="strasse" placeholder="Strasse" 
	                 required title="Nur Buchstaben inklusive Umlaute und maximal 2 Leerzeichen" onchange="strassePruefen()"/>
	                <input type="text" name="hausnummer" id="hausnummer" placeholder="Nr."
	                 required title="4 stellige Hausnummer mit maximal einem Zusatzbuchstaben a-z ohne Umlaute " onchange="hausnummerPruefen()"/>
	            </div>
	            <label id="fehlerStrasse">Bitte geben Sie eine g&uumlltige Strasse an</label>
	            <label id="fehlerHnr">Bitte geben Sie eine g&uumlltige Hausnummer an</label>
	
	            <div class="fline">
	                <input class="in2" type="text" name="plz" id="plz" placeholder="PLZ" required title="5 Zahlen" onchange="plzPruefen()"/>
	                <input type="text" name="ort" id="ort" placeholder="Ort" 
	                 required title="Nur Buchstaben inklusive Umlaute und maximal 2 Leerzeichen" onchange="wohnortPruefen()"/>
	            </div>
	            <label id="fehlerPlz">Bitte geben Sie eine g&uumlltige Postleitzahl an</label>
	            <label id="fehlerOrt">Bitte geben Sie einen g&uumlltigen Ort an</label>
	
	            <div class="fline">
	                <input class="in2" type="text" name="email" id="email" placeholder="Email-Adresse" required onchange="mailPruefen()"/>
	            
	                <input class="in2" type="text" name="telefonnummer" id="telefonnummer" placeholder="Telefonnummer" title="Telefonnummer mindestens 5 Ziffern"
	                 required onchange="telefonnummerPruefen()"/>
	            </div>
	            <label id="fehlerEmail">Bitte geben Sie eine g&uumlltige Email-Adresse an</label>
	            <label id="fehlerTel">Bitte geben Sie eine g&uumlltige Telefonnummer an</label>
	
	            <div class="fline">
	                <input class="in2" type="password" name="passwort" placeholder="Passwort" id="passwort" required title="Mindestens eine Ziffer, ein Groﬂbuchstabe, ein Kleinbuchstabe und insgesamt 8 Zeichen" 
	                		onchange="passwortPruefen1()"/>
	            
	                <input class="in2" type="password" name="pw2" id="pw2" placeholder="Passwort wdh." required onchange="passwortPruefen2()"/>
	            </div>
	            <label id="fehlerPw_1">Bitte geben Sie eine sicheres Passwort ein</label>
	            <label id="fehlerPw_2">Die Passw&oumlrter stimmen nicht &uumlberein</label>
	            <div class="fline">
	            	<input class="in2" name="agb" id="agb" type="checkbox" />Ich bin mit den AGB und dem Datenschutz einverstanden
	            </div>
	            <label id="fehlerAgb">Bitte stimmen Sie unseren AGBs und Datenschutzbestimmungen zu</label>
	            <p>
	                <input id="absenden" name="absenden" type="button" value="Kundenregistrierung abschliessen"/>
	            </p>
	            <label id="fehlerAbsenden"></label>
	        </form>
	        
	        <br />
 		</div>
 		<div id="overlay"></div>
             