<html>
    <head>
        
		<script type="text/javascript" src="./javascript/user.js"></script>
		<script type="text/javascript" src="./javascript/delivery.js"></script>
    </head>
    
    <body>
		<div class="maincontent">
			<form id='datenanzeigen' name="datenanzeigen" action="#">
				<h3 class="contenthead"> Deine Lieferadresse </h3>
				<div id="data">
				
                    <div class="fline">
                        <input type="text" name="vorname" id="userVorname" required title="Zwischen 3 und 25 Zeichen (Umlaute möglich)" 
                               onchange="vornamePruefen1()" placeholder="Vorname"/>
                        <input type="text" type="text" name="nachname" id="userNachname" required title="3 bis 25 Zeichen (Umlaute möglich)" 
                               onchange="nachnamePruefen1()" placeholder="Nachname"/>
                    </div>

                    <div class="fline">
                        <input type="text" name="strasse" id="userStrasse" required title="Nur Buchstaben inklusive Umlaute und maximal 2 Leerzeichen" 
                               onchange="strassePruefen1()" placeholder="Strasse"/>
                        <input type="text" name="hausnummer" id="userHausnummer" required title="4 stellige Hausnummer mit maximal einem Zusatzbuchstaben a-z 
                                ohne Umlaute " onchange="hausnummerPruefen1()"/ placeholder="Nr.">
                    </div>
                    <div class="fline">
                        <input type="text" name="plz" id="userPlz" pattern="[0-9]{5}" required title="5 Zahlen" onchange="" placeholder="PLZ"/>
                        <input type="text" name="ort" id="userOrt" required title="Nur Buchstaben inklusive Umlaute und maximal 2 Leerzeichen" 
                               onchange="wohnortPruefen1()" placeholder="Ort"/>
                    </div>
                    <div class="fline">
                        <input type="text" name="telefon" id="userTelefon" required onchange="telefonPruefen1()" placeholder="Telefon"/>
                        <input type="text" name="email" id="userEmail" required onchange="mailPruefen1()" placeholder="Email"/>
                    </div>
                    
					<p>
						<input class="userbutton" id="delivery_back" name="delivery_back" type="button" value="zur&uuml;ck" />
                        <input class="userbutton" id="delivery_next" name="delivery_next" type="button" value="weiter" />
					</p>
                    
                    <div id="eingeloggt">
                        <h3 class="contenthead"> oder weiter als registrierter User </h3>
                        <p>
						  <input class="userbutton" id="delivery_userlogin" name="delivery_userlogin" type="button" value="einloggen" />
					   </p>
                    </div>
				</div>
			</form>
		</div>
        <div class = "infocontent">
    		<p id="infoContainerText"> Der Butler Bringts!</p>
    		<img id="logo_uebersicht" src="./images/butler.png" alt="Logo Pizzabutler">
    	</div>
    </body>
</html>
	