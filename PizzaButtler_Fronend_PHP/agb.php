<?php

require_once('lib/smtemplate.php');

$data = array(
    
);

$tpl = new SMTemplate();
$tpl->render('agb', $data, 'page', 'AGB');

?>