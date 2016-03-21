<?php /* Smarty version 3.1.27, created on 2016-03-21 22:02:41
         compiled from "views\pizzeria.tpl" */ ?>
<?php
/*%%SmartyHeaderCode:294356f0617105a060_22698490%%*/
if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    'f8be390f4ad3bbf367f4c192c00064c28322633d' => 
    array (
      0 => 'views\\pizzeria.tpl',
      1 => 1458589965,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '294356f0617105a060_22698490',
  'has_nocache_code' => false,
  'version' => '3.1.27',
  'unifunc' => 'content_56f06171098879_59784220',
),false);
/*/%%SmartyHeaderCode%%*/
if ($_valid && !is_callable('content_56f06171098879_59784220')) {
function content_56f06171098879_59784220 ($_smarty_tpl) {

$_smarty_tpl->properties['nocache_hash'] = '294356f0617105a060_22698490';
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
    	<div id="extrazutaten_container">
    	  	<input type="button"  id="close" value="X" onclick ="schliessen()"></input>
    	 	
    	 	<div id="extrazutaten"></div>
    	 	<input type= "button" value="Bestaetigen" onclick="schliessen()"></input>
    	 	<div id="overlay">
    	 	
    	 			
    	 	</div>
    	</div>
    </body>
</html><?php }
}
?>