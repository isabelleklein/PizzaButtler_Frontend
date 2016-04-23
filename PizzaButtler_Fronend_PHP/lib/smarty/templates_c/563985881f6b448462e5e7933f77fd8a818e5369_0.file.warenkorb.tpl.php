<?php /* Smarty version 3.1.27, created on 2016-04-21 12:02:14
         compiled from "views\warenkorb.tpl" */ ?>
<?php
/*%%SmartyHeaderCode:229465718a526d9acf3_15663870%%*/
if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    '563985881f6b448462e5e7933f77fd8a818e5369' => 
    array (
      0 => 'views\\warenkorb.tpl',
      1 => 1461153068,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '229465718a526d9acf3_15663870',
  'has_nocache_code' => false,
  'version' => '3.1.27',
  'unifunc' => 'content_5718a526dc1e09_64305725',
),false);
/*/%%SmartyHeaderCode%%*/
if ($_valid && !is_callable('content_5718a526dc1e09_64305725')) {
function content_5718a526dc1e09_64305725 ($_smarty_tpl) {

$_smarty_tpl->properties['nocache_hash'] = '229465718a526d9acf3_15663870';
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
    	<div id = "warenkorbuebersicht" class="maincontent"> <img id='bildwarenkorb' src='./images/cart.png'> <p id="bestellzeit"></p>
            <div id="warenkorbAnzeigen"></div>
            <div id="bezahlart">
                <p>Bitte wähle Deine Bezahlart! </p>
                <div id="bezahlartradio">
                    <form action="radio.html">
                        <div class="bezahlartdesign">
                            <label>
                                <img id="bezahlart3" src="./images/bezahlart1.png" alt="Bezahlart 1"> <br>
                                <input type="radio" name="Zahlungsart" class="zahlungsart2" id="paypal"> </input>
                            </label>
                        </div>
                        <div class="bezahlartdesign">
                            <label>
                                <img id="bezahlart4" src="./images/bezahlart2.png" alt="Bezahlart 2"></input><br>
                                <input type="radio" name="Zahlungsart" class="zahlungsart2" id="bar"> <br>
                            </label>
                        </div>
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