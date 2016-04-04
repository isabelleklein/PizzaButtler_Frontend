<html>
    <head>

        <title>Warenkorb</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
        <link href="./css/main.css" rel="stylesheet" /> 
		<script type="text/javascript" src="./javascript/warenkorb.js"></script>
		
    </head>
    
    <body>
    	<div id = "warenkorbuebersicht" class="maincontent"> <img id='bildwarenkorb' src='./images/cart.png'> <p id="bestellzeit"></p>
            <div id="warenkorbAnzeigen"></div>
            <div id="bezahlart">
                <p>Bitte wähle Deine Bezahlart! </p>
                <div id="bezahlartradio">
                    <form action="radio.html">
                        <div class="bezahlartdesign">
                            <label>
                                <img id="bezahlart3" src="./images/bezahlart1.png" alt="Bezahlart 1"> <br>
                                <input type="radio" name="Zahlungsart" class="zahlungsart2"> </input>
                            </label>
                        </div>
                        <div class="bezahlartdesign">
                            <label>
                                <img id="bezahlart4" src="./images/bezahlart2.png" alt="Bezahlart 2"></input><br>
                                <input type="radio" name="Zahlungsart" class="zahlungsart2"> <br>
                            </label>
                        </div>
                    </form>
                </div>
            </div>
            <div id="lieferadresseAnzeigen"></div>

		</div>
    	<div class = "infocontent">
    		<p id="infoContainerText"> Der Butler Bringts!</p>
    		<img id="logo_uebersicht" src="./images/butler.png" alt="Logo Pizzabutler">
    	</div>
    </body>
</html>