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
			<form id='userpwaendern' name="userpwaendern" action="#">
				<h3 class="contenthead"> Deine Daten / Passwort ändern </h3>
				
	            <div class="fline">
	                <input type="password" name="userpw_alt" id="userpw_alt" required onchange="passwortPruefenaend()"  placeholder="altes Passwort"/>
	            </div>
				<p>
	                <input class="userbutton" id="userpwspeichern" name="userpwspeichern" type="button" value="&Auml;nderungen speichern" onClick='userpwspeichern()'/>
                    <a href="user.php"><input class="userbutton" id="datenspeichern_abbr" name="datenspeichern_abbr" type="button" value="abbrechen"/></a>
                </p>
			</form>
		</div>
    </body>
</html>