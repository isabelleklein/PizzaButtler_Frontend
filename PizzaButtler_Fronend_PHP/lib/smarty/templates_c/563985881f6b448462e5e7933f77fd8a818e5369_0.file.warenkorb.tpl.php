<?php /* Smarty version 3.1.27, created on 2016-03-17 11:31:24
         compiled from "views\warenkorb.tpl" */ ?>
<?php
/*%%SmartyHeaderCode:3048456ea877cacd234_58594808%%*/
if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    '563985881f6b448462e5e7933f77fd8a818e5369' => 
    array (
      0 => 'views\\warenkorb.tpl',
      1 => 1458210682,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '3048456ea877cacd234_58594808',
  'has_nocache_code' => false,
  'version' => '3.1.27',
  'unifunc' => 'content_56ea877cb13748_06283496',
),false);
/*/%%SmartyHeaderCode%%*/
if ($_valid && !is_callable('content_56ea877cb13748_06283496')) {
function content_56ea877cb13748_06283496 ($_smarty_tpl) {

$_smarty_tpl->properties['nocache_hash'] = '3048456ea877cacd234_58594808';
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
    	<div id = "warenkorbuebersicht">	<img id='bildwarenkorb' src='./images/cart.png'> <p> Warenkorb </p>
		<div id="warenkorbAnzeigen"></div>
		</div>
    	<div id ="rechterBereich">
	    	<div id="infoContainer">
	    		
	    	</div>
    	</div>
    </body>
</html><?php }
}
?>