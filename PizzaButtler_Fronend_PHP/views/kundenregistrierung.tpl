<html>

    <head>

        <title>Kundenregistrierung Pizzabuttler</title>
        <meta charset="utf-8"/>
        <script type="text/javascript" src="../javascript/kundenregistrierung.js"></script>
 		<script type="text/javascript" src="../javascript/jquery.js"></script>
 		<script src="../javascript/jquery-ui.js"></script>
        <link href="../css/jquery-ui.css" rel="stylesheet" />
		
    </head>

    <body>

        <form id='registrieren' name="registrieren" action="#" onsubmit='#'>

            <h1>Kundenregistrieung bei Pizzabuttler</h1>
            
            <div class="fline">
                <a class="in1">Anrede</a>
				<select class="in2" name="status" id="status" size="1" required>
				    <option value="keine" selected disabled> bitte w&aumlhlen</option>
				    <option value="Herr"> Herr </option>
				    <option value="Frau"> Frau </option>
				</select>
            </div>
			
            <div class="fline">
                <label class="in1" for="vorname">Vorname</label>
                <input type="text" class="in2" name="vorname" id="vorname" pattern="^[A-Za-zÀ-Üß-ü_]{3,32}$" required title="Zwischen 3 und 32 Zeichen (Umlaute möglich)"></input>
                
            </div>

            <div class="fline">
                <label class="in1" for="name">Nachname</label>
                <input type="text" class="in2" type="text" name="name" id="name" pattern="^[A-Za-zÀ-Üß-ü_]{3,32}$" required title="3 bis 32 Zeichen (Umlaute möglich)"/>
            </div>

			<script>
			  	$(function() {
				    $( "#datepicker" ).datepicker({
				      changeMonth: true,
				      changeYear: true
				    });
				 });
			</script>
            <div class="fline">
                <label class="in1" for="day">Geburtsdatum</label>
                <input type="text" class="in2" name="gebdat" id="datepicker" placeholder="dd.mm.yyyy" pattern="^[0-9]{2,2}[-]{1,1}[0-9]{2,2}[-]{1,1}[0-9]{4,4}$" required title="dd.mm.yyyy">
            </div>

            <div class="fline">
                <label class="in1" for="strasse">Strasse / Hausnummer</label>
                <input class="in2" type="text" name="strasse" id="strasse" pattern="^[A-Za-zÀ-Üß-ü_]{1,50}[ ]{0,1}[A-Za-zÀ-Üß-ü_]{0,50}[ ]{0,1}[A-Za-zÀ-Üß-ü_]{0,50}$" required title="Nur Buchstaben inklusive Umlaute und maximal 2 Leerzeichen"/>
                <input type="text" name="hnr" id="hnr" pattern="^[0-9-_\.]{1,20}[a-zA-Z]{0,1}$" required title="Hausnummer mit maximal einem Zusatzbuchstaben a-z ohne Umlaute "/>
            </div>

            <div class="fline">
                <label class="in1" for="plz">PLZ / Wohnort</label>
                <input class="in2" type="text" name="plz" id="plz" pattern="[0-9]{5}" required title="5 Zahlen"/>
                <input type="text" name="wohnort" id="wohnort" pattern="^[A-Za-zÀ-Üß-ü_]{1,50}[ ]{0,1}[A-Za-zÀ-Üß-ü_]{0,50}[ ]{0,1}[A-Za-zÀ-Üß-ü_]{0,50}$" required title="Nur Buchstaben inklusive Umlaute und maximal 2 Leerzeichen" required/>
            </div>

            <div class="fline">
                <label class="in1" for="email">Email</label>
                <input class="in2" type="email" name="email" id="email" required maxlength="32"/>
            </div>

            <div class="fline">
                <label class="in1" for="tel">Telefonnummer</label>
                <input class="in2" type="text" name="tel" id="tel" pattern="^[0-9-_\.]{5,20}$" required title="Mindestens 5 Maximal 20 Ziffern"/>
            </div>

            <div class="fline">
                <label class="in1" for="pw1">Passwort</label>
                <input class="in2" type="password" name="pw1" id="pw1" minlength="8" maxlength="32" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" required title="Mindestens eine Ziffer, ein Großbuchstabe, ein Kleinbuchstabe und insgesamt 8 Zeichen" 
                		onchange="this.setCustomValidity(this.validity.patternMismatch ? 'Must have at least 6 characters' : ''); if(this.checkValidity()) form.pw2.pattern = this.value;"/>
            </div>

            <div class="fline">
                <label class="in1" for="pw2">Passwort wiederholen</label>
                <input class="in2" type="password" name="pw2" id="pw2" minlength="8" maxlength="32" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" required title="Mindestens eine Ziffer, ein Großbuchstabe, ein Kleinbuchstabe und insgesamt 8 Zeichen" 
                		onchange="this.setCustomValidity(this.validity.patternMismatch ? 'Please enter the same Password as above' : '');"/>
            </div>

            <p>
                <input id="absenden" name="absenden" type="button" value="Absenden" />
            </p>
        </form>
        
        <br />
        <div id="div_ajaxResponse"></div>
    </body>

</html>

    
