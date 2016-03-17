<?php /* Smarty version 3.1.27, created on 2016-03-17 23:22:25
         compiled from "views\pizzeria.tpl" */ ?>
<?php
/*%%SmartyHeaderCode:1725256eb2e21d458b2_18245282%%*/
if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    'f8be390f4ad3bbf367f4c192c00064c28322633d' => 
    array (
      0 => 'views\\pizzeria.tpl',
      1 => 1458125066,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '1725256eb2e21d458b2_18245282',
  'has_nocache_code' => false,
  'version' => '3.1.27',
  'unifunc' => 'content_56eb2e21d836e8_95172759',
),false);
/*/%%SmartyHeaderCode%%*/
if ($_valid && !is_callable('content_56eb2e21d836e8_95172759')) {
function content_56eb2e21d836e8_95172759 ($_smarty_tpl) {

$_smarty_tpl->properties['nocache_hash'] = '1725256eb2e21d458b2_18245282';
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
    	<div id ="rechterBereich">
	    	<div id="infoContainer">
	    		
	    	</div>
	    	<div id="warenkorbContainer">
	    	 <img id='bildwarenkorb' src='./images/cart.png'> <p> Warenkorb </p>
			 <div id='showwarenkorb'></div>
			 <div id='summeWarenkorb'></div>
			 <div id='zurKasse'></div>
    	</div>
    </body>
</html><?php }
}
?>