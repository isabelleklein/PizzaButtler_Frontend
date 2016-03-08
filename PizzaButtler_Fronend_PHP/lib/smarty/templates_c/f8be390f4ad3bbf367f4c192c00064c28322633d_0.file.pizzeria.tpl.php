<?php /* Smarty version 3.1.27, created on 2016-03-08 12:56:29
         compiled from "views\pizzeria.tpl" */ ?>
<?php
/*%%SmartyHeaderCode:2528356debded16bd16_77574815%%*/
if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    'f8be390f4ad3bbf367f4c192c00064c28322633d' => 
    array (
      0 => 'views\\pizzeria.tpl',
      1 => 1457438115,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '2528356debded16bd16_77574815',
  'has_nocache_code' => false,
  'version' => '3.1.27',
  'unifunc' => 'content_56debded1b6f60_34912499',
),false);
/*/%%SmartyHeaderCode%%*/
if ($_valid && !is_callable('content_56debded1b6f60_34912499')) {
function content_56debded1b6f60_34912499 ($_smarty_tpl) {

$_smarty_tpl->properties['nocache_hash'] = '2528356debded16bd16_77574815';
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
    	<div id="infoContainer">
    		
    	</div>
    	<div id="warenkorbContainer">
    	 <img id='bildwarenkorb' src='./images/cart.png'> <p> Warenkorb </p>
    	</div>
    </body>
</html><?php }
}
?>