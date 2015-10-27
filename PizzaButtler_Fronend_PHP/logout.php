<?php
   /* Vor Beenden der Session wieder aufnehmen */
   session_start();
   $_SESSION = array();
   /* Beenden der Session */
   session_destroy();
?>