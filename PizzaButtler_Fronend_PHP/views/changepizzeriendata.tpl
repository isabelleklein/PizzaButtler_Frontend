<html>
    <head>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
		<script type="text/javascript" src="./javascript/user_pizzeria.js"></script>
		<script type="text/javascript" src="./javascript/kundenregistrierung.js"></script>
		<link href="./css/main.css" rel="stylesheet" />
		
    </head>
    
    <body>
    	<div id=datenContainer>
			<form id='datenndern_daten' name="datenaendern_daten" action="#">
				<h3 class="contenthead"> Deine Daten / Daten &aumlndern </h3>				
                <div class="fline">
	                <input type="text" name="name" id="name_piz_aend" required title="Zwischen 3 und 25 Zeichen (Umlaute möglich)" onchange="vornamePruefen1()" placeholder="Name"/>
	                <label class="fehler" id="fehlerName_piz_aend">Bitte geben Sie einen g&uumlltigen Pizzeriennamen an</label>
	            </div>
                <div class="fline">
	                <input type="text" name="strasse" id="strasse_piz_aend" required title="Nur Buchstaben inklusive Umlaute und maximal 2 Leerzeichen" onchange="strassePruefen1()" placeholder="Strasse"/>
	                <label class="fehler" id="fehlerStrasse_piz_aend">Bitte geben Sie eine g&uumlltige Strasse an</label>
	            	<input type="text" name="hausnummer" id="hausnummer_piz_aend" required title="4 stellige Hausnummer mit maximal einem Zusatzbuchstaben a-z ohne Umlaute " onchange="hausnummerPruefen1()" placeholder="Nr."/>
	            	<label class="fehler" id="fehlerHausnummer_piz_aend">Bitte geben Sie eine g&uumlltige Hausnummer an</label>
	            </div>
                <div class="fline">
	                <input  type="text" name="plz" id="plz_piz_aend" pattern="[0-9]{5}" required title="5 Zahlen" onchange="" placeholder="PLZ"/>
	                <label class="fehler" id="fehlerPlz_piz_aend">Bitte geben Sie eine g&uumlltige PLZ an</label>
	            	<input type="text" name="ort" id="ort_piz_aend" required title="Nur Buchstaben inklusive Umlaute und maximal 2 Leerzeichen" onchange="wohnortPruefen1()" placeholder="Ort"/>
	            	<label class="fehler" id="fehlerOrt_piz_aend">Bitte geben Sie einen g&uumlltigen Ort an</label>
	            </div>
                <p></p>
	            <div class="fline">
	            	<p>&Oumlffnungszeiten</p>
	            	
                    <input type="time" name="sonntag" id="sonntag_piz_aend" placeholder="Sonntag"></input>
                    <input type="time" name="sonntag" id="sonntag_piz_aend_bis" placeholder="Sonntag"></input>
                    <label class='Wochentag_feld'>Sonntag</label></br>
                    <label class="fehler" id="fehlerSonntag_piz_aend">Bitte geben Sie eine g&uumlltige Uhrzeit an</label>
	            	
	            	<input type="time" name="montag" id="montag_piz_aend" placeholder="Montag"></input>
                    <input type="time" name="montag" id="montag_piz_aend_bis" placeholder="Montag"></input>
                    <label class='Wochentag_feld'>Montag</label></br>
                    <label class="fehler" id="fehlerMontag_piz_aend">Bitte geben Sie eine g&uumlltige Uhrzeit an</label>
	            	
	            	<input type="time" name="dienstag" id="dienstag_piz_aend" placeholder="Dienstag"></input>
                    <input type="time" name="dienstag" id="dienstag_piz_aend_bis" placeholder="Dienstag"></input>
                    <label class='Wochentag_feld'>Dienstag</label></br>
                    <label class="fehler" id="fehlerDienstag_piz_aend">Bitte geben Sie eine g&uumlltige Uhrzeit an</label>
	            	
	            	<input type="time" name="mittwoch" id="mittwoch_piz_aend" placeholder="Mittwoch"></input>
                    <input type="time" name="mittwoch" id="mittwoch_piz_aend_bis" placeholder="Mittwoch"></input>
                    <label class='Wochentag_feld'>Mittwoch</label></br>
                    <label class="fehler" id="fehlerMittwoch_piz_aend">Bitte geben Sie eine g&uumlltige Uhrzeit an</label>
	            	
	            	<input type="time" name="donnerstag" id="donnerstag_piz_aend" placeholder="Donnerstag"></input>
                    <input type="time" name="donnerstag" id="donnerstag_piz_aend_bis" placeholder="Donnerstag"></input>
                    <label class='Wochentag_feld'>Donnerstag</label></br>
                    <label class="fehler" id="fehlerDonnerstag_piz_aend">Bitte geben Sie eine g&uumlltige Uhrzeit an</label>
	            	
	            	<input type="time" name="freitag" id="freitag_piz_aend" placeholder="Freitag"></input>
                    <input type="time" name="freitag" id="freitag_piz_aend_bis" placeholder="Freitag"></input>
                    <label class='Wochentag_feld'>Freitag</label></br>
                    <label class="fehler" id="fehlerFreitag_piz_aend">Bitte geben Sie eine g&uumlltige Uhrzeit an</label>
	            	
	            	<input type="time" name="samstag" id="samstag_piz_aend" placeholder="Samstag"></input>
                    <input type="time" name="samstag" id="samstag_piz_aend_bis" placeholder="Samstag"></input>
                    <label class='Wochentag_feld'>Samstag</label></br>
                    <label class="fehler" id="fehlerSamstag_piz_aend">Bitte geben Sie eine g&uumlltige Uhrzeit an</label>
	            	
		        </div>
                <p></p>
                <div>
                    <input type="text" name="mindestbestellwert" id="mindestbestellwert_piz_aend" required title="Wert, Maximal zwei stellige Nachkommazahl" placeholder="Mindestbestellwert">
                    <input type="text" name="lieferkosten" id="lieferkosten_piz_aend" required placeholder="Lieferkosten"/>
		        </div>
                <p></p>
	            <div class="fline">
	                <input type="text" name="telefon" id="telefon_piz_aend" required onchange="telefonPruefen1()" placeholder="Telefon"/>
	                <label class="fehler" id="fehlerTel_piz_aend">Bitte geben Sie eine g&uumlltige Telefonnummer an</label>
	            	<input type="text" name="email" id="email_piz_aend" required onchange="mailPruefen1()" placeholder="Email"/>
	            	<label class="fehler" id="fehlerEmail_piz_aend">Bitte geben Sie eine g&uumlltige Emailadresse an</label>
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