<?php

require_once('lib/smtemplate.php');

$data = array(
    ## hier können beispielsweise Textbausteine/Texte aus der DB an die .tpl übergeben werden
    'date' => time()
);

$tpl = new SMTemplate();
$tpl->render('bewertung', $data, 'page_start', 'Bewertung PizzaButler');

?>