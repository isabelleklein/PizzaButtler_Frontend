<html>
<body>
<?php
   /* Verbindung aufnehmen */
   /* Die Syntax hierfür lautet: mysql_connect("MySQL-Server","Benutzername","Passwort")*/
   $con = mysqli_connect("pizza-db.krihi.com","pizzabutler","dsDrPuQqPsapM9pt");
   /* Datenbank auswählen */
   mysqli_select_db($con, "pizzabuttler");
   /* SQL-Abfrage ausführen */
$res = mysqli_query($con, "select * from user"); /* Anzahl Datensätze ermitteln und ausgeben */
   $num = mysqli_num_rows($res);
   echo "$num Datensätze gefunden<br />";
   /* Datensätze aus Ergebnis ermitteln, */
   /* in Array speichern und ausgeben    */
   while ($dsatz = mysqli_fetch_assoc($res))
   {
      echo $dsatz["Anrede"] . ", "
         . $dsatz["Vorname"] . ", "
         . $dsatz["Nachname"] . ", "
         . $dsatz["Strasse"] . ", "
         . $dsatz["Hausnummer"] . "<br />";
}
   /* Verbindung schließen */
   mysqli_close($con);
?>
</body>
</html>