<?php /* Smarty version 3.1.27, created on 2016-03-24 09:26:41
         compiled from "views\pizzeria.tpl" */ ?>
<?php
/*%%SmartyHeaderCode:2204356f3a4c1b0c076_61071675%%*/
if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    'f8be390f4ad3bbf367f4c192c00064c28322633d' => 
    array (
      0 => 'views\\pizzeria.tpl',
      1 => 1458645661,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '2204356f3a4c1b0c076_61071675',
  'has_nocache_code' => false,
  'version' => '3.1.27',
  'unifunc' => 'content_56f3a4c1b4baf6_55294625',
),false);
/*/%%SmartyHeaderCode%%*/
if ($_valid && !is_callable('content_56f3a4c1b4baf6_55294625')) {
function content_56f3a4c1b4baf6_55294625 ($_smarty_tpl) {

$_smarty_tpl->properties['nocache_hash'] = '2204356f3a4c1b0c076_61071675';
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