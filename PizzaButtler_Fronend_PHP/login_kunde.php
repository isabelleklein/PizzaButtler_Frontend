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
        <form action="login_intro.php" method="post">
            <p>Bitte geben Sie hier Ihren Benutzernamen und Passwort ein</p>
            <p><input name="n" /> Name</p>
            <p><input type="password" name="p" /> Passwort</p> 
<!-- passwortvergessen.php muss noch geschrieben werden -->
            <p><a href="passwortvergessen.php">Passwort vergessen?</a></p> 
            <p><input type="submit" value="Login" /></p>
        </form>
    </body>
</html>