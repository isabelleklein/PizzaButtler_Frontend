<html>
    <head>

        <title>Benutzerdaten ändern</title>
        <link href="./css/main.css" rel="stylesheet" /> 
		
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
		<script type="text/javascript" src="./javascript/user.js"></script>
		<script type="text/javascript" src="./javascript/kundenregistrierung.js"></script>
		
    </head>
    
    <body>
    	<div id=datenContainer>
			<form id='pwaendern' name="pwaendern" action="#">
				<h3 class="contenthead"> Deine Daten / Passwort ändern </h3>
				
	            <div class="fline">
	                <input type="password" name="pw_alt" id="pw_alt" required onchange="passwortPruefen1()"  placeholder="altes Passwort"/>
	            </div>
	                <input class="userbutton" id="pwspeichern" name="pwspeichern" type="button" value="&Auml;nderungen speichern"/>
                    <a href="user_pizzeria.php"><input class="userbutton" id="datenspeichern_abbr" name="datenspeichern_abbr" type="button" value="abbrechen"/>
                    </a>
                </p>
			</form>
		</div>
    </body>
</html>