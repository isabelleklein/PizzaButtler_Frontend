<html>
    <head>

        <title>Benutzer</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
        <link href="./css/main.css" rel="stylesheet" /> 
		<script type="text/javascript" src="./javascript/datenanzeigen.js"></script>
		
    </head>
    
    <body>
		<div class="content">
			<form id='datenanzeigen' name="datenanzeigen" action="#">
				<h1> Daten Anzeigen</h1>
				<h2>Deine Daten sind:</h2>
				<div id="data">
					<div class="fline">
						<label class="in1" for="vorname">Anrede</label>
						<label type="text" class="text" name="anrede" id="userAnrede"></label>
					</div>
					<div class="fline">
						<label class="in1">Vorname:</label>
						<label type="text" class="text" name="vorname" id="userVorname"></label>
					</div>
					<div class="fline">
						<label class="in1">Nachname:</label>
						<label class="in1" name="nachname" id="userNachname"></label>
					</div>
					<div class="fline">
						<label class="in1">Geburtsdatum:</label>
						<label class="in1" name="geburtsdatum" id="userGeburtsdatum"></label>
					</div>
					<div class="fline">
						<label class="in1">Straße/Hausnummer:</label>
						<label class="in1" name="strasse" id="userStrasse"></label>
						<label class="in1" name="hausnummer" id="userHausnummer"></label>
					</div>
					<div class="fline">
						<label class="in1">PLZ/Ort:</label>
						<label class="in1" name="plz" id="userPlz"></label>
						<label class="in1" name="ort" id="userOrt"></label>
					</div>
					<div class="fline">
						<label class="in1">Email:</label>
						<label class="in1" name="email" id="userEmail"></label>
					</div>
					<p>
						<input id="datenaendern" name="datenaendern" type="button" value="Daten &auml;ndern" />
					</p>
				</div>
			</form>
		</div>
    </body>
</html>
	