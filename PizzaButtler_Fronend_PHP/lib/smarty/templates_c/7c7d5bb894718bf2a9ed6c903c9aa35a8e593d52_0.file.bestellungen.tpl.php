<?php /* Smarty version 3.1.27, created on 2016-04-22 08:37:47
         compiled from "views\bestellungen.tpl" */ ?>
<?php
/*%%SmartyHeaderCode:228965719c6bb6fc277_70680276%%*/
if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    '7c7d5bb894718bf2a9ed6c903c9aa35a8e593d52' => 
    array (
      0 => 'views\\bestellungen.tpl',
      1 => 1461306768,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '228965719c6bb6fc277_70680276',
  'has_nocache_code' => false,
  'version' => '3.1.27',
  'unifunc' => 'content_5719c6bb72b080_48385320',
),false);
/*/%%SmartyHeaderCode%%*/
if ($_valid && !is_callable('content_5719c6bb72b080_48385320')) {
function content_5719c6bb72b080_48385320 ($_smarty_tpl) {

$_smarty_tpl->properties['nocache_hash'] = '228965719c6bb6fc277_70680276';
?>
<html>
    <head>
		<?php echo '<script'; ?>
 type="text/javascript" src="./javascript/bestellungen.js"><?php echo '</script'; ?>
>
    </head>
    
    <body>
    	<div class="maincontent">
    		<h2 class='contenthead'>Meine Bestellungen</h2>
			<div id="bestellungen">
			</div>  
    	</div>
    </body>
</html>
	<?php }
}
?>