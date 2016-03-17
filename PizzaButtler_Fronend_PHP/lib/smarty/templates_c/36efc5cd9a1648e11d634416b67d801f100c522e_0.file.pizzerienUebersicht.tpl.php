<?php /* Smarty version 3.1.27, created on 2016-03-15 14:34:38
         compiled from "views\pizzerienUebersicht.tpl" */ ?>
<?php
/*%%SmartyHeaderCode:1873556e80f6e2366d0_16674024%%*/
if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    '36efc5cd9a1648e11d634416b67d801f100c522e' => 
    array (
      0 => 'views\\pizzerienUebersicht.tpl',
      1 => 1458048534,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '1873556e80f6e2366d0_16674024',
  'has_nocache_code' => false,
  'version' => '3.1.27',
  'unifunc' => 'content_56e80f6e2848e7_45041770',
),false);
/*/%%SmartyHeaderCode%%*/
if ($_valid && !is_callable('content_56e80f6e2848e7_45041770')) {
function content_56e80f6e2848e7_45041770 ($_smarty_tpl) {

$_smarty_tpl->properties['nocache_hash'] = '1873556e80f6e2366d0_16674024';
?>
<html>
    <head>

        <title>Gefundene Pizzerien</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
        <link href="./css/main.css" rel="stylesheet" /> 
		<?php echo '<script'; ?>
 type="text/javascript" src="./javascript/pizzerienListe.js"><?php echo '</script'; ?>
>
		
    </head>
    
    <body>
    	<div class="maincontent" id="pizzerienContainer">
    	</div>
    	<div id="rechterBereich">
	    	<div class = "infocontent" id = "infoContainer">
	    		<p id="infoContainerText"> Der Butler Bringts!</p>
	    		<img id="logo_uebersicht" src="./images/butler.png" alt="Logo Pizzabutler">
	    	</div>
	    </div>
    </body>
</html><?php }
}
?>