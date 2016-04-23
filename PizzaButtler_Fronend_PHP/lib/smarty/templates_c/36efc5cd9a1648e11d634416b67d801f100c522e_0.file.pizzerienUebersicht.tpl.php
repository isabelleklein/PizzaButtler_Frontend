<?php /* Smarty version 3.1.27, created on 2016-04-21 11:47:56
         compiled from "views\pizzerienUebersicht.tpl" */ ?>
<?php
/*%%SmartyHeaderCode:3495718a1cc7f9073_09033492%%*/
if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    '36efc5cd9a1648e11d634416b67d801f100c522e' => 
    array (
      0 => 'views\\pizzerienUebersicht.tpl',
      1 => 1461153068,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '3495718a1cc7f9073_09033492',
  'has_nocache_code' => false,
  'version' => '3.1.27',
  'unifunc' => 'content_5718a1cc82bd07_42696509',
),false);
/*/%%SmartyHeaderCode%%*/
if ($_valid && !is_callable('content_5718a1cc82bd07_42696509')) {
function content_5718a1cc82bd07_42696509 ($_smarty_tpl) {

$_smarty_tpl->properties['nocache_hash'] = '3495718a1cc7f9073_09033492';
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
    	<div id="pizzerienContainer">
    	</div>
    	<div id="rechterBereich">
	    	<div  id = "infoContainer">
	    		<p id="infoContainerText"> Der Butler Bringts!</p>
	    		<img id="logo_uebersicht" src="./images/butler.png" alt="Logo Pizzabutler">
	    	</div>
	    </div>
    </body>
</html><?php }
}
?>