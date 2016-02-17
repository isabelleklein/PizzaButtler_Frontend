<?php /* Smarty version 3.1.27, created on 2016-02-17 16:12:02
         compiled from "views\pizzeria.tpl" */ ?>
<?php
/*%%SmartyHeaderCode:2815856c48dc250a498_20814808%%*/
if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    'f8be390f4ad3bbf367f4c192c00064c28322633d' => 
    array (
      0 => 'views\\pizzeria.tpl',
      1 => 1455721918,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '2815856c48dc250a498_20814808',
  'has_nocache_code' => false,
  'version' => '3.1.27',
  'unifunc' => 'content_56c48dc2559760_79986865',
),false);
/*/%%SmartyHeaderCode%%*/
if ($_valid && !is_callable('content_56c48dc2559760_79986865')) {
function content_56c48dc2559760_79986865 ($_smarty_tpl) {

$_smarty_tpl->properties['nocache_hash'] = '2815856c48dc250a498_20814808';
?>
<html>
    <head>

        <title>Pizzeria xyz</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
        <link href="./css/main.css" rel="stylesheet" /> 
		<?php echo '<script'; ?>
 type="text/javascript" src="./javascript/pizzeria.js"><?php echo '</script'; ?>
>
		
    </head>
    
    <body>
    	<div id="pizzerienContainer">
			
    	</div>
    	<div id = "infoContainer">
    		<p id="infoContainerText"> Der Buttler Bringts!</p>
    		<img id="logo_uebersicht" src="./images/butler.png" alt="Logo Pizzabutler">
    	</div>
    </body>
</html><?php }
}
?>