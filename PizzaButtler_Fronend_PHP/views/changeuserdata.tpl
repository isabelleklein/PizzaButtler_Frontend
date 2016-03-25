<html>
    <head>

        <title>Benutzerdaten ändern</title>
        <link href="./css/main.css" rel="stylesheet" /> 
		
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
		<script type="text/javascript" src="./javascript/user.js"></script>
        
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
					<label class="placeholder_fehler" id="fehleruserAnrede"><br />Bitte geben Sie eine Anrede an</label>
	            </div>
				
	            <div class="fline">
	                <input type="text" name="vorname" id="userVorname" required title="Zwischen 3 und 25 Zeichen (Umlaute möglich)" 
                           onchange="vornamePruefen_user()" placeholder="Vorname"/>
	                <input type="text" type="text" name="nachname" id="userNachname" required title="3 bis 25 Zeichen (Umlaute möglich)" 
                           onchange="nachnamePruefen_user()" placeholder="Nachname"/>
                    <label class="placeholder_fehler" id="fehleruserVorname"><br />Bitte geben Sie einen g&uumlltigen Vornamen an</label>
                    <label class="placeholder_fehler" id="fehleruserName"><br />Bitte geben Sie einen g&uumlltigen Nachnamen an</label>
	            </div>
	
	            <div class="fline">
                    <input type="text" name="strasse" id="userStrasse" required title="Nur Buchstaben inklusive Umlaute und maximal 2 Leerzeichen" 
                           onchange="strassePruefen_user()" placeholder="Strasse"/>
                    <input type="text" name="hausnummer" id="userHausnummer" required title="4 stellige Hausnummer mit maximal einem Zusatzbuchstaben a-z ohne 
                            Umlaute " onchange="hausnummerPruefen_user()"/ placeholder="Nr.">
                    <label class="placeholder_fehler" id="fehleruserStrasse"><br />Bitte geben Sie eine g&uumlltige Strasse an</label>
                    <label class="placeholder_fehler" id="fehleruserHnr"><br />Bitte geben Sie eine g&uumlltige Hausnummer an</label>
	            </div>
	            <div class="fline">
				    <input type="text" name="plz" id="userPlz" pattern="[0-9]{5}" required title="5 Zahlen" onchange="plzPruefen_user()" placeholder="PLZ"/>
                    <input type="text" name="ort" id="userOrt" required title="Nur Buchstaben inklusive Umlaute und maximal 2 Leerzeichen" 
                           onchange="wohnortPruefen_user()" placeholder="Ort"/>
                    <label class="placeholder_fehler" id="fehleruserPlz"><br />Bitte geben Sie eine g&uumlltige Postleitzahl an</label>
                    <label class="placeholder_fehler" id="fehleruserOrt"><br />Bitte geben Sie einen g&uumlltigen Ort an</label>
		        </div>
	            <div class="fline">
	                <input type="text" name="telefon" id="userTelefon" required onchange="telefonPruefen_user()" placeholder="Telefon"/>
                    <input type="text" name="email" id="userEmail" required onchange="mailPruefen_user()" placeholder="Email"/>
                    <label class="placeholder_fehler" id="fehleruserEmail"><br />Bitte geben Sie eine g&uumlltige Email-Adresse an</label>
                    <label class="placeholder_fehler" id="fehleruserTel"><br />Bitte geben Sie eine g&uumlltige Telefonnummer an</label>
	            </div>
	
	            
				<p>
	                <input class="userbutton" id="userdatenspeichern" name="userdatenspeichern" type="button" value="&Auml;nderungen speichern"/>
                    <a href="user.php"><input class="userbutton" id="datenspeichern_abbr" name="datenspeichern_abbr" type="button" value="abbrechen"/></a>
                </p>
			</form>
		</div>
    </body>
</html>