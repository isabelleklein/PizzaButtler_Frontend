<html>
    <head>

        <title>Benutzerdaten ändern</title>
        <link href="./css/main.css" rel="stylesheet" /> 
		
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
		<script type="text/javascript" src="../javascript/datenanzeigen.js"></script>
		<script type="text/javascript" src="../javascript/datenaendern.js"></script>
		<script type="text/javascript" src="../javascript/kundenregistrierung.js"></script>
		
    </head>
    
    <body>
		<form id='datenaendern' name="datenaendern" action="#">
			<h1> Daten &auml;ndern</h1>
			
			<h2>Gebe deine neuen Daten ein</h2>
			
			<div class="fline">
                <a class="in1">Anrede</a>
				<select class="in2" name="anrede" id="userAnrede" size="1" required autofocus>
				    <option value="keine" selected disabled> bitte wählen</option>
				    <option value="Herr"> Herr </option>
				    <option value="Frau"> Frau </option>
				</select>
            </div>
			
            <div class="fline">
                <label class="in1" for="vorname">Vorname</label>
                <input type="text" class="in2" name="vorname" id="userVorname" 
                required title="Zwischen 3 und 25 Zeichen (Umlaute möglich)" onchange="vornamePruefen1()"/>
            </div>

            <div class="fline">
                <label class="in1" for="nachname">Nachname</label>
                <input type="text" class="in2" type="text" name="nachname" id="userNachname"
                 required title="3 bis 25 Zeichen (Umlaute möglich)" onchange="nachnamePruefen1()"/>
            </div>

            <div class="fline">
			<label class="in1" for="nachname">Geburtsdatum</label>
	                <input type="text" class="in2" name="geburtsdatum" id="userGeburtsdatum" placeholder="Geburtsdatum"
	                 onchange="datumPruefen()" required title="dd-mm-yyyy">
	        </div>

            <div class="fline">
                <label class="in1" for="strasse">Strasse / Hausnummer</label>
                <input class="in2" type="text" name="strasse" id="userStrasse" 
                 required title="Nur Buchstaben inklusive Umlaute und maximal 2 Leerzeichen" onchange="strassePruefen1()"/>
                <input type="text" name="hausnummer" id="userHausnummer" 
                 required title="4 stellige Hausnummer mit maximal einem Zusatzbuchstaben a-z ohne Umlaute " onchange="hausnummerPruefen1()"/>
            </div>

            <div class="fline">
                <label class="in1" for="plz">PLZ / Wohnort</label>
                <input class="in2" type="text" name="plz" id="userPlz" pattern="[0-9]{5}" required title="5 Zahlen" onchange=""/>
                <input type="text" name="ort" id="userOrt" 
                 required title="Nur Buchstaben inklusive Umlaute und maximal 2 Leerzeichen" onchange="wohnortPruefen1()"/>
            </div>

            <div class="fline">
                <label class="in1" for="email">Email</label>
                <input class="in2" type="text" name="email" id="userEmail" required onchange="mailPruefen1()"/>
            </div>
			
			<p>
                <input id="datenspeichern" name="datenspeichern" type="button" value="&Auml;nderungen speichern"/>
            </p>
			
		</form>
    </body>
</html>