<?php

require_once('lib/smtemplate.php');

$data = array(
    
);

$tpl = new SMTemplate();
$tpl->render('datenanzeigen', $data, 'page', 'Meine Daten');

?>