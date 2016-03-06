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
				<h3 class="contenthead"> Deine Daten </h3>
				<div id="data">
                    <table class="userdaten">
                        <tr>
                            <td class="in1"><label>Anrede:</label></td>
                            <td>
                                <label type="text" class="text" name="anrede" id="userAnrede"></label><br />
                            </td>
                        </tr>
                        <tr>
                            <td class="in1"><label>Name:</label></td>
                            <td>
                                <label type="text" class="text" name="vorname" id="userVorname"></label>
                                <label name="nachname" id="userNachname"></label>
                            </td> 
                        </tr>
                        <tr>
                            <td class="in1"><label>Anschrift:</label></td>
                            <td>
                                <label name="strasse" id="userStrasse"></label>
                                <label name="hausnummer" id="userHausnummer"></label><br />
                                <label name="plz" id="userPlz"></label>
                                <label name="ort" id="userOrt"></label><br /><br />
                            </td>     
                        </tr>
                        <tr>
                            <td class="in1"><label>Telefon:</label></td>
                            <td><label name="telefon" id="userTelefon"></label></td>  
                        </tr>
                        <tr>
                            <td class="in1"><label>Email:</label></td>
                            <td><label name="email" id="userEmail"></label></td>  
                        </tr>
                    </table>
					<p>
						<input class="userbutton" id="userdatenaendern" name="userdatenaendern" type="button" value="Daten &auml;ndern" />
					</p>
                    <p>
						<input class="userbutton" id="userpwaendern" name="userpwaendern" type="button" value="Passwort &auml;ndern" />
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
	