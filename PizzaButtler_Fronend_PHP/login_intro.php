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
<h3>Intro-Seite</h3>
<?php
   /* Begrüßung des Benutzers */
   echo "<p>Hallo " . $_SESSION["n"] . "</p>";
?>
<p><a href="login_erfolgreich.php">Zur beliebigen Seite</a></p> <p><a href="login_kunde.php">Logoff</a></p>
</body>
</html>