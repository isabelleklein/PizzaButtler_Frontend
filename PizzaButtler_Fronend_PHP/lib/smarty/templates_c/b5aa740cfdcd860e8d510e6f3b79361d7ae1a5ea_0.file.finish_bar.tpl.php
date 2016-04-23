<?php /* Smarty version 3.1.27, created on 2016-04-21 22:58:22
         compiled from "views\finish_bar.tpl" */ ?>
<?php
/*%%SmartyHeaderCode:1344557193eee27bdf3_89213131%%*/
if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    'b5aa740cfdcd860e8d510e6f3b79361d7ae1a5ea' => 
    array (
      0 => 'views\\finish_bar.tpl',
      1 => 1461153068,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '1344557193eee27bdf3_89213131',
  'has_nocache_code' => false,
  'version' => '3.1.27',
  'unifunc' => 'content_57193eee35e720_99258717',
),false);
/*/%%SmartyHeaderCode%%*/
if ($_valid && !is_callable('content_57193eee35e720_99258717')) {
function content_57193eee35e720_99258717 ($_smarty_tpl) {

$_smarty_tpl->properties['nocache_hash'] = '1344557193eee27bdf3_89213131';
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
        Bitte halte das Bargeld in Höhe von <span id="gesamtsumme"></span>€ bereit, wir werden Deine Bestellung

		schnellstmöglich bearbeiten und wünschen Dir guten Appetit!<br>
		Alle weiteren Informationen zu Deiner Bestellung erhälst Du in Deiner Bestätigungsmail.<br> </br>    
        
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