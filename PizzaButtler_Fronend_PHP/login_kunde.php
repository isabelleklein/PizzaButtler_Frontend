<?php
   /* Vor Beenden der Session wieder aufnehmen */
   session_start();
   /* Beenden der Session */
   session_destroy();
   $_SESSION = array();
?>
<html>
    <body>
        <h3>Login-Seite</h3>
        <form id='login' name='login' action="#" >
            <p>Bitte geben Sie hier Ihren Benutzernamen und Passwort ein</p>
            <p><input name="n" /> Mailadresse</p>
            <p><input type="password" name="p" /> Passwort</p> 
<!-- passwortvergessen.php muss noch geschrieben werden -->
            <p><a href="passwortvergessen.php">Passwort vergessen?</a></p> 
            <p>
                <input id="login" name="login" type="button" value="Login"/>
            </p>
        </form>
    </body>
</html>