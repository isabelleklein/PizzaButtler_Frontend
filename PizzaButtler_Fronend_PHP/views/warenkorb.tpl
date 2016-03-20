<html>
    <head>

        <title>Warenkorb</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
        <link href="./css/main.css" rel="stylesheet" /> 
		<script type="text/javascript" src="./javascript/warenkorb.js"></script>
		
    </head>
    
    <body>
    	<div id = "warenkorbuebersicht"> <img id='bildwarenkorb' src='./images/cart.png'> <p id="bestellzeit"></p>
		<div id="warenkorbAnzeigen"></div>
		<div id="bezahlart">
		<p>Bezahlart wählen</p>
		<form action="radio.html">
		<input type="radio" name="Zahlungsart"> Paypal <img id="bezahlart1" src="./images/bezahlart1.png" alt="Bezahlart 1"></input>
		<input type="radio" name="Zahlungsart"> Bar <img id="bezahlart2" src="./images/bezahlart2.png" alt="Bezahlart 2"></input>
		<input type="radio" name="Zahlungsart"> EC-Cash </input>
		</form>
		<br><button class = 'bestellen' > Bestellen </button>
		</div>
		</div>
    	<div id ="rechterBereich">
	    	<div id="infoContainer">
	    		
	    	</div>
    	</div>
    </body>
</html>