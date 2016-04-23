<?php /* Smarty version 3.1.27, created on 2016-04-21 12:02:25
         compiled from "views\finish_paypal.tpl" */ ?>
<?php
/*%%SmartyHeaderCode:138755718a5310a0dc4_90227683%%*/
if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    'c9bf07fb0b9ef6bc6fb96db7d77cb6d437eaffe3' => 
    array (
      0 => 'views\\finish_paypal.tpl',
      1 => 1461153068,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '138755718a5310a0dc4_90227683',
  'has_nocache_code' => false,
  'version' => '3.1.27',
  'unifunc' => 'content_5718a5310db759_15696539',
),false);
/*/%%SmartyHeaderCode%%*/
if ($_valid && !is_callable('content_5718a5310db759_15696539')) {
function content_5718a5310db759_15696539 ($_smarty_tpl) {

$_smarty_tpl->properties['nocache_hash'] = '138755718a5310a0dc4_90227683';
?>
<html>
    <head>

        <title>Vielen Dank für Ihren Einkauf</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
        <link href="./css/main.css" rel="stylesheet" /> 
		<?php echo '<script'; ?>
 type="text/javascript" src="./javascript/finish.js"><?php echo '</script'; ?>
>
		
    </head>
    
    <body>
    	<div class="maincontent">
            <h3 class="contenthead"> Vielen Dank für Deine Bestellung bei PizzaButler! </h3>
            
            <div>
                </br>
		Deine Bezahlung von <span id="gesamtsumme"></span>€ über Paypal ist bei uns eingegangen. Wir werden Deine Bestellung
		schnellstmöglich bearbeiten und wünschen Dir guten Appetit!<br>
		Alle weiteren Informationen zu Deiner Bestellung erhälst Du in Deiner Bestätigungsmail.<br><br>
        
        Guten Appetit!
            </div>
        </div>
    	<div class = "infocontent">
    		<p id="infoContainerText"> Der Butler Bringts!</p>
    		<img id="logo_uebersicht" src="./images/butler.png" alt="Logo Pizzabutler">
    	</div>
    </body>
</html><?php }
}
?>