<?php /* Smarty version 3.1.27, created on 2016-03-21 12:37:41
         compiled from "views\finish.tpl" */ ?>
<?php
/*%%SmartyHeaderCode:159956efdd051ca7f3_21947243%%*/
if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    '41d47e005a337d40adbcbf80cb06e45daa768b75' => 
    array (
      0 => 'views\\finish.tpl',
      1 => 1458554791,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '159956efdd051ca7f3_21947243',
  'has_nocache_code' => false,
  'version' => '3.1.27',
  'unifunc' => 'content_56efdd05220710_76975284',
),false);
/*/%%SmartyHeaderCode%%*/
if ($_valid && !is_callable('content_56efdd05220710_76975284')) {
function content_56efdd05220710_76975284 ($_smarty_tpl) {

$_smarty_tpl->properties['nocache_hash'] = '159956efdd051ca7f3_21947243';
?>
<html>
    <head>

        <title>Vielen Dank für Ihren Einkauf</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
        <link href="./css/main.css" rel="stylesheet" /> 
		<?php echo '<script'; ?>
 type="text/javascript" src="./javascript/warenkorb.js"><?php echo '</script'; ?>
>
		
    </head>
    
    <body>
    	<div class="maincontent">
            <h3 class="contenthead"> Vielen Dank für Ihre Bestellung bei PizzaButler </h3>
            
            <div>
                </br></br>
                Sie erhalten in kürze eine Bestellbestätigung per E-Mail.
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