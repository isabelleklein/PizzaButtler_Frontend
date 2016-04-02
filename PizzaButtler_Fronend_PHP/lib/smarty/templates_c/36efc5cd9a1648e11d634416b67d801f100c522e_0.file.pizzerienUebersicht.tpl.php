<?php /* Smarty version 3.1.27, created on 2016-04-02 08:09:07
         compiled from "views\pizzerienUebersicht.tpl" */ ?>
<?php
/*%%SmartyHeaderCode:3120156ff6203191698_63641251%%*/
if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    '36efc5cd9a1648e11d634416b67d801f100c522e' => 
    array (
      0 => 'views\\pizzerienUebersicht.tpl',
      1 => 1459577252,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '3120156ff6203191698_63641251',
  'has_nocache_code' => false,
  'version' => '3.1.27',
  'unifunc' => 'content_56ff62031d7ba4_11773942',
),false);
/*/%%SmartyHeaderCode%%*/
if ($_valid && !is_callable('content_56ff62031d7ba4_11773942')) {
function content_56ff62031d7ba4_11773942 ($_smarty_tpl) {

$_smarty_tpl->properties['nocache_hash'] = '3120156ff6203191698_63641251';
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
	    	<div  id = "infoContainer">
	    		<p id="infoContainerText"> Der Butler Bringts!</p>
	    		<img id="logo_uebersicht" src="./images/butler.png" alt="Logo Pizzabutler">
	    	</div>
	    </div>
    </body>
</html><?php }
}
?>