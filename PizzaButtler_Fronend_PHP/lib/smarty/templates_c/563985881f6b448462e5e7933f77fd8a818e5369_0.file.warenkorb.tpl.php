<?php /* Smarty version 3.1.27, created on 2016-03-24 09:59:32
         compiled from "views\warenkorb.tpl" */ ?>
<?php
/*%%SmartyHeaderCode:450956f3ac74d1f773_58226656%%*/
if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    '563985881f6b448462e5e7933f77fd8a818e5369' => 
    array (
      0 => 'views\\warenkorb.tpl',
      1 => 1458807945,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '450956f3ac74d1f773_58226656',
  'has_nocache_code' => false,
  'version' => '3.1.27',
  'unifunc' => 'content_56f3ac74d68351_91779975',
),false);
/*/%%SmartyHeaderCode%%*/
if ($_valid && !is_callable('content_56f3ac74d68351_91779975')) {
function content_56f3ac74d68351_91779975 ($_smarty_tpl) {

$_smarty_tpl->properties['nocache_hash'] = '450956f3ac74d1f773_58226656';
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
    	<div id = "warenkorbuebersicht"> <img id='bildwarenkorb' src='./images/cart.png'> <p id="bestellzeit"></p>
		<div id="warenkorbAnzeigen"></div>
		<div id="bezahlart">
		<p>Bezahlart wählen</p>
		<div id="bezahlartradio">
		<form action="radio.html">
		<input type="radio" name="Zahlungsart" class="zahlungsart"> Paypal <img id="bezahlart1" src="./images/bezahlart1.png" alt="Bezahlart 1"></input><br>
		<input type="radio" name="Zahlungsart" class="zahlungsart"> Bar <img id="bezahlart2" src="./images/bezahlart2.png" alt="Bezahlart 2"></input><br>
		<input type="radio" name="Zahlungsart" class="zahlungsart"> EC-Cash </input>
		</form>
		</div>
		</div>
		<div id="lieferadresseAnzeigen"></div>
		</div>
    	<div class = "infocontent">
    		<p id="infoContainerText"> Der Butler Bringts!</p>
    		<img id="logo_uebersicht" src="./images/butler.png" alt="Logo Pizzabutler">
    	</div>
    </body>
</html><?php }
}
?>