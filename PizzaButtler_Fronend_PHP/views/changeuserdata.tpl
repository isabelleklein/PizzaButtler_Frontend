<html>
    <head>

        <title>Benutzerdaten ändern</title>
        <link href="./css/main.css" rel="stylesheet" /> 
		
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
		<script type="text/javascript" src="./javascript/user.js"></script>
		<script type="text/javascript" src="./javascript/kundenregistrierung.js"></script>
		
    </head>
    
    <body>
    	<div id=datenContainer>
			<form id='datenaendern' name="datenaendern" action="#">
				<h3 class="contenthead"> Deine Daten / Daten ändern </h3>
                
				<div class="fline">
	                <select name="anrede" id="userAnrede" size="1" required autofocus>
                        <option value="keine" selected disabled> bitte wählen</option>
                        <option value="Herr"> Herr </option>
                        <option value="Frau"> Frau </option>
                    </select>
	            </div>
				
	            <div class="fline">
	                <input type="text" name="vorname" id="userVorname" required title="Zwischen 3 und 25 Zeichen (Umlaute möglich)" onchange="vornamePruefen1()" placeholder="Vorname"/>
	                <input type="text" type="text" name="nachname" id="userNachname" required title="3 bis 25 Zeichen (Umlaute möglich)" onchange="nachnamePruefen1()" placeholder="Nachname"/>
	            </div>
	
	            <div class="fline">
                    <input type="text" name="strasse" id="userStrasse" required title="Nur Buchstaben inklusive Umlaute und maximal 2 Leerzeichen" onchange="strassePruefen1()" placeholder="Strasse"/>
                    <input type="text" name="hausnummer" id="userHausnummer" required title="4 stellige Hausnummer mit maximal einem Zusatzbuchstaben a-z ohne Umlaute " onchange="hausnummerPruefen1()"/ placeholder="Nr.">
	            </div>
	
	            <div class="fline">
				    <input type="text" name="plz" id="userPlz" pattern="[0-9]{5}" required title="5 Zahlen" onchange="" placeholder="PLZ"/>
                    <input type="text" name="ort" id="userOrt" required title="Nur Buchstaben inklusive Umlaute und maximal 2 Leerzeichen" onchange="wohnortPruefen1()" placeholder="Ort"/>
		        </div>
	
	            <div class="fline">
	                <input type="text" name="telefon" id="userTelefon" required onchange="telefonPruefen1()" placeholder="Telefon"/>
                    <input type="text" name="email" id="userEmail" required onchange="mailPruefen1()" placeholder="Email"/>
	            </div>
	
	            
				<p>
	                <input  class="userbutton" id="userdatenspeichern" name="userdatenspeichern" type="button" value="&Auml;nderungen speichern"/>
                </p>
			</form>
		</div>
    </body>
</html>