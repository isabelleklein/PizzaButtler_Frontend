<html>
    <head>

        <title>Benutzer</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
        <link href="./css/main.css" rel="stylesheet" /> 
		<script type="text/javascript" src="./javascript/user.js"></script>
		
    </head>
    
    <body>
		<div class="maincontent">
			<form id='datenanzeigen' name="datenanzeigen" action="#">
				<h2 class="contenthead"> Deine Daten </h2>
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
        <div class = "infocontent">
    		<p id="infoContainerText"> Der Butler Bringts!</p>
    		<img id="logo_uebersicht" src="./images/butler.png" alt="Logo Pizzabutler">
    	</div>
    </body>
</html>
	