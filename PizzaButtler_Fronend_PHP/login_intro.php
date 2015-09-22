 <?php
   /* Session starten oder wieder aufnehmen */
   session_start();
   /* Falls Aufruf von Login-Seite */
   if(isset($_POST["n"]))
   {
      /* Falls Name und Passwort korrekt */
if($_POST["n"] == "Hans" && $_POST["p"] == "bingo"
|| $_POST["n"] == "Gerd" && $_POST["p"] == "tango")
      {
         $_SESSION["n"] = $_POST["n"];
} }

/* Kontrolle, ob innerhalb der Session */
   if (!isset($_SESSION["n"]))
      exit("<p>Kein Zugang<br />
<a href='login_kunde.php'>Zum Login</a></p>");
?>
<html>
    <body>
        <h3>Profilseite / Daten ändern </h3>

        <form action="login_kunde.php" method="post">
            <?php
       /* Begrüßung des Benutzers */
            echo "<p>Hallo " . $_SESSION["n"] . "</p>";
            ?>
            <p>Hier folgen dann die Kundendaten die aus der Datenbank gezogen werden ...</p>
            <p><input type="submit" value="Logout" /></p>

    <!-- dies wird nur benötigt, falls wir noch eine weitere Webseite verlinken, so wäre dann der Aufbau, wenn man die Session beachtet! 
            <p><a href="login_erfolgreich.php">Link zu einer beliebigen Seite</a></p> 
    -->



        </form>
    </body>
</html>