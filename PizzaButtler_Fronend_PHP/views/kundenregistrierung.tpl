<html>

    <head>

        <title>Kundenregistrieung Pizzabuttler</title>
        <meta charset="utf-8"/>
        <script type="text/javascript" src="./javascript/kundenregistrierung.js"></script>
        <link href="./css/main.css" rel="stylesheet" />

    </head>

    <body>
        <!-- anmelden.php muss natürlich noch angepasst werden -->

        <form action='anmelden.php' onsubmit='return checkForm()'>

            <h1>Kundenregistrieung bei Pizzabuttler</h1>
            
            <div class="fline">
                <a class="in1">Anrede</a>
				<select class="in2" name="status" id="status" size="1">
				    <option value="keine" selected> bitte w&aumlhlen	</option>
				    <option value="Herr"> Herr </option>
				    <option value="Frau"> Frau </option>
				</select>
            </div>

            <div class="fline">
                <label class="in1" for="vorname">Vorname</label>
                <input class="in2" type="text" name="vorname" id="vorname" maxlength="32">
            </div>

            <div class="fline">
                <label class="in1" for="name">Nachname</label>
                <input class="in2" type="text" name="name" id="name" maxlength="32">
            </div>

            <div class="fline">
                <label class="in1" for="day">Geburtsdatum</label>
                <input class="in2" type="text" name="day" id="day" maxlength="2" />
                <input type="text" name="month" id="month" maxlength="2" />
                <input type="text" name="year" id="year" maxlength="4" />
            </div>

            <div class="fline">
                <label class="in1" for="strasse">Strasse / Hausnummer</label>
                <input class="in2" type="text" name="strasse" id="strasse" maxlength="50"/>
                <input type="text" name="hnr" id="hnr" maxlength="4"/>
            </div>

            <div class="fline">
                <label class="in1" for="plz">PLZ / Wohnort</label>
                <input class="in2" type="text" name="plz" id="plz" maxlength="6"/>
                <input type="text" name="wohnort" id="wohnort" maxlength="50"/>
            </div>

            <div class="fline">
                <label class="in1" for="email">Email</label>
                <input class="in2" type="text" name="email" id="email" maxlength="32"/>
            </div>

            <div class="fline">
                <label class="in1" for="tel">Telefonnummer</label>
                <input class="in2" type="text" name="tel" id="tel" maxlength="32"/>
            </div>

            <div class="fline">
                <label class="in1" for="pw1">Passwort</label>
                <input class="in2" type="text" name="pw1" id="pw1" maxlength="32"/>
            </div>

            <div class="fline">
                <label class="in1" for="pw2">Passwort wiederholen</label>
                <input class="in2" type="text" name="pw2" id="pw2" maxlength="32"/>
            </div>

            <p>
                <input id="absenden" type="submit" value="Absenden" class="button" />
            </p>
            
<!--            <p>{$date|date_format:"%d.%m.%Y"}</p>       -->

        </form>

    </body>

</html>