<?php
   /* Session wieder aufnehmen */
   session_start();
   /* Kontrolle, ob innerhalb der Session */
   if (!isset($_SESSION["n"]))
      exit("<p>Kein Zugang<br />
         <a href='login_kunde.php'>Zum Login</a></p>");
?>
<html>
<body>
<h3>Beliebige Seite</h3>
<?php
   /* Begrüßung des Benutzers */
   echo "<p>Hallo " . $_SESSION["n"] . "</p>";
?>
<p><a href="login_intro.php">Zur Intro-Seite</a></p> <p><a href="login_kunde.php">Logout</a></p>
</body>
</html>