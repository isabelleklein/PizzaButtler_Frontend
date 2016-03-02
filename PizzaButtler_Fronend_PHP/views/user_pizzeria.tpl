<html>
    <head>

        <title>Benutzer</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
        <link href="./css/main.css" rel="stylesheet" /> 
		<script type="text/javascript" src="./javascript/user_pizzeria.js"></script>
		
    </head>
    
    <body>
		<div class="content" id=datenContainer>
			<form id='datenanzeigen' name="datenanzeigen" action="#">
				<h1> Daten Anzeigen</h1>
				<h2>Deine Daten sind:</h2>
				<div id="data">
					<div class="fline">
						<label class="in1">Name:</label>
						<label type="text" class="text" name="name" id="name"></label>
					</div>
					<div class="fline">
						<label class="in1">Beschreibung:</label>
						<label type="text" class="text" name="beschreibung" id="beschreibung"></label>
					</div>
					<div class="fline">
						<label class="in1">Oeffnungszeiten:</label>
						<label class="in1" class="text" name="oeffnungszeiten" id="oeffnungszeiten"></label>
					</div>
					<div class="fline">
						<label class="in1">Mindesbestellwert:</label>
						<label class="in1" class="text" name="mindestbestellwert" id="mindestbestellwert"></label>
					</div>
					<div class="fline">
						<label class="in1">Straße/Hausnummer:</label>
						<label class="in1" class="text" name="strasse" id="strasse"></label>
						<label class="in1" class="text" name="hausnummer" id="hausnummer"></label>
					</div>
					<div class="fline">
						<label class="in1">PLZ/Ort:</label>
						<label class="in1" class="text" name="plz" id="plz"></label>
						<label class="in1" class="text" name="ort" id="ort"></label>
					</div>
					<div class="fline">
						<label class="in1">Lieferkosten:</label>
						<label class="in1" class="text" name="lieferkosten" id="lieferkosten"></label>
					</div>
					<div>
						<label class = "in1">E-Mail:</label>
						<label class = "in1" class="text" name="email" id = "email"></label>
					<p>
						<input id="datenaendern" name="datenaendern" type="button" value="Daten &auml;ndern" />
					</p>
				</div>
			</form>
		</div>
    </body>
</html>
	