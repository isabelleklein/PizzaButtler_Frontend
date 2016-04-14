<?php /* Smarty version 3.1.27, created on 2016-04-14 18:48:36
         compiled from "views\pizzeria.tpl" */ ?>
<?php
/*%%SmartyHeaderCode:19352570fc9e4269a51_42104798%%*/
if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    'f8be390f4ad3bbf367f4c192c00064c28322633d' => 
    array (
      0 => 'views\\pizzeria.tpl',
      1 => 1459841729,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '19352570fc9e4269a51_42104798',
  'has_nocache_code' => false,
  'version' => '3.1.27',
  'unifunc' => 'content_570fc9e42b4f71_35008009',
),false);
/*/%%SmartyHeaderCode%%*/
if ($_valid && !is_callable('content_570fc9e42b4f71_35008009')) {
function content_570fc9e42b4f71_35008009 ($_smarty_tpl) {

$_smarty_tpl->properties['nocache_hash'] = '19352570fc9e4269a51_42104798';
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
    	 	<input type= "button" class="userbutton" value="Bestaetigen" onclick="schliessen()"></input>
    	 	<div id="overlay">
    	 	
    	 			
    	 	</div>
    	</div>
    </body>
</html><?php }
}
?>