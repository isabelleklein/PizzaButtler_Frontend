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
				<h3 class="contenthead"> Deine Daten </h3>
				<div id="data">
                    <table class="userdaten">
                        <tr>
                            <td class="in1"><label>Name:</label></td>
                            <td>
                                <label type="text" class="text" name="name" id="name_data_anz"></label>
                            </td>
                        </tr>
                        <tr>
                            <td class="in1"><label>Anschrift:</label></td>
                            <td>
                                <label type="text" class="text" name="strasse" id="strasse_data_anz"></label>
                                <label type="text" class="text" name="hausnummer" id="hausnummer_data_anz"></label><br />
                                <label type="text" class="text" name="plz" id="plz_data_anz"></label>
                                <label type="text" class="text" name="ort" id="ort_data_anz"></label><br /><br />
                            </td>
                        </tr>
                        <tr>
                            <td class="in1"><label>&Ouml;ffnungszeiten:</label></td>
                            <td>
                                <label type="text" class="text" name="oeffnungszeiten" id="oeffnungszeiten_data_anz_so"></label><br />
                                <label type="text" class="text" name="oeffnungszeiten" id="oeffnungszeiten_data_anz_mo"></label><br />
                                <label type="text" class="text" name="oeffnungszeiten" id="oeffnungszeiten_data_anz_di"></label><br />
                                <label type="text" class="text" name="oeffnungszeiten" id="oeffnungszeiten_data_anz_mi"></label><br />
                                <label type="text" class="text" name="oeffnungszeiten" id="oeffnungszeiten_data_anz_do"></label><br />
                                <label type="text" class="text" name="oeffnungszeiten" id="oeffnungszeiten_data_anz_fr"></label><br />
                                <label type="text" class="text" name="oeffnungszeiten" id="oeffnungszeiten_data_anz_sa"></label><br />
                            </td> 
                        </tr>
                        <tr>
                            <td class="in1"><label>Mindesbestellwert:</label></td>
                            <td>
                                <label type="text" class="text" name="mindestbestellwert" id="mindestbestellwert_data_anz"></label>
                            </td>     
                        </tr>
                        <tr>
                            <td class="in1"><label>Lieferkosten:</label></td>
                            <td><label type="text" class="text" name="lieferkosten" id="lieferkosten_data_anz"></label><br /></td>
                        </tr>
                        <tr>
                            <td class="in1"><label>Telefon:</label></td>
                            <td><label name="telefon" id="pizzeriaTelefon"></label></td>  
                        </tr>
                    </table>
					<p>
						<input class="userbutton" id="datenaendern" name="datenaendern" type="button" value="Daten &auml;ndern" />
					</p>
                    <p>
						<input class="userbutton" id="pwaendern" name="pwaendern" type="button" value="Passwort &auml;ndern" />
					</p>
					<p>
                        	<input type='button' class='userbutton' onclick="window.location.href='./statistik.php'"value="meine Statistik"/>
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
	