<?php /* Smarty version 3.1.27, created on 2016-03-18 10:51:54
         compiled from "views\warenkorb.tpl" */ ?>
<?php
/*%%SmartyHeaderCode:1123856ebcfbab2a4c1_26358738%%*/
if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    '563985881f6b448462e5e7933f77fd8a818e5369' => 
    array (
      0 => 'views\\warenkorb.tpl',
      1 => 1458294712,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '1123856ebcfbab2a4c1_26358738',
  'has_nocache_code' => false,
  'version' => '3.1.27',
  'unifunc' => 'content_56ebcfbab68cd1_47484698',
),false);
/*/%%SmartyHeaderCode%%*/
if ($_valid && !is_callable('content_56ebcfbab68cd1_47484698')) {
function content_56ebcfbab68cd1_47484698 ($_smarty_tpl) {

$_smarty_tpl->properties['nocache_hash'] = '1123856ebcfbab2a4c1_26358738';
?>
<html>
    <head>

        <title>Warenkorb</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
        <link href="./css/main.css" rel="stylesheet" /> 
		<?php echo '<script'; ?>
 type="text/javascript" src="./javascript/warenkorb.js"><?php echo '</script'; ?>
>
		
    </head>
    
    <body>
    	<div id = "warenkorbuebersicht">	<img id='bildwarenkorb' src='./images/cart.png'> <p> Warenkorb </p>
		<div id="warenkorbAnzeigen"></div>
		<div id="bezahlart">
		<p>Bezahlart wählen</p>
		<form action="radio.html">
		<input type="radio" name="Zahlungsart"> Paypal <img id="bezahlart1" src="./images/bezahlart1.png" alt="Bezahlart 1"></input>
		<input type="radio" name="Zahlungsart"> Bar <img id="bezahlart2" src="./images/bezahlart2.png" alt="Bezahlart 2"></input>
		<input type="radio" name="Zahlungsart"> EC-Cash </input>
		</form>
		</div>
		</div>
    	<div id ="rechterBereich">
	    	<div id="infoContainer">
	    		
	    	</div>
    	</div>
    </body>
</html><?php }
}
?>