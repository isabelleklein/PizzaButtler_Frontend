<html>
    <head>

        <title>Benutzer</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
        <link href="./css/main.css" rel="stylesheet" /> 
		<script type="text/javascript" src="./javascript/user_pizzeria.js"></script>
		
    </head>
    
    <body>
		<div class="maincontent" id=datenContainer>
			<form id='datenanzeigen' name="datenanzeigen" action="#">
				<h1> Daten Anzeigen</h1>
				<h2>Deine Daten sind:</h2>
				<div id="data">
					<div class="fline">
						<label class="in1">Name:</label>
						<label type="text" class="text" name="name" id="name_data_anz"></label>
					</div>
					<div class="fline">
						<label class="in1">Oeffnungszeiten:</label>
						<label type="text" class="in1" class="text" name="oeffnungszeiten" id="oeffnungszeiten_data_anz"></label>
					</div>
					<div class="fline">
						<label class="in1">Mindesbestellwert:</label>
						<label type="text" class="in1" class="text" name="mindestbestellwert" id="mindestbestellwert_data_anz"></label>
					</div>
					<div class="fline">
						<label class="in1">Straße/Hausnummer:</label>
						<label type="text" class="in1" class="text" name="strasse" id="strasse_data_anz"></label>
						<label type="text" class="in1" class="text" name="hausnummer" id="hausnummer_data_anz"></label>
					</div>
					<div class="fline">
						<label class="in1">PLZ/Ort:</label>
						<label type="text" class="in1" class="text" name="plz" id="plz_data_anz"></label>
						<label type="text" class="in1" class="text" name="ort" id="ort_data_anz"></label>
					</div>
					<div class="fline">
						<label class="in1">Lieferkosten:</label>
						<label type="text" class="in1" class="text" name="lieferkosten" id="lieferkosten_data_anz"></label>
					</div>
					<div class="fline">
						<label class = "in1">E-Mail:</label>
						<label type="text" class="in1" class="text" name="email" id = "email_data_anz"></label>
					<p>
						<input id="datenaendern" name="datenaendern" type="button" value="Daten &auml;ndern" />
					</p>
				</div>
			</form>
		</div>
    </body>
</html>
	