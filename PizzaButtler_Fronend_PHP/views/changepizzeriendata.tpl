<html>
    <head>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
		<script type="text/javascript" src="../javascript/user_pizzeria.js"></script>
		<script type="text/javascript" src="../javascript/kundenregistrierung.js"></script>
		
    </head>
    
    <body>
    	<div id=datenContainer>
			<form id='datenaendern' name="datenaendern" action="#">
				<h3 class="contenthead"> Deine Daten / Daten ändern </h3>				
                <div class="fline">
	                <input type="text" name="name" id="name" required title="Zwischen 3 und 25 Zeichen (Umlaute möglich)" onchange="vornamePruefen1()" placeholder="Name"/>
	            </div>
                <div class="fline">
	                <input type="text" name="strasse" id="strasse" required title="Nur Buchstaben inklusive Umlaute und maximal 2 Leerzeichen" onchange="strassePruefen1()" placeholder="Strasse"/>
	                <input type="text" name="hausnummer" id="hausnummer" required title="4 stellige Hausnummer mit maximal einem Zusatzbuchstaben a-z ohne Umlaute " onchange="hausnummerPruefen1()" placeholder="Nr."/>
	            </div>
                <div class="fline">
	                <input  type="text" name="plz" id="plz" pattern="[0-9]{5}" required title="5 Zahlen" onchange="" placeholder="PLZ"/>
	                <input type="text" name="ort" id="Ort" required title="Nur Buchstaben inklusive Umlaute und maximal 2 Leerzeichen" onchange="wohnortPruefen1()" placeholder="Ort"/>
	            </div>
                <p></p>
	            <div class="fline">
                    <input type="text" name="oeffnungszeiten" id="oeffnungszeiten" onchange="datumPruefen()" required title="dd-mm-yyyy" placeholder="&Ouml;ffnungszeiten">
		        </div>
                <p></p>
                <div>
                    <input type="text" name="mindestbestellwert" id="mindestbestellwert" required title="Wert, Maximal zwei stellige Nachkommazahl" placeholder="Mindestbestellwert">
                    <input type="text" name="lieferkosten" id="lieferkosten" required placeholder="Lieferkosten"/>
		        </div>
                <p></p>
	            <div class="fline">
	                <input type="text" name="telefon" id="telefon" required onchange="telefonPruefen1()" placeholder="Telefon"/>
	                <input type="text" name="email" id="email" required onchange="mailPruefen1()" placeholder="Email"/>
	            </div>
				<p>
	                <input class="userbutton" id="datenspeichern" name="datenspeichern" type="button" value="&Auml;nderungen speichern"/>
                    <a href="user_pizzeria.php"><input class="userbutton" id="datenspeichern_abbr" name="datenspeichern_abbr" type="button" value="abbrechen"/>
                    </a>
	            </p>
				
			</form>
		</div>
    </body>
</html>