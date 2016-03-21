<?php /* Smarty version 3.1.27, created on 2016-03-21 10:21:19
         compiled from "views\warenkorb.tpl" */ ?>
<?php
/*%%SmartyHeaderCode:3141856efbd0fbe4a66_89750828%%*/
if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    '563985881f6b448462e5e7933f77fd8a818e5369' => 
    array (
      0 => 'views\\warenkorb.tpl',
      1 => 1458552077,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '3141856efbd0fbe4a66_89750828',
  'has_nocache_code' => false,
  'version' => '3.1.27',
  'unifunc' => 'content_56efbd0fc32c79_57369020',
),false);
/*/%%SmartyHeaderCode%%*/
if ($_valid && !is_callable('content_56efbd0fc32c79_57369020')) {
function content_56efbd0fc32c79_57369020 ($_smarty_tpl) {

$_smarty_tpl->properties['nocache_hash'] = '3141856efbd0fbe4a66_89750828';
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
		<br><button class = 'bestellen' > Bestellen </button>
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