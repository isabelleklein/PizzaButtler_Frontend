<html>
    <head>

        <title>Benutzerdaten ändern</title>
        <link href="./css/main.css" rel="stylesheet" /> 
		
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
		<script type="text/javascript" src="../javascript/user_pizzeria.js"></script>
		<script type="text/javascript" src="../javascript/kundenregistrierung.js"></script>
		
    </head>
    
    <body>
    	<div id=datenContainer>
			<form id='datenaendern' name="datenaendern" action="#">
				<h1> Daten &auml;ndern</h1>
				
				<h2>Gebe deine neuen Daten ein</h2>
								
	            <div class="fline">
	                <label class="in1" for="name">Name</label>
	                <input type="text" class="in2" name="name" id="name" 
	                required title="Zwischen 3 und 25 Zeichen (Umlaute möglich)" onchange="vornamePruefen1()"/>
	            </div>
	
	            <div class="fline">
				<label class="in1" for="oeffnungszeiten">Oeffnungszeiten</label>
		                <input type="text" class="in2" name="oeffnungszeiten" id="oeffnungszeiten" placeholder="Oeffnungszeiten"
		                 onchange="datumPruefen()" required title="dd-mm-yyyy">
		        </div>
		        <label class="in1" for="mindestbestellwert">Mindestbestellwert</label>
		                <input type="text" class="in2" name="mindestbestellwert" id="mindestbestellwert" placeholder="Mindestbestellwert"
		                 required title="Wert, Maximal zwei stellige Nachkommazahl">
		        </div>
	
	            <div class="fline">
	                <label class="in1" for="strasse">Straße/Hausnummer</label>
	                <input class="in2" type="text" name="strasse" id="strasse" 
	                 required title="Nur Buchstaben inklusive Umlaute und maximal 2 Leerzeichen" onchange="strassePruefen1()"/>
	                <input type="text" name="hausnummer" id="hausnummer" 
	                 required title="4 stellige Hausnummer mit maximal einem Zusatzbuchstaben a-z ohne Umlaute " onchange="hausnummerPruefen1()"/>
	            </div>
	
	            <div class="fline">
	                <label class="in1" for="plz">PLZ / Wohnort</label>
	                <input class="in2" type="text" name="plz" id="plz" pattern="[0-9]{5}" required title="5 Zahlen" onchange=""/>
	                <input type="text" name="ort" id="Ort" 
	                 required title="Nur Buchstaben inklusive Umlaute und maximal 2 Leerzeichen" onchange="wohnortPruefen1()"/>
	            </div>
	
				<div class="fline">
	                <label class="in1" for="lieferkosten">Lieferkosten</label>
	                <input class="in2" type="text" name="lieferkosten" id="lieferkosten" required />
	            </div>
	            <div class="fline">
	                <label class="in1" for="email">Email</label>
	                <input class="in2" type="text" name="email" id="email" required onchange="mailPruefen1()"/>
	            </div>
				
				<p>
	                <input id="datenspeichern" name="datenspeichern" type="button" value="&Auml;nderungen speichern"/>
	            </p>
				
			</form>
		</div>
    </body>
</html>